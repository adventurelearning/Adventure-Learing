import React from "react";
import CourseBaner2 from "../../../assets/CourseBaner2.svg"

const Banner = () => {
  return (
    <div className="mt-6 w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white">
      <div className=" rounded-xl text-center">
        <img src={CourseBaner2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
