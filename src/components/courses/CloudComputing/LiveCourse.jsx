import React from 'react';

const LiveCourse = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="relative rounded-xl overflow-hidden min-h-[200px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/1*JLr5qTvZLnzyHxBqXUouow.jpeg')`
          }}
        />
        
        {/* Semi-transparent Overlay (Bottom Half Only) */}
        <div className="absolute top-0 left-0 right-0 h-full lg:h-3/4 bg-blue-900 bg-opacity-50" />
        
        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-8 md:p-8 h-full flex flex-col justify-end">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 sm:mb-4">
              Live Projects in the Cloud Computing Course
              <span className="relative inline-flex h-3 w-3 align-middle ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl md:max-w-4xl lg:max-w-5xl text-white leading-relaxed">
              You'll build real-world cloud solutions including application deployments,
              automation with Terraform, and monitoring using tools like CloudWatch,Azure Monitor. 
              These projects will enhance your portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCourse;