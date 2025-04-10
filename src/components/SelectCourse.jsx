// import React from "react";
// import robot from "../assets/robot.png";
// import bulb from "../assets/bulb.png";

// function SelectCourse() {
//     return (
//         <div className="w-full text-center font-sans ">
//             {/* Top section */}
//             <div className="bg-[#0057D3] text-white py-4 flex justify-between items-center px-8 h-auto sm:h-24">
//                 <h1 className="flex items-center justify-between w-full">
//                     <img src={bulb} alt="Bulb Icon" className="w-20 sm:w-36 ml-0 sm:ml-36" />
//                     <span className="flex-1 text-left text-2xl sm:text-2xl font-semibold">
//                         Start your Learning Journey Today!
//                     </span>
//                     <button className="bg-[#0057D3] border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
//                         EXPLORE ALL COURSES
//                     </button>
//                 </h1>
//             </div>
//             </div>      
//     );
// }

// export default SelectCourse;

import React from 'react';
import bulb from '../assets/bulb.png'; // Make sure the path is correct

function LearningJourneyBanner() {
  return (
    // <div className=" flex items-center justify-center bg-[#0057D3] text-white h-18 lg:h-24 sm:py-4 px-8 lg:px-16  ">    
    //     <div> 
    //     <img src={bulb} alt="Bulb Icon" className="lg:w-36  w-20" />        
    //     </div>     
    //     <div>
    //     <h1 className="lg:text-3xl font-semibold">Start your Learning Journey Today !</h1>
    //     </div>
    //     <div className=''>      
    //   <button className="border border-white py-1   lg:py-2 lg:px-4 text-xs lg:text-base ml-8 mt-2mb-2 rounded-md font-semibold  hover:bg-white hover:text-[#0057D3] transition duration-300">
    //     EXPLORE ALL COURSES
    //   </button>
    //   </div>
       <div className="bg-[#0057D3] text-white h-24 sm:py-4 px-4 sm:px-8 flex items-center justify-center">
            <div className="flex items-center ">
              <div className=" relative"> 
              <img src={bulb} alt="Bulb Icon" className="w-36" />
              </div>
              <span className="lg:text-3xl font-semibold">Start your Learning Journey Today !</span>
            </div>
            <div>
            <button className="border border-white py-1 sm:py-2 px-3 sm:px-4 lg:ml-10 lg:mt-2 rounded-md font-semibold text-sm hover:bg-white hover:text-[#0057D3] transition duration-300">
            EXPLORE ALL COURSES
            </button>
            </div>
          </div>
    // </div>
  );
}

export default LearningJourneyBanner;
