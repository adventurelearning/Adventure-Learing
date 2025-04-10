import React from 'react';
import train1 from '../assets/train1.png';
import train2 from '../assets/train2.png';
import train3 from '../assets/train3.png';
import train4 from '../assets/train4.png';

function CorporateTraining() {
  return (
    <>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div className="bg-gray-100 ">
          <section className="py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Workforce?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
              Adventure Learning equips your team with essential skills through a customized curriculum, designed to meet your organization's specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-gray-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Get Started
                </button>
                <button className="bg-transparent hover:bg-white/10 border-2 border-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Request a Demo
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Program Delivery Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
  <div className="text-center mb-12 lg:mb-16">
    <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">
      Programs Delivered for Your Training Needs
    </h2>
    <p className="text-lg font-normal text-gray-600 max-w-3xl mx-auto">
      Flexible training solutions designed to fit your organization's requirements
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    {/* On Premises */}
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
      <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
        <img src={train1} className="w-12 h-12 object-contain" alt="On Premises Training" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">On Premises</h3>
      <p className="text-gray-600 text-center text-base leading-relaxed">
        Get training at your location, tailored to your team's specific needs and environment.
      </p>
    </div>

    {/* Online Instructor Led */}
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
      <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
        <img src={train2} className="w-12 h-12 object-contain" alt="Online Instructor Led Training" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Live Online</h3>
      <p className="text-gray-600 text-center text-base leading-relaxed">
        Interactive virtual training with expert instructors, accessible from anywhere in the world.
      </p>
    </div>

    {/* Self Paced */}
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
      <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
        <img src={train3} className="w-12 h-12 object-contain" alt="Self Paced Training" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Self Paced</h3>
      <p className="text-gray-600 text-center text-base leading-relaxed">
        Learn on your schedule with our comprehensive on-demand course library.
      </p>
    </div>

    {/* Blended */}
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#0057D3]">
      <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-full mb-6">
        <img src={train4} className="w-12 h-12 object-contain" alt="Blended Training" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Blended</h3>
      <p className="text-gray-600 text-center text-base leading-relaxed">
        The perfect mix of live and self-paced learning for optimal flexibility and results.
      </p>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default CorporateTraining;
