import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const CourseOverview = () => {
  return (
    <div className=" rounded-lg shadow-lg p-6  mx-auto">
      {/* Course Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          COURSE DESCRIPTION
        </h2>
        <p className="text-md text-gray-700 leading-relaxed">
        This course covers the essentials of Embedded System Development, 
        equipping you with the skills to design and build efficient, 
        real-time embedded systems from start to finish. You'll learn both hardware and software components, 
        including microcontrollers, sensors, communication protocols, and deployment strategies.
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          WHAT YOU'LL LEARN:
        </h2>
        <ul className="space-y-4 list-inside text-gray-700 text-md">
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-[#0057D3] mr-3 flex-shrink-0" />
            Embedded Systems: Working with microcontrollers (e.g., Arduino, Raspberry Pi) and real-time operating systems (RTOS).
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Hardware Integration: Using sensors, actuators, and communication protocols (I2C, SPI, UART).
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Firmware Development: Writing C/C++ code for embedded applications.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Communication: Implementing wireless protocols like Bluetooth, Wi-Fi, and Zigbee.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Power Management: Optimizing energy use in embedded devices.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Debugging: Using tools like oscilloscopes and logic analyzers.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Deployment: Flashing firmware and deploying embedded solutions.
          </li>
        </ul>
      </div>

      {/* Who Should Enroll */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          WHO SHOULD ENROLL:
        </h2>
        <div className="flex items-start mb-4">
          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-mg text-gray-700">
          Aspiring embedded systems engineers, hardware enthusiasts, or 
          anyone interested in mastering both the hardware and software aspects of embedded systems.
          </p>
        </div>
      </div>

      {/* Outcome */}
      <div>
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          OUTCOME:
        </h2>
        <div className="flex items-start mb-4">
          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-md text-gray-700">
          By the end of the course, you'll be able to design, develop, and deploy embedded systems, integrating hardware components with software to create functional,
           real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
