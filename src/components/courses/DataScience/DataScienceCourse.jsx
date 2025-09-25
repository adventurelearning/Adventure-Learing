import React from "react";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaBrain,
} from "react-icons/fa";
import { SiNumpy, SiPandas, SiTensorflow, SiScikitlearn } from "react-icons/si";

const DataScienceCourse = () => {
  const techStack = [
    { icon: <FaPython className="text-6xl text-blue-500" />, title: "Python" },
    { icon: <SiPandas className="text-6xl text-purple-600" />, title: "Pandas" },
    { icon: <SiNumpy className="text-6xl text-cyan-600" />, title: "NumPy" },
    // { icon: <SiScikitlearn className="text-6xl text-orange-500" />, title: "Scikit-learn" },
    // { icon: <SiTensorflow className="text-6xl text-yellow-500" />, title: "TensorFlow" },
    { icon: <FaBrain className="text-6xl text-pink-600" />, title: "Machine Learning" },
    { icon: <FaDatabase className="text-6xl text-green-700" />, title: "SQL / Databases" },
    { icon: <FaChartBar className="text-6xl text-gray-700" />, title: "Data Visualization" },
  ];

  return (
    <div className="py-6">
      <div className="text-center lg:py-6">
        <h4 className="text-2xl lg:text-4xl px-2 font-semibold text-black mb-2">
          Data Science <span className="text-[#0057D3]"> Certification </span> Course
        </h4>
        <h4 className="font-normal text-lg text-gray-600 max-w-2xl px-3 mx-auto">
          Master Data Science, Machine Learning & AI with real-world hands-on training
        </h4>
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Tech Stack */}
          <div className="flex flex-col items-center w-full ">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 w-full justify-items-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 w-28 sm:w-32"
                >
                  {tech.icon}
                  <h3 className="text-sm font-medium text-gray-800 mt-2 text-center">
                    {tech.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 w-full">
            <h1 className="text-2xl md:text-2xl font-semibold text-gray-900 leading-tight">
              Unlock Your Potential with Our Data Science Course!
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Learn the complete Data Science journey — from data cleaning and
              visualization to advanced machine learning and AI model building.
              Gain real-world skills to become industry-ready in analytics and AI.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-gray-800">
                  Hands-on training with real datasets & projects
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-gray-800">
                  Learn Python, Pandas, NumPy, ML, AI, TensorFlow
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-gray-800">
                  100% Placement Assistance with Career Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceCourse;
