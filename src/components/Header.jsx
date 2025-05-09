import React from 'react';
const Header = () => {
  return (
<header className="hidden lg:flex text-white py-3 px-6 flex-col lg:flex-row justify-between items-center bg-[#0057D3]">
  <div className="text-xs flex flex-wrap justify-center lg:justify-start">
    <p className="whitespace-nowrap">
    Coimbatore : +91 9884445571 <span className="mx-4">|</span>  Chennai : +91 8111005300
    </p>
  </div>
  <div className="flex flex-col lg:flex-row items-center text-xs space-y-2 lg:space-y-0 lg:space-x-4">
    <p className="whitespace-nowrap">Hire from us : +91 9884220600</p>
  </div>
</header>
  );
}

export default Header;
