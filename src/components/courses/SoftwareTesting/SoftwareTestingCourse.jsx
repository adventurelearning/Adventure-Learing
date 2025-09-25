import React from "react";
import { FaBug, FaTools, FaCheckCircle, FaDesktop, FaLaptopCode, FaServer, FaDatabase, FaNetworkWired } from "react-icons/fa";

const SoftwareTestingCourse = () => {
    const techStack = [
        { icon: <FaBug className="text-6xl text-red-600" />, title: "Manual Testing" },
        { icon: <FaTools className="text-6xl text-blue-600" />, title: "Automation Testing" },
        { icon: <FaCheckCircle className="text-6xl text-green-500" />, title: "Selenium" },
        { icon: <FaDesktop className="text-6xl text-purple-600" />, title: "Load Testing" },
        { icon: <FaLaptopCode className="text-6xl text-cyan-500" />, title: "JUnit/TestNG" },
        { icon: <FaServer className="text-6xl text-gray-700" />, title: "APIs Testing" },
        { icon: <FaDatabase className="text-6xl text-orange-500" />, title: "Database Testing" },
        { icon: <FaNetworkWired className="text-6xl text-yellow-600" />, title: "Performance Testing" },
    ];

    return (
        <div className="py-6">
            <div className="text-center lg:py-6">
                <h4 className="text-2xl lg:text-4xl px-2 font-semibold text-black mb-2 ">
                    Software Testing <span className="text-[#0057D3]">Certification</span> Course
                </h4>
                <h4 className="font-normal text-lg text-gray-600 max-w-2xl px-3 mx-auto">
                    Master software quality assurance, manual & automated testing with industry-relevant tools and techniques.
                </h4>
            </div>
            <div className="flex items-center justify-center p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Tech Stack */}
                    <div className="flex flex-col items-center w-full ">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full justify-items-center">
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
                            Become a Skilled Software Tester
                        </h1>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Learn the complete Software Testing lifecycle — from requirements analysis to manual, automated, and performance testing. Gain practical skills to ensure software quality and reliability.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Hands-on projects with real-world testing scenarios
                                </span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Learn Selenium, JUnit/TestNG, API & Performance Testing
                                </span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    100% Placement Assistance with Career Guidance
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoftwareTestingCourse;
