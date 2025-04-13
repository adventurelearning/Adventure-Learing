import React, { useState } from "react";
import form2 from "../assets/form2.gif";
import API from "../service/API";

function UpskillForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone_number: "",
    company_name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
      newErrors.name = "Full Name is required";
    }
    if (formData.email.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    } else {
      newErrors.email = "Email is required";
    }
    if (formData.phone_number.trim()) {
      if (!/^[6-9]\d{9}$/.test(formData.phone_number)) {
        newErrors.phone_number = "Invalid phone number format";
      }
    } else {
      newErrors.phone_number = "Contact Number is required";
    }
    if (!formData.company_name.trim()) {
      newErrors.company_name = "Company Name is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Request Message is required";
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
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

    try {
      const res = await API.post("corporate-training/", formData);
      console.log(res);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        title: "",
        email: "",
        phone_number: "",
        company_name: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.log(error);
      // Optionally set an error state for the submission failure
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 min-h-screen flex items-center justify-center"
      id="corpform"
    >
      <div className="bg-white rounded-xl shadow-xl overflow-hidden md:flex">
        <div className="hidden md:block md:w-1/3 bg-[#0057D3] p-8  items-center">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              Transform Your Workforce
            </h2>
            <p className="text-blue-100 mb-6">
              Let us help you build the skills your team needs to succeed in
              today's competitive landscape.
            </p>
            {/* <img
              src={form2}
              alt="Upskilling illustration"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            /> */}
          </div>
        </div>

        <div className="w-full md:w-2/3 p-8">
          <div className="md:hidden mb-6 text-center">
            <h1 className="text-2xl font-bold text-[#0057D3] mb-2">
              Transform Your Workforce
            </h1>
            <p className="text-gray-600">
              Write to us for your upskilling needs
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                  placeholder="HR Manager"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 text-sm font-medium mb-1"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <input
                    type="tel"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={(e) => {
                      if (
                        e.target.value.length <= 10 &&
                        /^[0-9]*$/.test(e.target.value)
                      ) {
                        handleChange({
                          target: {
                            name: "phone_number",
                            value: e.target.value,
                          },
                        });
                      }
                    }}
                    className={`w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.phone_number ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your 10-digit phone number"
                  />
                </div>
                {errors.phone_number && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone_number}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.company_name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Acme Inc."
              />
              {errors.company_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.company_name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="requestMessage"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Request Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Tell us about your upskilling needs..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className={`w-full bg-[#0057D3] hover:bg-[#0044b3] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
            {submitSuccess && (
              <p className="text-green-500 mt-2 text-center">
                Your request has been submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpskillForm;
