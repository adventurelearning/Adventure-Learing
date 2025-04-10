import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import avd2 from '../assets/avd2.gif';

function WhyAdventureLearning() {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text */}
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl lg:text-3xl  font-semibold mb-8 text-[#0057D3]">
            Why Top Companies Choose Adventure Learning
          </h2>
          <ul className="space-y-5">
            {[
              "High engagement and outcome-centric learning",
              "Customized curriculum built with industry leaders",
              "Hands-on exercises and industry use cases",
              "Project reviews and feedback from industry SMEs",
              "Detailed reporting to track learning ROI",
              "Pre-configured Cloud Labs for practice",
              "Day 1 production ready after training"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-[#0057D3] mt-0.5 mr-3" />
                <span className="text-gray-800 text-base sm:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <img
              src={avd2}
              alt="Adventure Learning in Action"
              className="w-full h-auto "
            />
            {/* Optional decorative element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-blue-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyAdventureLearning;