import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// Import images
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';
import banner5 from '../assets/banner5.svg';

import mb1 from '../assets/mb1.svg';
import mb2 from '../assets/mb2.svg';
import mb3 from '../assets/mb3.svg';
import mb4 from '../assets/mb4.svg';

// You can prepare different banner versions here
const desktopBanners = [
  { image: banner3, link: '/onlinetraining' },
  { image: banner1, link: '/contact' },
  { image: banner2, link: '/Register' },  ,
  { image: banner4, link: '' },
  // { image: banner5, link: '' },
];

const mobileBanners = [
  { image: mb4, link: '/onlinetraining' },
  { image: mb1, link: '/contact' },
  { image: mb2, link: '/Register' },
  { image: mb3, link: '/onlinetraining' },
  // { image: mb5, link: '' },
];

export default function CarouselPage() {
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {loading ? (
        // Placeholder Loading State
        <div className="w-full rounded bg-gray-100 animate-pulse">
          <div className="h-48 lg:h-auto bg-gray-300 rounded"></div>
        </div>
      ) : (
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
              className="w-full"
            >
              {desktopBanners.map((img, index) => (
                <SwiperSlide key={index}>
                  <a href={img.link}>
                    <img
                      src={img.image}
                      alt={`Desktop Slide ${index + 1}`}
                      className="w-full object-cover rounded"
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
                      className="w-full object-cover rounded"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
}