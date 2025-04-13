import React, { useState, useEffect } from 'react';

function Trendingtech() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center mt-10 bg-white px-4 animate-pulse">
          <h1 className="font-semibold text-2xl lg:text-3xl mt-5 text-gray-400">
            <span className="inline-block w-64 h-8 bg-gray-300 rounded"></span>
          </h1>
          <div className="p-4">
            <h4 className="font-normal text-lg text-gray-400 text-center">
              <span className="inline-block w-96 h-6 bg-gray-300 rounded"></span>
             
              <span className="inline-block w-80 h-6 bg-gray-300 rounded mt-2"></span>
            </h4>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10 bg-white px-4 "> {/* Added px-4 */}
          <h1 data-aos="fade-down" className="font-semibold text-2xl lg:text-3xl  mt-5 text-[#0057D3]">
            Interactive sessions with career support
          </h1>
          <div className="p-4">
            <h4 className="font-normal text-lg text-gray-600 text-center">
              Discover tech careers with Adventure Learning’s hands-on programs and
              placements
            </h4>
          </div>
        </div>
      )}
    </>
  );
}
export default Trendingtech;