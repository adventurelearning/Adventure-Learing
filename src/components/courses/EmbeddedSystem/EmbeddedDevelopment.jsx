import React from 'react';

const EmbeddedDevelopment = () => {
  return (
    <div className="flex items-center justify-center font-sans md:py-12 md:mt-6 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">      
          
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Best Embedded Systems Development Course
          </h1>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            At Adventure Learning, we offer the best Embedded Systems Development course, available both <span className="font-semibold text-blue-800">online and offline</span>, tailored to suit different learning preferences.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-800">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Comprehensive Learning Experience
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you prefer the convenience of online learning or the interactive experience of classroom sessions, our course ensures you gain the skills needed to become a proficient embedded systems engineer. Learn microcontrollers, IoT, real-time operating systems, and embedded C/C++ with practical, hands-on training.
            </p>
          </div>       
        </div>

        {/* Right Column - Image */}
        <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden ">
          <img 
            src="https://blog.emb.global/wp-content/uploads/2024/04/Exploring-Embedded-Systems-Definition-Applications-and-More.webp" 
            alt="Embedded Systems Development Course" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EmbeddedDevelopment;
