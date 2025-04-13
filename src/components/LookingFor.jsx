import enquiry1 from '../assets/enquiry1.png';
import career4 from '../assets/career4.png';
import career2 from '../assets/career2.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

function LookingFor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate loading delay - replace with your actual data fetching if needed
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the time as needed
  }, []);

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <>
           {loading ? (
        <div className="text-center pt-12 pb-10 bg-blue-100">
          <div>
            <h1 className="font-semibold text-3xl mt-5 text-gray-400 animate-pulse">
              <span className="inline-block w-32 h-8 bg-gray-300 rounded animate-pulse"></span>
            </h1>
          </div>

          <div className="p-4">
            <h4 className="font-normal text-lg text-gray-400 text-center animate-pulse">
              <span className="inline-block w-48 h-6 bg-gray-300 rounded animate-pulse"></span>
            </h4>
          </div>

          {/* Flex container with responsive behavior */}
          <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center gap-6 p-6">
            {/* Placeholder Cards */}
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative flex items-center bg-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 shadow-lg overflow-hidden"
              >
                <span className="inline-block w-14 h-14 mr-4 bg-gray-300 rounded-full animate-pulse"></span>
                <div className="flex items-center justify-between w-full">
                  <span className="inline-block text-base sm:text-lg font-semibold text-gray-400 animate-pulse w-32 h-6 rounded"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center pt-12 pb-10 bg-blue-100">
          <div>
            <h1 data-aos="fade-down" className="font-semibold text-3xl mt-5 text-black">
              Hey Learners, Welcome to <span className="text-[#0057D3]">Adventure Learning!</span>
            </h1>
          </div>

          <div className="p-4">
            <h4 className="font-normal text-lg text-gray-600 text-center">
              What Are You Looking For?
            </h4>
          </div>

          {/* Flex container with responsive behavior */}
          <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center gap-6 p-6">
            {/* First card */}
            <div
              data-aos="zoom-in"
              className="relative flex items-center bg-white text-[#0057D3] hover:bg-gradient-to-br from-blue-500 to-blue-600 hover:text-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
            >
              {/* Hover effect element */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0  border-t-blue-100 border-l-transparent"></div>

              <img src={career2} alt="Upskill Illustration" className="w-14 h-14 mr-4 filter group-hover:brightness-0 group-hover:invert transition duration-300" />
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={handleButtonClick}
                  className="text-base sm:text-lg font-semibold hover:underline cursor-pointer transition duration-300 ease-in-out"
                >
                  I want to upskill in my current career
                </button>
              </div>
            </div>

            {/* Second card */}
            <div
              data-aos="zoom-in"
              className="relative flex items-center bg-white text-[#0057D3] hover:bg-gradient-to-br from-blue-500 to-blue-600 hover:text-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
            >
              {/* Hover effect element */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0  border-t-blue-100 border-l-transparent"></div>

              <img src={enquiry1} alt="Enquiry Illustration" className="w-14 h-14 mr-4 filter group-hover:brightness-0 group-hover:invert transition duration-300" />
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={handleButtonClick}
                  className="text-base sm:text-lg font-semibold hover:underline cursor-pointer transition duration-300 ease-in-out"
                >Make an Enquiry</button>
              </div>
            </div>

            {/* Third card */}
            <div
              data-aos="zoom-in"
              className="relative flex items-center bg-white text-[#0057D3] hover:bg-gradient-to-br from-blue-500 to-blue-600 hover:text-white border border-gray-200 rounded-xl p-5 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group"
            >
              {/* Hover effect element */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-0 h-0  border-t-blue-100 border-l-transparent"></div>

              <img src={career4} alt="New Career Illustration" className="w-14 h-14 mr-4 filter group-hover:brightness-0 group-hover:invert transition duration-300" />
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={handleButtonClick}
                  className="text-base sm:text-lg font-semibold hover:underline cursor-pointer transition duration-300 ease-in-out"
                >
                  I want to find a new career
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LookingFor;