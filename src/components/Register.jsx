import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import API from "../service/API";
import register from "../assets/register.gif";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courses: "",
    training_mode: "",
    message: "",
  });
  // Add the variants here 👇 right before the return statement
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
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const courses = [
    { id: "Full_Stack", name: "Full Stack Development" },
    { id: "data_science", name: "Data Science" },
    { id: "Embedded_system", name: "Embedded System" },
    { id: "data_analytics", name: "Data Analytics" },
    { id: "cloud_computing", name: "Cloud Computing" },
    { id: "software_testing", name: "Software Testing" },
  ];

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
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Invalid mobile number (Indian format)";
      isValid = false;
    }

    if (!formData.courses) {
      newErrors.courses = "Please select a course";
      isValid = false;
    }

    if (!formData.training_mode) {
      newErrors.training_mode = "Please select training mode";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await toast.promise(API.post("register/", formData), {
        loading: "Submitting registration...",
        success: <b>Registration successful!</b>,
        error: <b>Registration failed. Please try again.</b>,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        courses: "",
        training_mode: "",
        message: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={successVariants}
          className="bg-white p-8  text-center max-w-md mx-4"
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
            Thank You for Registering!
          </h2>
          <p className="text-gray-600 mb-6">
            We've received your registration for{" "}
            <span className="font-semibold">
              {courses.find((c) => c.id === formData.courses)?.name ||
                "the course"}
            </span>
            . Our team will contact you shortly with more information.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Another
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-b from-blue-200 to-white py-8 md:py-10 rounded-md text-center">
        <h1
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-3xl font-semibold text-[#0057D3] mb-4"
        >
          Register Now for Our Courses <br className="hidden md:block" /> Start
          Your Learning Journey Today!
        </h1>
        <h4
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-gray-600 text-base sm:text-lg lg:mb-0 md:mb-8"
        >
          Fill out the form below to enroll in our expert-led programs.
          <br className="hidden md:block" />
          Flexible schedules and top-notch instructors await you.
        </h4>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen  px-4 lg:ml-20 ">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white  w-full max-w-lg lg:w-full  relative"
          >
            {/* Form fields with error messages */}
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-1 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </motion.div>

                {/* Email Input */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-1 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="Enter your email"
                    />
                  </motion.div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </motion.div>

                {/* Phone Input */}
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
                      className={`w-full pl-11 pr-4 py-1 border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="Enter your number"
                    />
                  </motion.div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </motion.div>

                {/* Courses Dropdown */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="courses"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Course <span className="text-red-500">*</span>
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <select
                      id="courses"
                      name="courses"
                      value={formData.courses}
                      onChange={handleChange}
                      className={`w-full px-4 py-1 border ${
                        errors.courses ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem] transition-all`}
                    >
                      <option value="">-- Select a course --</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                  {errors.courses && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.courses}
                    </p>
                  )}
                </motion.div>
              </div>

              {/* Training Mode Radio Buttons */}
              <motion.div variants={itemVariants}>
                <span className="block text-sm font-medium text-gray-700">
                  Training Mode <span className="text-red-500">*</span>
                </span>
                <div className="space-y-1">
                  <motion.label className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="training_mode"
                      value="Online"
                      checked={formData.training_mode === "Online"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 transition-colors"
                    />
                    <span className="ml-3 text-gray-700">Online Training</span>
                  </motion.label>
                  <motion.label className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="training_mode"
                      value="Offline" // Fixed typo from 'Ofline'
                      checked={formData.training_mode === "Offline"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 transition-colors"
                    />
                    <span className="ml-3 text-gray-700">Offline Training</span>
                  </motion.label>
                </div>
                {errors.training_mode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.training_mode}
                  </p>
                )}
              </motion.div>

              {/* Message Textarea */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Comments
                </label>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Any specific requirements or questions?"
                  />
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${
                    isLoading ? "bg-blue-400" : "bg-[#0057D3] hover:bg-blue-700"
                  }`}
                >
                  {isLoading ? (
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
                      Processing...
                    </span>
                  ) : (
                    "Register"
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Image Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden lg:block w-full"
          >
            <img
              className="max-w-2xl h-auto object-cover lg:ml-20"
              src={register}
              alt="Students learning together"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
