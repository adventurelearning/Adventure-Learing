import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import onlinetrain from '../assets/onlinetrain.svg'
import onlinemob from '../assets/onlinemob.svg'
function StudentTraining() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        {loading ? (
          <section className="py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white animate-pulse">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="bg-gray-700 h-8 w-96 rounded-md mx-auto mb-6"></div>
              <div className="bg-gray-700 h-6 w-64 rounded-md mx-auto mb-8"></div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="bg-gray-300 h-12 w-32 rounded-lg"></div>
                <div className="bg-gray-700 h-12 w-40 rounded-lg"></div>
              </div>
            </div>
          </section>
        ) : (
           <div className="bg-gray-100">
          {/* Desktop Banner */}
          <a href="#courselist" className="hidden md:block">
            <img src={onlinetrain} alt="Corporate Training Desktop Banner" className="w-full" />
          </a>

          {/* Mobile Banner */}
          <a href="#courselist" className="block md:hidden">
            <img src={onlinemob} alt="Corporate Training Mobile Banner" />
          </a>
        </div>
        )}
      </div>
    </>
  );

}
export default StudentTraining;