import enquiry1 from "../assets/enquiry1.png";
import career4 from "../assets/career4.png";
import career2 from "../assets/career2.png";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"; // Import useState and useEffect

function LookingFor() {
  const navigate = useNavigate();


  return (
    <>

        <div className="text-center pt-12 pb-10 bg-blue-100">
          <div>
            <h1
              data-aos="fade-down"
              className="font-semibold text-3xl mt-5 text-black"
            >
              Hey Learners, Welcome to{" "}
              <span className="text-[#0057D3]">Adventure Learning!</span>
            </h1>
          </div>

          <div className="p-4">
            <h4 className="font-normal text-lg text-gray-600 text-center">
              What Are You Looking For?
            </h4>
          </div>

          {/* Flex container with responsive behavior */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 p-6">
          {/* <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 p-6"> */}

            {/* First card */}
            <div>
              <Link to="/Register">
                <div
                  data-aos="zoom-in"
                  className="relative flex items-center bg-white text-[#0057D3] hover:bg-gradient-to-br from-blue-500 to-blue-600 hover:text-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-full lg:w-80 xl:w-96 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
                >
                  {/* Hover effect element */}
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-0 h-0  border-t-blue-100 border-l-transparent"></div>

                  <img
                    src={career2}
                    alt="Upskill Illustration"
                    className="w-14 h-14 mr-4 filter group-hover:brightness-0 group-hover:invert transition duration-300"
                  />

                  <button className="text-base sm:text-lg font-semibold hover:underline cursor-pointer transition duration-300 ease-in-out">
                    {" "}
                    I want to upskill in my current career
                  </button>
                </div>
              </Link>
            </div>
            {/* Second card */}
            <div>
              <Link to="/contact">
                <div
                  data-aos="zoom-in"
                  className="relative flex items-center bg-white text-[#0057D3] hover:bg-gradient-to-br from-blue-500 to-blue-600 hover:text-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-full lg:w-80 xl:w-96 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
                >
                  {/* Hover effect element */}
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-0 h-0  border-t-blue-100 border-l-transparent"></div>

                  <img
                    src={enquiry1}
                    alt="Enquiry Illustration"
                    className="w-14 h-14 mr-4 filter group-hover:brightness-0 group-hover:invert transition duration-300"
                  />
                  <div className="flex items-center justify-between w-full">
                    <button className="text-base sm:text-lg font-semibold hover:underline cursor-pointer transition duration-300 ease-in-out">
                      Make an Enquiry
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            {/* Third card */}
            <div>
              <Link to="/Register">
                <div
                  data-aos="zoom-in"
                  className="relative flex items-center bg-white text-[#0057D3] hover:bg-gradient-to-br from-blue-500 to-blue-600 hover:text-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-full lg:w-80 xl:w-96 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
                >
                  {/* Hover effect element */}
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-0 h-0  border-t-blue-100 border-l-transparent"></div>

                  <img
                    src={career4}
                    alt="New Career Illustration"
                    className="w-14 h-14 mr-4 filter group-hover:brightness-0 group-hover:invert transition duration-300"
                  />
                  <div className="flex items-center justify-between w-full">
                    <button className="text-base sm:text-lg font-semibold hover:underline cursor-pointer transition duration-300 ease-in-out">
                      I want to find a new career
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
   
    </>
  );
}

export default LookingFor;
