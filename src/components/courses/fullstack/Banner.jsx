import React from "react";
import Ban from "../../../assets/cb1.svg";

const Banner = () => {
  return (
    <div className="mt-6 w-full h-auto bg-cover bg-center flex items-center justify-center text-white">
      <div className=" rounded-xl text-center">
        <img src={Ban} alt="" />
      </div>
    </div>
  );
};

export default Banner;
