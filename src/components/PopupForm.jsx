import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import API from "../service/API";
import logo from "../assets/logo-dark.svg";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    sub: "Choose Course",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    "Choose Course",
    "Full Stack Development",
    "Embedded Systems",
    "Digital Marketing",
    "Cloud Computing",
    "Data Science",
    "Machine Learning",
    "UI/UX Design",
    "Software Testing",
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    exit: { scale: 0.8, opacity: 0 },
  };

  const successItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, y: 10 },
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanedPhone = formData.phone_number.replace(/\D/g, "");
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone_number = "Invalid mobile number (Indian format)";
      isValid = false;
    }

    if (formData.sub === "Choose Course") {
      newErrors.sub = "Please select a course";
      isValid = false;
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    const { id, value } = e.target;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
      if (errors.phone_number) {
        setErrors((prev) => ({ ...prev, phone_number: "" }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await API.post("contacts/", formData);
      console.log("Enquiry submitted:", response.data);
      toast.success("Enquiry submitted successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-90 animate-gradient" />
            <style>
              {`
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                  animation: gradient 5s ease infinite;
                  background-size: 200% 200%;
                }
              `}
            </style>

            <div className="relative z-10 p-6">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition-colors bg-white rounded-full p-1 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {submitted ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={successVariants}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <motion.svg
                    variants={successItemVariants}
                    className="w-16 h-16 text-green-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                  <motion.h2 variants={successItemVariants} className="text-xl font-semibold text-gray-800 mb-2">
                    Registration Successful!
                  </motion.h2>
                  <motion.p variants={successItemVariants} className="text-sm text-gray-600">
                    Thank you for registering. We will be in touch soon.
                  </motion.p>
                  <motion.button
                    variants={successItemVariants}
                    onClick={() => setShowPopup(false)}
                    className="mt-4 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow hover:shadow transition-all uppercase tracking-wider"
                  >
                    Close
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-1">
                      Register Now
                    </h2>
                    <div className="h-1 w-16 bg-blue-500 mx-auto mb-4 rounded-full" />
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      {/* Name Field */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 text-sm rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all`}
                          placeholder="Enter your name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                      </motion.div>

                      {/* Email Field */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          E-mail<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 text-sm rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                      </motion.div>

                      {/* Phone Field */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Mobile Number<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 text-sm">+91</span>
                          </div>
                          <input
                            type="tel"
                            id="phone_number"
                            value={formData.phone_number}
                            onChange={handlePhoneChange}
                            className={`w-full px-3 py-2 pl-10 text-sm rounded-lg border ${
                              errors.phone_number ? 'border-red-500' : 'border-gray-300'
                            } bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all`}
                            placeholder="9876543210"
                          />
                        </div>
                        {errors.phone_number && <p className="mt-1 text-xs text-red-600">{errors.phone_number}</p>}
                      </motion.div>

                      {/* Course Selection */}
                      <motion.div variants={itemVariants}>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Looking for?
                        </label>
                        <select
                          id="sub"
                          value={formData.sub}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all"
                        >
                          {courses.map((course) => (
                            <option key={course} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                        {errors.sub && <p className="mt-1 text-xs text-red-600">{errors.sub}</p>}
                      </motion.div>

                      {/* Terms and Conditions */}
                      <motion.div variants={itemVariants} className="flex items-start">
                        <input
                          id="terms"
                          type="checkbox"
                          checked={formData.terms}
                          onChange={handleChange}
                          className={`h-4 w-4 text-blue-600 border ${
                            errors.terms ? 'border-red-500' : 'border-gray-300'
                          } rounded focus:ring-blue-500`}
                        />
                        <label htmlFor="terms" className="ml-2 text-xs text-gray-700">
                          I accept the <a href="/TandC" className="text-[#0057D3]">terms and conditions</a> and{' '}
                          <a href="/PrivacyPolicy" className="text-[#0057D3]">privacy policy</a>.
                        </label>
                      </motion.div>
                      {errors.terms && <p className="mt-1 text-xs text-red-600">{errors.terms}</p>}
                    </div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow hover:shadow transition-all uppercase tracking-wider ${
                          isLoading ? 'cursor-wait' : ''
                        }`}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin h-4 w-4 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          'Register'
                        )}
                      </button>
                    </motion.div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
