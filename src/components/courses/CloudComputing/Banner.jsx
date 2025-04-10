import React from "react";
import CourseBaner3 from "../../../assets/CourseBaner3.svg"

const Banner = () => {
  return (
    <div className="mt-6 w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white">
      <div className=" rounded-xl text-center">
        <img src={CourseBaner3} alt="" />
      </div>
    </div>
  );
};

export default Banner;
