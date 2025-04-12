import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Header = () => {
  return (
<header className="hidden lg:flex text-white py-3 px-6 flex-col lg:flex-row justify-between items-center bg-[#0057D3]">
  <div className="text-xs flex flex-wrap justify-center lg:justify-start">
    <p className="whitespace-nowrap">
      Chennai : +91 8111005300 <span className="mx-4">|</span> Coimbatore : +91 9884445571
    </p>
  </div>
  <div className="flex flex-col lg:flex-row items-center text-xs space-y-2 lg:space-y-0 lg:space-x-4">
    <p className="whitespace-nowrap">Hire from us : +91 9884220600</p>
  </div>
</header>



  );
}

export default Header;
