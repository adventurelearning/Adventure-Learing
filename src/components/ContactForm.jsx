import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import Contact from "../assets/Contact.gif";
import API from "../service/API";

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    course_interest: "",
    message: "",
  });

  const courses = [
    "Full Stack Development",
    "Data Science",
    "Embedded Systems",
    "Data Analytics",
    "Cloud Computing",
    "Software Testing",
    "Others",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
      newErrors.phone_number =
        "Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9";
    }
    if (!formData.course_interest.trim())
      newErrors.course_interest = "Please select a course";
    if (!formData.message.trim()) newErrors.message = "Please enter your query";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await toast.promise(API.post("contacts/", formData), {
        loading: "Sending your inquiry...",
        success: <b>Your message has been sent successfully!</b>,
        error: <b>Failed to send message. Please try again.</b>,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone_number: "",
      course_interest: "",
      message: "",
    });
    setSubmitted(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen py-12 px-4 lg:px-8"
      id="contact"
    >
      <div>
        {/* Form Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white   w-full max-w-2xl lg:w-full  relative"
        >
          <AnimatePresence>
            {submitted ? (
              <motion.div
                key="success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center py-8"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.8 }}
                  className="mb-6"
                >
                  <svg
                    className="w-20 h-20 mx-auto text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Thank You for Your Inquiry!
                </h2>
                <p className="text-gray-600 mb-6">
                  We've received your message about{" "}
                  <span className="font-semibold">
                    {formData.course_interest}
                  </span>
                  . Our education specialist will contact you at{" "}
                  <span className="font-semibold">{formData.email}</span> or
                  <span className="font-semibold">
                    {" "}
                    {formData.phone_number}
                  </span>{" "}
                  within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetForm}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ask Another Question
                  </motion.button> */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/courses"
                    className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Browse Our Courses
                  </motion.a>
                </div>
              </motion.div>
            ) : (
              <motion.div key="form">
                <motion.div variants={itemVariants} className="mb-8">
                  <h2 className="text-3xl font-semibold text-[#0057D3] mb-2">
                    Course Enquiry
                  </h2>
                  <p className="text-gray-600">
                    Have questions about our courses? Our education specialists
                    are here to help!
                  </p>
                </motion.div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileFocus={{ scale: 1.01 }}
                      >
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </motion.div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileFocus={{ scale: 1.01 }}
                      >
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.01 }}
                        whileFocus={{ scale: 1.01 }}
                      >
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500">+91</span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => {
                            if (e.target.value.length <= 10) {
                              handleChange(e);
                            }
                          }}
                          className={`w-full pl-11 pr-4 py-3 border ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                          placeholder="Enter your number"
                        />
                      </motion.div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="course_interest"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                         Course <span className="text-red-500">*</span>
                      </label>
                      <motion.div whileHover={{ scale: 1.01 }}>
                        <select
                          id="course_interest"
                          value={formData.course_interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiYjMzk7IzZCN0I4OSYjMzk7IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem] transition-all"
                        >
                          <option value="">Select a course</option>
                          {courses.map((course, index) => (
                            <option key={index} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                      {errors.course_interest && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.course_interest}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Query <span className="text-red-500">*</span>
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <textarea
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Tell us about your queries, questions about the course, or any other doubts..."
                      ></textarea>
                    </motion.div>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${
                        isSubmitting
                          ? "bg-blue-400"
                          : "bg-[#0057D3] hover:bg-blue-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div>
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden lg:block w-full max-w-md mt-12 lg:mt-0"
        >
          <img
            className="w-full   h-auto object-contain"
            src={Contact}
            alt="Education Consultation"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
