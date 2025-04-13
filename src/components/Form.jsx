import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      course: "",
      comments: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),
      phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Phone number must be 10 digits starting with 6, 7, 8, or 9.")
        .required("Phone number is required."),
      email: Yup.string()
        .email("Please enter a valid email.")
        .required("Email is required."),
      course: Yup.string().required("Course selection is required."),
    }),
    onSubmit: (values) => {
      console.log("Form Data Submitted:", values);
    },
  });

  return (
    <div className="bg-gray-50 flex items-center justify-center py-6 px-4 md:px-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-blue-100 to-blue-50">
          <h2 className="lg:text-3xl text-2xl font-semibold text-[#0057D3] mb-4 md:mb-6">
            Don't Worry, Just Simple
            <span className="block">Step To Enroll</span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 font-medium mb-4 md:mb-6">
            Getting started is easier than ever! Follow these simple steps and
            begin your learning journey today.
          </p>
          <div className="space-y-4 md:space-y-6">
            {/* Steps */}
            <div className="flex items-start space-x-3 md:space-x-4">
              <i className="bi bi-file-earmark-text text-white text-lg md:text-xl flex items-center justify-center rounded-full bg-blue-600 w-9 h-8 md:w-10 md:h-10"></i>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#0057D3]">
                  Fill in your details
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Provide your basic information to get started. It’s quick and
                  easy!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4">
              <i className="bi bi-check-lg text-white text-lg md:text-xl flex items-center justify-center rounded-full bg-blue-600 w-8 h-8 md:w-10 md:h-10"></i>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#0057D3]">
                  Complete the enrollment process
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Confirm your registration in just a few clicks. No hassle!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 pt-2 md:pt-4">
              <i className="bi bi-hand-thumbs-up text-white text-lg md:text-xl flex items-center justify-center rounded-full bg-blue-600 w-10 h-8 md:w-10 md:h-10"></i>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[#0057D3]">
                  Start learning & upskill yourself
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Access courses, gain new skills, and advance your career
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4 md:p-6 mt-2 bg-white">
          <h2 className="text-base md:text-lg font-bold text-[#0057D3] mb-4 md:mb-6">
            Enter Your Details to Learn more
          </h2>
          <form
            className="space-y-2 mt-2 md:mt-3"
            onSubmit={formik.handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  className="block text-gray-700 font-medium text-xs md:text-sm mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your name"
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs">{formik.errors.name}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium text-xs md:text-sm mb-1"
                  htmlFor="phone"
                >
                  Contact Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-800">+91</span>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={(e) => {
                      if (
                        e.target.value.length <= 10 &&
                        /^[0-9]*$/.test(e.target.value)
                      ) {
                        formik.handleChange(e);
                      }
                    }}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your 10-digit phone number"
                    className="outline-none border-2 border-gray-300 rounded-lg p-2 pl-10 w-full text-sm md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
                  />
                </div>
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs">{formik.errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label
                  className="block text-gray-700 font-medium text-xs md:text-sm mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs">{formik.errors.email}</p>
                )}
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium text-xs md:text-sm mb-1"
                  htmlFor="course"
                >
                  Select Your Course
                </label>
                <select
                  name="course"
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 shadow-sm transition duration-300"
                >
                  <option value="">Choose a course</option>
                  <option value="InternetofThings">Internet of Things</option>
                  <option value="EmbeddedSystem">Embedded System</option>
                  <option value="FullStack">Full Stack</option>
                  <option value="DataScience">Data Science</option>
                  <option value="CloudComputing">Cloud Computing</option>
                  <option value="DataAnalytics">Data Analytics</option>
                </select>
                {formik.touched.course && formik.errors.course && (
                  <p className="text-red-500 text-xs">{formik.errors.course}</p>
                )}
              </div>
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium text-xs md:text-sm mb-1"
                htmlFor="comments"
              >
                Your Questions or Expectations
              </label>
              <textarea
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Share your thoughts with us!"
                className="outline-none border-2 border-gray-300 rounded-lg p-2 w-full h-24 text-xs md:text-sm text-gray-700 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 bg-gray-50 shadow-sm transition duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#0057D3] border border-white text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-white hover:text-blue-600 hover:border-[#0057D3] transition duration-300"
            >
              Enroll
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
