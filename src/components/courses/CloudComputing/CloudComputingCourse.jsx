import React from "react";
import { FaCloud, FaServer, FaLock, FaAws, FaDocker, FaCubes } from "react-icons/fa";

const CloudComputingCourse = () => {
  const techStack = [
    { icon: <FaCloud className="text-6xl text-blue-400" />, title: "Cloud Basics" },
    { icon: <FaAws className="text-6xl text-orange-500" />, title: "AWS" },
    { icon: <FaDocker className="text-6xl text-cyan-600" />, title: "Docker" },
    { icon: <FaCubes className="text-6xl text-purple-600" />, title: "Kubernetes" },
    { icon: <FaServer className="text-6xl text-gray-700" />, title: "Server Management" },
    { icon: <FaLock className="text-6xl text-green-600" />, title: "Cloud Security" },
  ];

  return (
    <div className="py-6">
      <div className="text-center lg:py-6">
        <h4 className="text-2xl lg:text-4xl px-2 font-semibold text-black mb-2">
          Cloud Computing <span className="text-[#0057D3]">Certification</span> Course
        </h4>
        <h4 className="font-normal text-lg text-gray-600 max-w-2xl px-3 mx-auto">
          Learn cloud technologies and infrastructure management with hands-on labs and real-world projects.
        </h4>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Tech Stack */}
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 w-full justify-items-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 w-28 sm:w-32"
                >
                  {tech.icon}
                  <h3 className="text-sm font-medium text-gray-800 mt-2 text-center">{tech.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 w-full">
            <h1 className="text-2xl md:text-2xl font-semibold text-gray-900 leading-tight">
              Become a Cloud Computing Expert
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Master cloud platforms, containerization, orchestration, and security. Build practical skills to manage cloud infrastructure and deploy scalable solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-gray-800">Hands-on labs with real cloud environments</span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-gray-800">Learn AWS, Docker, Kubernetes</span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="text-gray-800">100% Placement Assistance with Career Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudComputingCourse;
