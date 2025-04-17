import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import onlinetrain from '../assets/onlinetrain.svg'
import onlinemob from '../assets/onlinemob.svg'
function StudentTraining() {
  const navigate = useNavigate()

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1200); // Simulate loading
  // }, []);

  return (
    <>
      {/* <div className="bg-gray-100">
        {loading ? (
          <section className="py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white animate-pulse">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="bg-gray-700 h-8 w-96 rounded-md mx-auto mb-6"></div>
              <div className="bg-gray-700 h-6 w-64 rounded-md mx-auto mb-8"></div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="bg-gray-300 h-12 w-32 rounded-lg"></div>
                <div className="bg-gray-700 h-12 w-40 rounded-lg"></div>
              </div>
            </div>
          </section>
        ) : ( */}
         <div className="w-full h-auto bg-cover bg-center flex items-center justify-center text-white relative">
             <div className="rounded-xl text-center w-full">
               {/* Desktop Banner */}
               <img src={onlinetrain} alt="Desktop Banner" className="hidden md:block w-full h-auto" />
               
               {/* Mobile Banner */}
               <img src={onlinemob} alt="Mobile Banner" className="block md:hidden w-full h-auto" />
               
               {/* Download Brochure Button - Positioned absolutely */}
               <div className="absolute bottom-9 ml-16 md:bottom-8 lg:bottom-7 left-1/2 lg:ml-28 transform ">
                 <a href="#courselist" className="bg-white  hover:bg-white text-[#0057D3] text-xs px-2 py-2 font-semibold lg:py-2 lg:px-6 lg:text-base rounded-md shadow-lg transition-all duration-300  md:text-base">
                   Choose a Course
                 </a>
               </div>
             </div>
           </div>
        {/* )} */}
      {/* </div> */}
    </>
  );

}
export default StudentTraining;