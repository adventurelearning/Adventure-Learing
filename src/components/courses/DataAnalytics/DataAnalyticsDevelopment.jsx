import React from 'react';

const DataAnalyticsDevelopment = () => {
  return (
    <div className="flex items-center justify-center font-sans md:py-12 md:mt-6 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">      
          
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Best Data Analytics Course
          </h1>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            At Adventure Learning, we provide the best Data Analytics course, available both <span className="font-semibold text-blue-800">online and offline</span>, designed to help learners build expertise in the most in-demand data tools and techniques.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-800">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Master Data Analytics Skills
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you’re analyzing data with Python and SQL or creating impactful dashboards in Tableau and Power BI, this program ensures you gain hands-on skills for real-world business problem solving.
            </p>
          </div>       
        </div>

        {/* Right Column - Image */}
        <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://blog.herzing.ca/hubfs/data%20analytics.jpg" 
            alt="Data Analytics Course" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsDevelopment;
