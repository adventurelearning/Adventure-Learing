import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import onlinetrain from '../assets/onlinetrain.svg'
import onlinemob from '../assets/onlinemob.svg'
function StudentTraining() {
  const navigate = useNavigate()



  return (
    <>    
         <div className="w-full h-auto bg-cover bg-center flex items-center justify-center text-white relative">
             <div className="rounded-xl text-center w-full">
               {/* Desktop Banner */}
               <img src={onlinetrain} alt="Desktop Banner" className="hidden md:block w-full h-auto" />
               
               {/* Mobile Banner */}
               <img src={onlinemob} alt="Mobile Banner" className="block md:hidden w-full h-auto" />
               
               {/* Download Brochure Button - Positioned absolutely */}
               <div className="absolute bottom-9 ml-16 md:bottom-8 lg:bottom-8 left-1/2 lg:ml-28 transform ">
                 <a href="#courselist" className="bg-white  hover:bg-[#0057D3] text-[#0057D3] hover:text-white text-xs px-3 py-2 font-semibold lg:py-3 lg:px-6 lg:text-base rounded-md shadow-lg transition-all duration-300  md:text-base">
                   Choose a Course
                 </a>
               </div>
             </div>
           </div>

    </>
  );

}
export default StudentTraining;