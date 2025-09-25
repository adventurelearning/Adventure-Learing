import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// Import images
// import banner1 from '../assets/banner1.svg';
// import banner2 from '../assets/banner2.svg';
// import banner3 from '../assets/banner3.svg';
// import banner4 from '../assets/banner4.svg';
// import banner5 from '../assets/banner5.svg';
// import banner1 from '../assets/banner1.svg';

import banner1 from '../assets/HDbanner/full banner1.svg'
import banner2 from '../assets/HDbanner/full banner8.svg'
import banner3 from '../assets/HDbanner/full banner3.svg'
import banner4 from '../assets/HDbanner/full banner4.svg'
import banner5 from '../assets/HDbanner/full banner5.png'
import banner6 from '../assets/HDbanner/full banner6.svg'



import hmb1 from '../assets/HMbanner/hmb1.webp';
import hmb2 from '../assets/HMbanner/hmb2.webp';
import hmb3 from '../assets/HMbanner/hmb3.webp';
// import hmb4 from '../assets/HMbanner/hmb4.webp';

// You can prepare different banner versions here
// const desktopBanners = [
//   { image: '../../../public/banner/adventure learning in coimbatore.webp', link: '/Register' },
//   { image: '../../../public/banner/full stack development course in coimbatore.webp', link: '/Register' },
//   { image: '../../../public/banner/Professional Courses with Placement Support.webp', link: '/Register'},
//   { image: '../../../public/banner/top it training institute in coimbatore with placement.webp', link: '/Register' }
// ];
const desktopBanners = [
  { image: banner2, link: '/Register' },
  { image: banner3, link: '/Register' },
  { image: banner1, link: '/Register' },
  { image: banner4, link: '/Register' },
  { image: banner6, link: '/Register' },
  { image: banner5, link: '/Register' },

  // { image: banner4, link: '/Register'},

  // { image: banner4, link: '/Register' }
];

const mobileBanners = [
  { image: hmb1, link: '/Register' },
  { image: hmb2, link: '/Register' },
  { image: hmb3, link: '/Register' },
  // { image: hmb4, link: '/Register' },
];

export default function CarouselPage() {
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);


  return (
    <div className="flex flex-col z-50 items-center justify-center w-full" id="home">

      <>
        {/* Desktop Carousel */}
        <div className="w-full hidden lg:block">
          <Swiper
            ref={desktopSwiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full lg:h-[680px] md:h-[720px]"
          >
            {desktopBanners.map((img, index) => (
              <SwiperSlide key={index}>
                <a href={img.link}>
                  <img
                    src={img.image}
                    alt={`Desktop Slide ${index + 1}`}
                    className="w-full  object-cover rounded"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Carousel */}
        <div className="w-full block lg:hidden">
          <Swiper
            ref={mobileSwiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {mobileBanners.map((img, index) => (
              <SwiperSlide key={index}>
                <a href={img.link}>
                  <img
                    src={img.image}
                    alt={`Mobile Slide ${index + 1}`}
                    className="w-full  object-cover rounded"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>

    </div>
  );
}