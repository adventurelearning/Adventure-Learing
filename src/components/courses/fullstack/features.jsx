import React from 'react';
import EnquiryForm from '../EnquiryForm';
import { useState } from 'react';
const Features = () => {
     const [isPopupOpen, setIsPopupOpen] = useState(false);
   const features = [
    {
      id: 1,
      title: "Fullstack Course",
      description: "Best Fullstack Development course available online and offline.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Flexible Learning",
      description: "Choose between online convenience or classroom interaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      title: "Hands-on Approach",
      description: "Real-world projects guided by experienced instructors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      title: "Job Ready Skills",
      description: "Gain proficiency for the full-stack developer job market.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 012-2V6m0 0a2 2 0 012 2v2a2 2 0 01-2 2h-2m-8 0a2 2 0 01-2-2V6a2 2 0 012-2h4" />
        </svg>
      ),
      color: "bg-red-100 text-red-600"
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-blue-600  py-12 px-4 sm:px-6 lg:px-20 gap-12">
      
      {/* Left Side */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-semibold text-white mb-4">Why Choose Adventure Learning</h1>
        <p className="text-lg text-gray-200 mb-6">
          For Full Stack Web Development Training - we believe in a practical, hands-on approach to learning.
        </p>
        <button 
         onClick={() => setIsPopupOpen(true)}
        className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition">
          Explore Our Courses
        </button>
          {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center bg-blue-600 px-6 py-4">
                            <h3 className="text-xl font-bold text-white">Enrollment Form</h3>
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="text-white hover:text-gray-200 text-2xl transition-transform hover:rotate-90"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-6 lg:ml-10">
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            )}
      </div>

      {/* Right Side */}
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start">
              <div className={`rounded-md w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0 ${feature.color}`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-tight">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;