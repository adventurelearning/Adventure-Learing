import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentTraining() {
  const navigate = useNavigate();
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
          <section className="py-16 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Journey?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Adventure Learning helps you master in-demand skills quickly with a personalized curriculum designed to fit your unique learning needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => navigate("/Register")}
                  className="bg-white text-gray-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-transparent hover:bg-white/10 border-2 border-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
export default StudentTraining;