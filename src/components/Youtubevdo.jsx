import React, { useState } from 'react';
import frame1 from '../assets/frame1.svg';
import frame2 from '../assets/frame2.svg';
import { BsArrowLeft, BsArrowRight  } from 'react-icons/bs'; // Import arrow icons

function Youtubevdo() {
    const cards = [
        { title: "Adventure Learning", image: frame1, desc: "How to become ridiculously self-aware in 20 minutes", date: "14 Jan, 2025", author: "Admin", },
        { title: "Adventure Learning", image: frame2, desc: " How to become ridiculously self-aware in 20 minutes", date: "19 Jan, 2025", author: "Admin", },
        { title: "Adventure Learning", image: frame1, desc: "How to become ridiculously self-aware in 20 minutes", date: "26 Jan, 2025", author: "Admin", },
        { title: "Adventure Learning", image: frame2, desc: " How to become ridiculously self-aware in 20 minutes", date: "05 Feb, 2025", author: "Admin", },
        { title: "Adventure Learning", image: frame1, desc: "How to become ridiculously self-aware in 20 minutes", date: "08 Feb, 2025", author: "Admin", },
        { title: "Adventure Learning", image: frame2, desc: "How to become ridiculously self-aware in 20 minutes", date: "15 feb, 2025", author: "Admin", },

    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = window.innerWidth < 640 ? 1 : 4; // Adjust based on screen size

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

    return (
        <>
    <div   className="relative overflow-hidden px-5">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/4 flex-shrink-0 p-2 sm:p-4`} // Adjust width for mobile
          >
                            <div className="bg-white border  border-1  border-gray-300 rounded-lg items-center overflow-hidden text-left shadow-md p-2   ">
                                <div className='flex pb-3  justify-around'>
                                    <p className='text-white  justify-center items-center text-base flex rounded-full bg-blue-500 w-12 h-12'>AL</p>
                                    <p className="font-semibold text-base   text-black">{card.title}<spna className="block text-gray-600 text-sm font-bold">{card.date}</spna></p>                                    
                                    <i class="bi bi-three-dots-vertical  text-gray-500 text-[22px] "></i>
                                </div>
                                <img src={card.image} alt={card.title} className="w-full  object-cover  " />
                                <div className="p-4">
                                    <p className='font-medium text-base text-gray-500'>How to become ridiculously self-aware in 20 minutes</p>
                                    <div className="flex  items-center text-center pt-5 ">
                                        <i class="bi bi-heart-fill text-gray-500 hover:text-gray-500 text-[22px] cursor-pointer"></i>
                                        <i class="bi bi-share-fill text-gray-500 hover:text-gray-500 text-[22px] pl-5 cursor-pointer"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                                ))}
                              </div>
                        
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
                            </>)}

export default Youtubevdo;














