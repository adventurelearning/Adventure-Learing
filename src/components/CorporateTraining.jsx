import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import train1 from "../assets/train1.png";
import train2 from "../assets/train2.png";
import train3 from "../assets/train3.png";
import train4 from "../assets/train4.png";

import corporatetrain from "../assets/corporatetrain.svg";
import corpmobile from "../assets/corpmobile.svg";
import UpskillForm from "./UpskillForm";

function CorporateTraining() {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500); // Simulate loading
  // }, []);

  // const PlaceholderCard = () => (
  //   <div className="bg-gray-200 rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center animate-pulse border border-gray-300">
  //     <div className="w-20 h-20 flex items-center justify-center bg-gray-300 rounded-full mb-6"></div>
  //     <div className="h-6 w-32 bg-gray-300 rounded mb-3"></div>
  //     <div className="h-4 w-48 bg-gray-300 rounded mb-2"></div>
  //     <div className="h-4 w-40 bg-gray-300 rounded"></div>
  //   </div>
  // );

  return (
    <>
      {/* <div className="bg-gray-100 ">
        <div className="bg-gray-100 ">
          <a href="#corpform" className="hidden md:block">
            {loading ? (
              <div className="animate-pulse">
                <div className="w-100 h-80 bg-gray-300 rounded-md mx-auto"></div>
              </div>
            ) : (
              <img
                src={corporatetrain}
                alt="Corporate Training Desktop Banner"
              />
            )}
          </a>
       
          <a href="#corpform" className="block md:hidden">
            {loading ? (
              <div className="animate-pulse">
                <div className="w-100 h-80 bg-gray-300 rounded-md mx-auto"></div>
              </div>
            ) : (
              <img src={corpmobile} alt="Corporate Training Mobile Banner" />
            )}
          </a>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">
              {loading ? (
                <div className="w-64 h-8 bg-gray-300 rounded-md mx-auto"></div>
              ) : (
                "Programs Delivered for Your Training Needs"
              )}
            </h2>
            <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto">
              {loading ? (
                <div className="w-80 h-6 bg-gray-300 rounded-md mx-auto"></div>
              ) : (
                "Flexible training solutions designed to fit your organization's requirements"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {loading ? (
              <>
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
                <PlaceholderCard />
              </>
            ) : (
              <>

                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train1}
                      className="w-12 h-12 object-contain"
                      alt="On Premises Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    On Premises
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    Get training at your location, tailored to your team's
                    specific needs and environment.
                  </p>
                </div>

      
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train2}
                      className="w-12 h-12 object-contain"
                      alt="Online Instructor Led Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    Live Online
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    Interactive virtual training with expert instructors,
                    accessible from anywhere in the world.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train3}
                      className="w-12 h-12 object-contain"
                      alt="Self Paced Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    Self Paced
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    Learn on your schedule with our comprehensive on-demand
                    course library.
                  </p>
                </div>

              
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train4}
                      className="w-12 h-12 object-contain"
                      alt="Blended Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    Blended
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    The perfect mix of live and self-paced learning for optimal
                    flexibility and results.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div> */}
      <div className="bg-gray-100 ">
        <div className="bg-gray-100 ">
          <a href="#corpform" className="hidden md:block">
           
              <img
                src={corporatetrain}
                alt="Corporate Training Desktop Banner"
              />
         
          </a>
          {/* Mobile Banner */}
          <a href="#corpform" className="block md:hidden">
          
              <img src={corpmobile} alt="Corporate Training Mobile Banner" />
      
          </a>
        </div>
        {/* Program Delivery Section */}
        <div data-aos="fade-down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">             
                "Programs Delivered for Your Training Needs"              
            </h2>
            <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto">            
                "Flexible training solutions designed to fit your organization's requirements"        
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">             
              <>
                {/* On Premises */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train1}
                      className="w-12 h-12 object-contain"
                      alt="On Premises Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    On Premises
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    Get training at your location, tailored to your team's
                    specific needs and environment.
                  </p>
                </div>

                {/* Online Instructor Led */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train2}
                      className="w-12 h-12 object-contain"
                      alt="Online Instructor Led Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    Live Online
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    Interactive virtual training with expert instructors,
                    accessible from anywhere in the world.
                  </p>
                </div>

                {/* Self Paced */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train3}
                      className="w-12 h-12 object-contain"
                      alt="Self Paced Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    Self Paced
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    Learn on your schedule with our comprehensive on-demand
                    course library.
                  </p>
                </div>

                {/* Blended */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
                    <img
                      src={train4}
                      className="w-12 h-12 object-contain"
                      alt="Blended Training"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    Blended
                  </h3>
                  <p className="text-gray-600 text-center text-base leading-relaxed">
                    The perfect mix of live and self-paced learning for optimal
                    flexibility and results.
                  </p>
                </div>
              </>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CorporateTraining;
