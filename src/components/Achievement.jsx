import React from "react";

const Achievements = () => {
  return (
    
    <div  className="text-center py-8 sm:py-12 bg-[#F4F9FF] mt-5">
      <p data-aos="fade-down" className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">
        YOUR ASPIRATIONS, OUR DEDICATION
      </p>
      <h2 data-aos="fade-down" className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
        Upgrade yourself today, achieve<span className="block"> greatness forever</span>
      </h2>

      <div  className="grid grid-cols-4 md:grid-cols-4 px-6 gap-4 mt-8 sm:mt-12">
        <div>
          <p className="text-lg lg:text-4xl font-bold text-[#0057D3]">20K+</p>
          <p className="text-[12px] lg:text-lg font-semibold text-gray-500 mt-1 uppercase">Happy Clients</p>
        </div>
        <div>
          <p className="text-lg lg:text-4xl font-bold text-[#0057D3]">2500+</p>
          <p className="text-[12px] lg:text-lg font-semibold text-gray-500 mt-1 uppercase">Our Students</p>
        </div>
        <div>
          <p className="text-lg lg:text-4xl font-bold text-[#0057D3]">7000+</p>
          <p className="text-[12px] lg:text-lg font-semibold text-gray-500 mt-1 uppercase">Projects Done</p>
        </div>
        <div>
          <p className="text-lg lg:text-4xl font-bold text-[#0057D3]">15+</p>
          <p className="text-[12px] lg:text-lg font-semibold text-gray-500 mt-1 uppercase">Advance Courses</p>
        </div>
      </div>
    </div>
   
  );
};

export default Achievements;