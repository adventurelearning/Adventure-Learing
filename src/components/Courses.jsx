import React from 'react';

function Courses() {
  return (
    <div className="bg-white py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" id='couses'>
      <div className="flex justify-center items-center mt-4 ">
        <h3
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="font-bold rounded-full text-center p-2 px-4 text-sm "
          style={{ backgroundColor: '#CDD9FF', color: "#0057D3" }}
        >
          TOP CLASS COURSES
        </h3>
      </div>

      <div>
        <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000" className="font-semibold pt-4 text-2xl lg:text-3xl  text-center text-[#0057D3]">
          Explore Our World's Best Courses
        </h1>
      </div>

      <div className="p-4">
        <h4 className="font-normal text-lg  text-gray-600 text-center">
          Discover top courses that enhance your skills and accelerate success
        </h4>
      </div>
    </div>
  );
}

export default Courses;