import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import webcard1 from '../assets/webcard1.jpeg';
import webcard2 from '../assets/webcard2.jpeg';
import webcard3 from '../assets/webcard3.jpeg';
import webcard4 from '../assets/webcard4.jpeg';
import webcard5 from '../assets/webcard5.jpeg';
import webcard6 from '../assets/webcard6.jpeg';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function WebinarImages() {
  const swiperRef = useRef(null);
  const images = [webcard1, webcard2, webcard3, webcard4, webcard5, webcard6];

  const goToNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <>
      <div 
     data-aos="fade-right" data-aos-duration="1000" className="mx-12 sm:mx-6">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          spaceBetween={10}
          loop={true}
          className="mt-4 sm:mt-6"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="text-center mx-2 sm:ml-4 sm:mr-4 hover:scale-105 transition-transform duration-300">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="flex justify-center space-x-4 mt-4  sm:pb-4">
          <button
            onClick={goToPrev}
            className="swiper-prev text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <BsArrowLeftCircleFill size={30} />
          </button>
          <button
            onClick={goToNext}
            className="swiper-next text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <BsArrowRightCircleFill size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default WebinarImages;