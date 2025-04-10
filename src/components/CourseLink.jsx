import React from 'react';

function CourseLink() {
  return (
    <>
      {/* Container for the list of links */}
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 text-sm sm:text-base font-semibold text-[#0057D3] cursor-pointer">
          <li data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500" className="text-center hover:text-black">All Courses</li>
          <li data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800" className="text-center hover:text-black">Design</li>
          <li data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1100" className="text-center hover:text-black">Business</li>
          <li data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1400" className="text-center hover:text-black">Development</li>
        </ul>
      </div>

      {/* Divider Line */}
      <div className="flex justify-center  py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="w-3/4 sm:w-5/6 md:w-4/6 lg:w-3/6 border-t-4 border-[#B9D9FF]"></div>
      </div>
    </>
  );
}

export default CourseLink;