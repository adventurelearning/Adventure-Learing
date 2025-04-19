import React from "react";
import BanDesktop2 from "../../../assets/cdbanner/EMBEDDED SYSTEM.svg";
import BanMobile2 from "../../../assets/cdbanner/EMBEDDED SYSTEM.svg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate =useNavigate()

  return (
    <div className="w-full h-auto bg-cover bg-center flex items-center justify-center text-white relative">
    <div className="rounded-xl text-center w-full">
      {/* Desktop Banner */}
      <img src={BanDesktop2} alt="Desktop Banner" className="hidden md:block w-full h-auto" />
      
      {/* Mobile Banner */}
      <img src={BanMobile2} alt="Mobile Banner" className="block md:hidden w-full h-auto" />
      
      {/* Download Brochure Button - Positioned absolutely */}
      <div className="absolute bottom-14 ml-6 md:bottom-8 lg:bottom-2 left-1/2 lg:ml-10 transform">
        <button onClick={()=>navigate('/Register')} className="bg-blue-600  hover:bg-white text-white hover:text-[#0057D3] text-xs px-2 py-2 font-semibold lg:py-2 lg:px-6 lg:text-base rounded-md shadow-lg transition-all duration-300  md:text-base">
          Download Brochure
        </button>
      </div>
    </div>
  </div>

  );
};

export default Banner;


