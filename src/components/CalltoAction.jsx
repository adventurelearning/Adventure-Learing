import React from 'react';

function CallToAction() {
  return (
    <div className="bg-[#0057D3] py-6 text-center">
  <div className="container mx-auto px-4">
    <h1 className="text-white lg:text-3xl text-2xl mb-2">
       Take Your Team to the Next Level with Our Corporate Training! 
    </h1>
    <p className="text-gray-200 text-base mb-4">
      Unlock the potential of your workforce with industry-leading training programs. Contact us now!
    </p>
    <a
      href="tel:+919884445571"
      className="bg-transparent border border-white text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
    >
      <i class="bi bi-telephone text-base"></i><span className='ml-3'>Call Now: +91-9884445571</span>
    </a>
  </div>
</div>

  );
}

export default CallToAction;