import React from "react";
import BanDesktop4 from "../../../assets/cdbanner/BanDesktop4.svg";
import BanMobile4 from "../../../assets/cmbanner/BanMobile4.svg";

const Banner = () => {
  return (
    <div className="w-full h-auto bg-cover bg-center flex items-center justify-center text-white">
  <div className="rounded-xl text-center w-full">
    {/* Desktop Banner */}
    <img src={BanDesktop4} alt="Desktop Banner" className="hidden md:block w-full h-auto" />

    {/* Mobile Banner */}
    <img src={BanMobile4} alt="Mobile Banner" className="block md:hidden w-full h-auto" />
  </div>
</div>
  );
};

export default Banner;
