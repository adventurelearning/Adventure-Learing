import React from 'react';
import { Link } from 'react-router-dom';
import videoClass from "../assets/virtual-classroom.jpg";
import close from '../assets/close-up.jpg';

function Choosepath() {
  return (
    <div data-aos="fade-down" className="bg-gray-50 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <h1 data-aos="fade-down" className="font-semibold text-2xl sm:text-3xl lg:text-3xl text-[#0057D3]">
            "Unlock Your Potential with Our Flexible Classes!"
          </h1>
        </div>

        <div className="mt-4 mb-8 sm:mb-12">
          <h4 className="font-normal text-lg text-gray-600 max-w-2xl mx-auto">
            "Choose Between Individual Mentoring or Live Online Training"
          </h4>
        </div>

        <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 cursor-pointer">

          {/* Self-Paced Learning Card */}
          <div className="w-full sm:w-96 md:w-80 lg:w-96 relative rounded-lg shadow-none lg:shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300">
            <div className="card w-full h-full">
              <Link to="/Register">
                <img
                  src={videoClass}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                  alt="One-on-One Training"
                />
              </Link>
              <div className="p-4 sm:p-5 bg-white">
                <p className="text-lg font-semibold text-black flex items-center justify-center">
                  Self-Paced Learning
                  <span className="ml-2 text-[#0057D3]">
                    <i className="bi bi-arrow-up-right-square"></i>
                  </span>
                </p>
              </div>

              <div className="content absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0057D3] to-blue-600 text-gray-200 p-6 flex flex-col justify-center rounded-lg pointer-events-none transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                <h3 className="text-xl font-bold text-white mb-3">Self-Paced Learning</h3>
                <p className="text-sm sm:text-base mb-6">
                  Learners can complete the course at their own speed, accessing materials such as videos, text, and quizzes at any time.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-[#0057D3] border font-semibold py-2 px-6 rounded-md text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mx-auto text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          {/* Instructor-Led Training Card */}
          <div className="w-full sm:w-96 md:w-80 lg:w-96 relative rounded-lg shadow-none lg:shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300">
            <div className="card w-full h-full">
              <Link to="/Register">
                <img
                  src={close}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                  alt="Online Live Training"
                />
              </Link>
              <div className="p-4 sm:p-5 bg-white">
                <p className="text-lg font-semibold text-black flex items-center justify-center">
                  Instructor-Led Training
                  <span className="ml-2 text-[#0057D3]">
                    <i className="bi bi-arrow-up-right-square"></i>
                  </span>
                </p>
              </div>

              <div className="content absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0057D3] to-blue-600 text-gray-200 p-6 flex flex-col justify-center rounded-lg pointer-events-none transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                <h3 className="text-xl font-bold text-white mb-3">Online Live-Class</h3>
                <p className="text-sm sm:text-base mb-6">
                  A live, online class where an instructor guides learners through the course material in real time.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-[#0057D3] border font-semibold py-2 px-6 rounded-md text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mx-auto text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Choosepath;
