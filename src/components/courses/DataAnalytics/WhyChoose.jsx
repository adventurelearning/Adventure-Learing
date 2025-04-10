import React from "react";
import {
    CodeBracketIcon,
    UserGroupIcon,
    BriefcaseIcon,
    CloudIcon,
    AcademicCapIcon,
    LightBulbIcon,
  } from "@heroicons/react/24/outline";

const WhyChoose = () => {
  return (
    <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-3 mx-auto">
        <h1 className="text-3xl font-semibold text-[#0057D3] text-center mb-6 capitalize">
          Unlock Your Potential with Our Data Analytics Course
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our industry-leading Data Analytics program and gain
          hands-on experience with cutting-edge technologies.
        </p>
        <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-[#0057D3] mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8">
              {[
                {
                  text: "Master data analysis, data visualization, and statistical techniques to drive insights.",
                  icon: (
                    <CodeBracketIcon className="h-12 w-12 text-blue-600 mb-4" />
                  ),
                },
                {
                  text: "Learn from experienced mentors with industry insights.",
                  icon: (
                    <UserGroupIcon className="h-12 w-12 text-green-600 mb-4" />
                  ),
                },
                {
                  text: "Gain hands-on experience with real-world projects.",
                  icon: (
                    <BriefcaseIcon className="h-12 w-12 text-purple-600 mb-4" />
                  ),
                },
                {
                  text: "Access career guidance, resume building, and job placement assistance.",
                  icon: (
                    <AcademicCapIcon className="h-12 w-12 text-orange-600 mb-4" />
                  ),
                },
                {
                  text: "Develop cloud data storage, processing pipelines, and analytics integration.",
                  icon: <CloudIcon className="h-12 w-12 text-blue-600 mb-4" />,
                },
                {
                  text: "Work on collaborative team-based coding exercises.",
                  icon: (
                    <LightBulbIcon className="h-12 w-12 text-yellow-600 mb-4" />
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-4  flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  {item.icon}
                  <span className="text-md text-gray-800 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Modified Form Grid Layout */}
          <div className="bg-gradient-to-br max-h-90 from-blue-800 to-blue-600 border border-blue-800 text-white rounded-3xl shadow-2xl shadow-blue-800 p-6  overflow-hidden  hover:shadow-4xl transition-shadow duration-300">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800 rounded-3xl pointer-events-none"></div> */}

            <h3 className="text-3xl font-semibold mb-8 text-center relative z-10">
              Let's Connect
            </h3>

            <div className="flex flex-col gap-2 text-white max-w-80 mx-auto">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3 "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border border-1 h-10 border-blue-900  shadow-sm px-5 py-4 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobile-number"
                  className="block text-sm font-medium mb-3"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile-number"
                  className="mt-1 block w-full rounded-lg border border-1 h-10 border-blue-900  shadow-sm px-5 py-4 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your mobile number"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border border-1 h-10 border-blue-900  shadow-sm px-5 py-4 bg-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Select Course */}
              <div>
                <label
                  htmlFor="select-course"
                  className="block text-sm font-medium mb-3"
                >
                  Select Course
                </label>
                <select
                  id="select-course"
                  className="mt-1 block w-full rounded-lg border-none h-10 shadow-sm px-5  bg-white text-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                >
                  <option className="text-gray-800">Choose Course</option>
                  <option className="text-gray-800">
                    Full Stack Development
                  </option>
                  <option className="text-gray-800">Embeded Systems</option>
                  <option className="text-gray-800">Digital Marketing</option>
                  <option className="text-gray-800">Cloud Computing</option>
                  <option className="text-gray-800">Data Science</option>
                  <option className="text-gray-800">Machine Learning</option>
                  {/* <option className="text-gray-800">Web Development</option> */}
                  <option className="text-gray-800">UI/UX Design</option>
                  <option className="text-gray-800">software testing</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center mt-4">
                <button
                  type="submit"
                  className=" py-2 px-6 rounded-md border border-white bg-inherit  text-white hover:bg-white hover:border-blue-900 font-semibold transition-colors duration-300 hover:text-blue-700 e "
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
