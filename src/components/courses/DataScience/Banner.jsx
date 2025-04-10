import React from "react";
import CourseBaner5 from "../../../assets/CourseBaner5.svg"

const Banner = () => {
  return (
    <div className="mt-6 w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white">
      <div className=" rounded-xl text-center">
        <img src={CourseBaner5} alt="" />
      </div>
    </div>
  );
};

export default Banner;
