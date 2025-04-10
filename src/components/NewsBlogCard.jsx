// import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import youtube1 from "../assets/youtube1.png";
// import youtube2 from "../assets/youtube1.png";
// import youtube3 from "../assets/youtube1.png";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"; // Import the icons

import React, { useState } from 'react';
import course1 from '../assets/course1.png'; // Replace with actual image paths
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png';
import course5 from '../assets/course5.png';
import course6 from '../assets/course6.png';
import { BsArrowLeft, BsArrowRight  } from 'react-icons/bs'; // Import arrow icons

function NewsBlogCard() {
    const cards = [
        { title: "Adventure Learning", image: course1, desc: "How to become ridiculously self-aware in 20 minutes", date: "14 Jan, 2025", author: "Admin", },
        { title: "Adventure Learning", image: course2, desc: " How to become ridiculously self-aware in 20 minutes", date: "19 Jan, 2025", author: "Admin", },
        { title: "Adventure Learning", image: course3, desc: "How to become ridiculously self-aware in 20 minutes", date: "26 Jan, 2025", author: "Admin", },
        { title: "Adventure Learning", image: course4, desc: " How to become ridiculously self-aware in 20 minutes", date: "05 Feb, 2025", author: "Admin", },
        { title: "Adventure Learning", image: course5, desc: "How to become ridiculously self-aware in 20 minutes", date: "08 Feb, 2025", author: "Admin", },
        { title: "Adventure Learning", image: course6, desc: "How to become ridiculously self-aware in 20 minutes", date: "15 feb, 2025", author: "Admin", },

    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 4;

    const handleNext = () => {
        if (currentIndex + cardsPerView < cards.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    // const newsData = [
    //     {
    //         id: 1,
    //         image: youtube1,
    //         title: "How to become ridiculously self-aware in 20 minutes",
    //         date: "14 Jan, 2025",
    //         author: "Admin",
    //     },
    //     {
    //         id: 2,
    //         image: youtube2,
    //         title: "How to become ridiculously self-aware in 20 minutes",
    //         date: "14 Jan, 2025",
    //         author: "Admin",
    //     },
    //     {
    //         id: 3,
    //         image: youtube3,
    //         title: "How to become ridiculously self-aware in 20 minutes",
    //         date: "14 Jan, 2025",
    //         author: "Admin",
    //     },

    // ];
    // const goToNext = () => {
    //     swiperRef.current.swiper.slideNext();  // Go to next slide
    // };

    // const goToPrev = () => {
    //     swiperRef.current.swiper.slidePrev();  // Go to previous slide
    // };

    return (
        <>
            <div className="relative flex  overflow-hidden bg-gray-100 px-5 ">
                <div
                    className="flex  transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
                        // Set total width
                    }}
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-1/4 flex-shrink-0 p-4 " // Each card is 1/4th width
                        >
                            <div className="bg-white border  border-1  border-gray-300 rounded-lg items-center overflow-hidden text-left shadow-md p-2   ">
                                <div className='flex pb-3  justify-around'>
                                    <p className='text-white  justify-center items-center text-base flex rounded-full bg-blue-500 w-12 h-12'>AL</p>
                                    <p className="font-semibold text-base   text-black">{card.title}<spna className="block text-gray-600 text-sm font-bold">{card.date}</spna></p>                                    
                                    <i class="bi bi-three-dots-vertical  text-gray-500 text-2xl "></i>
                                </div>
                                <img src={card.image} alt={card.title} className="w-full  object-cover  " />
                                <div className="p-4">
                                    <p className='font-medium text-base text-gray-500'>How to become ridiculously self-aware in 20 minutes</p>

                                    {/* <button className="bg-[#0057D3] border border-white text-white px-5 py-2 rounded-md font-semibold hover:border-[#0057D3] hover:bg-white hover:text-blue-600 transition duration-300">
                          Know More
                        </button> */}
                                    <div className="flex  items-center text-center ">
                                        <i class="bi bi-heart-fill text-gray-500 hover:text-gray-600 text-2xl cursor-pointer"></i>
                                        <i class="bi bi-share-fill text-gray-500 hover:text-gray-600 text-2xl pl-5 cursor-pointer"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
                    <button
                        onClick={handlePrev}
                        className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentIndex === 0}
                    >
                        <BsArrowLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${currentIndex + cardsPerView >= cards.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentIndex + cardsPerView >= cards.length}
                    >
                        <BsArrowRight size={24} />
                    </button>

                </div>
            </div>
            {/* <div className="text-center  bg-gray-100  pb-5">
                <div className="flex justify-center gap-20  flex-wrap">
                    {newsData.map((item) => (
                        <div
                            className="bg-white rounded-lg shadow-lg overflow-hidden w-72 relative group"
                            key={item.id}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-30 object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <i className="bi bi-youtube text-white group-hover:text-red-500 transition-colors duration-300 text-5xl"></i>

                            <div className="p-2 ">
                                <p className="text-gray-500 text-sm font-bold flex justify-center gap-2 ">
                                    <FaCalendarAlt className="text-blue-500 text-1xl" /> {item.date} <FaUser className="text-blue-500 text-1xl" /> {item.author}
                                </p>
                                <h3 className="text-lg font-bold text-gray-800 mt-2">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
              
                <div className="flex justify-center space-x-4 mt-4 mb-5">
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

            </div> */}
        </>
    );
}

export default NewsBlogCard;
