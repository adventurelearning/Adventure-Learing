import React from "react";
import subscribe from '../assets/subscribe.png';

const Subscription = () => {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom"  className="flex justify-center items-center mt-10 px-4">
      <div className="bg-[#0057D3] text-white py-5 px-6 flex flex-col w-[85%] md:flex-row items-center justify-center gap-6 rounded-lg shadow-lg">
        <img
          src={subscribe}
          alt="Newsletter"
          className="w-52 h-auto"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold py-2">
            Exciting New Updates from Adventure Learning!
          </h2>
          <p className="text-gray-300 font-semibold text-base  ">Stay updated with the latest tech courses and exclusive free workshops!</p>
          <div className="mt-4 flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your mail id"
              className="p-3 rounded-md text-black w-full h-10 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-[#0057D3] border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Subscribe Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
