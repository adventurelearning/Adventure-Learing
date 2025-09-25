import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaBootstrap,
    FaNodeJs,
    FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const WebDevelopmentCourse = () => {
    const techStack = [
        { icon: <FaHtml5 className="text-6xl text-red-600" />, title: "HTML" },
        { icon: <FaCss3Alt className="text-6xl text-blue-600" />, title: "CSS" },
        { icon: <FaJsSquare className="text-6xl text-yellow-500" />, title: "JavaScript" },
        { icon: <FaReact className="text-6xl text-cyan-500" />, title: "React" },
        { icon: <FaBootstrap className="text-6xl text-purple-600" />, title: "Bootstrap" },
        { icon: <SiExpress className="text-6xl text-gray-700" />, title: "Express.js" },
        { icon: <FaNodeJs className="text-6xl text-green-600" />, title: "Node.js" },
        { icon: <SiMongodb className="text-6xl text-green-700" />, title: "MongoDB" },
    ];

    return (
        <div className="py-6">
            <div className="text-center lg:py-6">
                <h4 className="text-2xl lg:text-4xl px-2 font-semibold text-black mb-2 ">
                    Full Stack Development <span className="text-[#0057D3]"> Certification </span> Course
                </h4>
                <h4 className="font-normal text-lg text-gray-600 max-w-2xl px-3 mx-auto">
                    Kickstart your tech career with our Complete Web Development Program
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
                            Unlock Your Potential with Our Full Stack Course
!
                        </h1>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Learn the complete Full Stack Development journey — from crafting
                            stunning user interfaces to building scalable backend systems. Gain
                            real-world skills to become industry-ready.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Hands-on training with real projects
                                </span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Learn HTML, CSS, JavaScript, React, Node, MongoDB
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

export default WebDevelopmentCourse;
