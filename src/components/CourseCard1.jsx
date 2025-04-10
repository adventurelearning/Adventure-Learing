import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, EffectCube, Pagination, Navigation } from 'swiper/modules';

import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png';
import course5 from '../assets/course5.png';
import course6 from '../assets/course6.png';


const courses = [
  { image: course1, name: "INTERNET OF THINGS", content: "Connect, automate, innovate – shaping the future with IoT!" },
  { image: course2, name: "EMBEDDED SYSTEM", content: "Powering smart devices with real-time embedded solutions!" },
  { image: course3, name: "DATA SCIENCE", content: "Connect, automate, innovate – shaping the future with IoT!" },
  { image: course4, name: "FULL STACK", content: "Connect, automate, innovate – shaping the future with IoT!" },
  { image: course5, name: "DATA ANALYTICS", content: "Connect, automate, innovate – shaping the future with IoT!" },
  { image: course6, name: "CLOUD COMPUTING", content: "Connect, automate, innovate – shaping the future with IoT!" },


];

function CourseCard1() {
  return (
    <>
      <div className='bg-[#0057D3]' >

        <div className="max-w-4xl mx-auto py-3 px-4 bg-[#0057D3]">
          <div className="flex flex-col items-center p-6">
            <h3
              className="font-bold inline-flex items-center justify-center rounded-[20px] text-center p-2 px-5 "
              style={{ backgroundColor: '#CDD9FF', color: "#0057D3" }} // Apply custom background color using inline styles
            >
              OUR TRENDING COURSES
            </h3>
          </div>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 5,  // Adjust tilt angle
              stretch: 50, // Increase space between slides
              depth: 200,  // Increase 3D depth effect
              modifier: 2, // Control intensity of effect
              slideShadows: false, // Remove shadows for cleaner look
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[EffectCoverflow, Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-[18rem] relative mb-10 "
          >

            {courses.map((course, index) => (
              <SwiperSlide
                key={index}
                className="w-[20rem] transition-transform transform hover:scale-105 h-[22rem] flex flex-col items-center justify-center   bg-gradient-to-b from-white to-blue-100 rounded-2xl  border border-gray-300 space-y-4  "
              >
                <img
                  src={course.image}
                  alt={`Slide ${index + 1}`}
                  className="w-16 h-18 mt-5 object-cover rounded-lg mx-auto "
                />
                <h2 className="text-lg font-semibold p-[-20px] text-center">{course.name}</h2>
                <p className='text-center text-sm  text-gray-800 '>{course.content}</p>
                <div className="flex gap-4 pb-5 ">
                  <button className="px-3 py-2  ml-7 bg-blue-700  text-white rounded-lg">
                    Demo Class
                  </button>
                  <button className="px-3 py-2 bg-gray-700 text-white rounded-lg">
                    Know More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div >
      </div>
    </>
  );
}

export default CourseCard1;
