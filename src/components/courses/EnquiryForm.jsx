import React, { useState } from "react";
import API from "../../service/API";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    sub: "Choose Course",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
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
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Invalid mobile number (Indian format)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.sub === "Choose Course") {
      newErrors.sub = "Please select a course";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionMessage("Submitting...");

    try {
      const response = await API.post("contacts/", formData); // Replace '/enquiries' with your actual backend endpoint
      console.log("Enquiry submitted:", response.data);
      setSubmissionMessage("Enquiry submitted successfully!");
      setFormData({
        name: "",
        mobileNumber: "",
        email: "",
        course: "Choose Course",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setSubmissionMessage("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmissionMessage("");
      }, 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-br max-h-90 w-full lg:w-3/4 lg:ml-12 from-blue-800 to-blue-600 border border-blue-800 text-white rounded-3xl shadow-lg shadow-blue-800 p-5 overflow-hidden hover:shadow-4xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-8  relative z-10">
        Let's Connect!
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 text-gray-600  max-w-80 mx-auto text-start"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-white font-medium mb-3 "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border border-1 h-10 border-blue-900 shadow-sm px-5 py-4 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium mb-3 text-white"
            >
              Mobile Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">+91</span>
              </div>
              <input
                type="text"
                id="phone_number"
                value={formData.phone_number}
                onChange={(e) => {
                  if (
                    e.target.value.length <= 10 &&
                    /^[0-9]*$/.test(e.target.value)
                  ) {
                    handleChange(e)
                  }
                }}
                className={`mt-1 block w-full rounded-lg border border-1 h-10 border-blue-900 shadow-sm pl-10 px-5 py-4 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.mobileNumber ? "border-red-500" : ""
                }`}
                placeholder="Enter your 10-digit mobile number"
              />
            </div>
            {errors.phone_number && (
              <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-3 text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border border-1 h-10 border-blue-900 shadow-sm px-5 py-4 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Select Course */}
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium mb-3 text-white"
            >
              Select Course
            </label>
            <select
              id="sub"
              value={formData.sub}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border-none h-10 shadow-sm px-5 bg-white text-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                errors.course ? "border border-red-500" : ""
              }`}
            >
              {courses.map((course) => (
                <option key={course} value={course} className="text-gray-800">
                  {course}
                </option>
              ))}
            </select>
            {errors.sub && (
              <p className="text-red-500 text-xs mt-1">{errors.sub}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className={`py-2 px-6 rounded-md border border-white bg-inherit text-white hover:bg-white hover:border-blue-900 font-semibold transition-colors duration-300 hover:text-blue-700 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </button>
          </div>
          {submissionMessage && (
            <p
              className={`mt-2 text-center ${
                submissionMessage.startsWith("Failed")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {submissionMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
