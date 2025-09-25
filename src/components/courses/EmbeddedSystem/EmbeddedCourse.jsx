import React from "react";
import {
    FaMicrochip,
    FaCogs,
    FaCode,
} from "react-icons/fa";
import { SiCplusplus, SiPython, SiArduino, SiRaspberrypi, SiLinux } from "react-icons/si";

const EmbeddedCourse = () => {
    const techStack = [
        { icon: <SiCplusplus className="text-6xl text-blue-600" />, title: "C / C++" },
        { icon: <SiPython className="text-6xl text-yellow-500" />, title: "Python" },
        { icon: <FaMicrochip className="text-6xl text-green-600" />, title: "Microcontrollers" },
        { icon: <SiArduino className="text-6xl text-cyan-600" />, title: "Arduino" },
        { icon: <SiRaspberrypi className="text-6xl text-red-600" />, title: "Raspberry Pi" },
        { icon: <FaCogs className="text-6xl text-gray-700" />, title: "Embedded Systems" },
        { icon: <SiLinux className="text-6xl text-black" />, title: "Linux" },
        { icon: <FaCode className="text-6xl text-purple-600" />, title: "Firmware" },
    ];

    return (
        <div className="py-6">
            <div className="text-center lg:py-6">
                <h4 className="text-2xl lg:text-4xl px-2 font-semibold text-black mb-2 ">
                    Embedded Systems <span className="text-[#0057D3]"> Certification </span> Course
                </h4>
                <h4 className="font-normal text-lg text-gray-600  px-3 mx-auto">
                    Build a strong career in Embedded Systems with hands-on training & real-world projects.
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
                            Unlock Your Potential with Our Embedded Systems Course!
                        </h1>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Learn the complete journey of Embedded Systems — from coding
                            microcontrollers to working with IoT, hardware, and real-time applications.
                            Gain industry-ready skills to excel in core electronics & embedded software.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Hands-on training with real embedded projects
                                </span>
                            </div>

                            <div className="flex items-center">
                                <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center mr-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-gray-800">
                                    Learn C/C++, Python, Arduino, Raspberry Pi, IoT
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

export default EmbeddedCourse;
