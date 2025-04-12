import React from "react";
import CourseBaner6 from "../../../assets/CourseBaner6.svg";

const Banner = () => {
  return (
    <div className="mt-6 w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white">
      <div className=" rounded-xl text-center">
        <img src={CourseBaner6} alt="" />
      </div>
    </div>
  );
};

export default Banner;
