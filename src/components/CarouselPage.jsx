import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay module
import { Pagination, Autoplay } from "swiper/modules"; // Import necessary modules

import banner1 from '../assets/banner1.svg'
import banner2 from '../assets/banner2.svg'
import banner4 from '../assets/banner4.svg'
import banner5 from '../assets/banner5.svg'


const images = [
  {
    image:banner1
  },
  {
    image:banner2
  },
  {
    image:banner6
  },
  {
    image:banner4
  },
  {
    image:banner5
  },
  
];

export default function CarouselPage() {
  const swiperRef = useRef(null); // Reference to the Swiper instance

  const goToNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="relative w-full shadow">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]} 
          spaceBetween={10} 
          slidesPerView={1} 
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          className="w-full "
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.image}
                alt={`Slide ${index + 1}`}
                className="w-full lg:w-full
                 object-cover rounded"
              />
            </SwiperSlide>
            
          ))}
        </Swiper>
        

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          {/* <button
            onClick={goToPrevSlide}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
          >
            &#8592;
          </button> */}
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          {/* <button
            onClick={goToNextSlide}
            className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600"
          >
            &#8594;
          </button> */}
        </div>
      </div>
    </div>
  );
}
