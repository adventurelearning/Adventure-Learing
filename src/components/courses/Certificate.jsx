import React, { useEffect, useState } from "react";
import certificte from "../../assets/Course/sample_c.svg";
import { useLocation } from "react-router-dom";

const Certificate = () => {
 
  const location = useLocation();
  const [courseTitle, setCourseTitle] = useState("");

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const courseSlug = pathParts[pathParts.length - 1];

    // Convert slug to Title Case
    const formattedTitle = courseSlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setCourseTitle(formattedTitle);
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-6xl w-full mx-auto transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
        {/* Decorative Corner Elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-l from-pink-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>

        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black mb-12 text-center tracking-tight">
        {courseTitle} Course Certification
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Certificate Image with Floating Effect */}
          <div className="relative flex-shrink-0 group">
            {/* Protection overlay */}
            <div
              className="absolute inset-0 z-10 cursor-not-allowed"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ pointerEvents: "none" }}
            ></div>

            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-400 rounded-2xl transform rotate-2 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>

            {/* Image container */}
            <div className="relative border-8 border-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:rotate-[-1deg] hover:scale-105">
              <img
                src={certificte}
                alt="Professional Certificate"
                className="w-96 object-cover select-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable="false"
              />

              {/* Decorative Ribbon */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full shadow-md rotate-12 z-20">
                <span className="text-white font-semibold uppercase text-sm">
                  Verified
                </span>
              </div>

              {/* Protection message overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg">
                  Certificate protected
                </span>
              </div>
            </div>
          </div>

          {/* Animated Highlights */}
          <div className="flex-grow space-y-3">
            <div className="relative p-6 bg-gradient-to-r from-white to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-xl"></div>
              <div className="flex items-center pl-6">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Recognized by Employers: 
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Validates your full-stack development skills.
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Preferred candidate status in hiring
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative p-6 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-pink-500 to-orange-500 rounded-l-xl"></div>
              <div className="flex items-center pl-6">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-xl shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Boost Your Career:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Enhance your resume and job prospects.
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Industry-standard competency proof
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative p-6 bg-gradient-to-r from-white to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-green-500 to-teal-500 rounded-l-xl"></div>
              <div className="flex items-center pl-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Career Ready:
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      A strong asset for career growth and opportunities
                    </li>
                    {/* <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Demonstrated commitment to growth
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 3}s infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
