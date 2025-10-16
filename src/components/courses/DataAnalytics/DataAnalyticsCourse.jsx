import React from "react";
import {
    FaChartBar,
    FaDatabase,
    FaPython,
    FaRProject,
    FaChartPie, // ✅ Replacement for Power BI
} from "react-icons/fa";
import { SiTableau, SiNumpy, SiPandas } from "react-icons/si";

const DataAnalyticsCourse = () => {
    const techStack = [
        { icon: <FaPython className="text-6xl text-blue-500" />, title: "Python" },
        // { icon: <FaRProject className="text-6xl text-indigo-600" />, title: "R Programming" },
        { icon: <FaDatabase className="text-6xl text-gray-700" />, title: "SQL" },
        { icon: <SiPandas className="text-6xl text-green-700" />, title: "Pandas" },
        { icon: <SiNumpy className="text-6xl text-orange-500" />, title: "NumPy" },
        { icon: <SiTableau className="text-6xl text-blue-400" />, title: "Tableau" },
        { icon: <FaChartPie className="text-6xl text-yellow-500" />, title: "Power BI" }, // ✅ Fixed
        { icon: <FaChartBar className="text-6xl text-pink-600" />, title: "Data Visualization" },
    ];

    return (
        <div className="py-6">
            <div className="text-center lg:py-6">
                <h4 className="text-2xl lg:text-4xl px-2 font-semibold text-black mb-2">
                    Data Analytics <span className="text-[#0057D3]">Certification</span> Course
                </h4>
                <h4 className="font-normal text-lg text-gray-600 max-w-2xl px-3 mx-auto">
                    Master the art of data-driven decision making with our comprehensive Data Analytics Program
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
                            Become a Skilled Data Analyst
                        </h1>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Learn the complete Data Analytics process — from data collection and cleaning to visualization and reporting. Build job-ready expertise in the most in-demand tools and technologies.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Hands-on training with real-world datasets
                                </span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Learn Python, SQL, Tableau, Power BI, and more
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

export default DataAnalyticsCourse;
