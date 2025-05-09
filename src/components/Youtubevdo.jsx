import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function Youtubevdo() {
    const videos = [
       
        { 
            title: "Adventure Learning", 
            videoId: "D-7kBBqcXAk", 
            desc: "Student Poonkulali Learning Experience in Full Stack Development", 
            date: "19 Jan, 2025", 
            author: "Admin" 
        },
        { 
            title: "Adventure Learning", 
            videoId: "kXeT3T1apIE", 
            desc: "Student Mahesh Learning Experience in Embedded System", 
            date: "26 Jan, 2025", 
            author: "Admin" 
        },
        { 
            title: "Adventure Learning", 
            videoId: "2RTTlyFeYpE", 
            desc: "Sushmitha Learning Experience in Python", 
            date: "05 Feb, 2025", 
            author: "Admin" 
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            setCardsPerView(window.innerWidth < 640 ? 1 : 4);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial value

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (currentIndex + cardsPerView < videos.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div data-aos="fade-right"  data-aos-duration="1000" className="relative overflow-hidden px-5 py-8">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
                }}
            >
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`w-full ${cardsPerView === 1 ? 'sm:w-full' : 'sm:w-1/2'} lg:w-1/3  flex-shrink-0 p-2 sm:p-4`}
                    >
                        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden text-left shadow-md h-full flex flex-col py-5 px-3">
                            <div className='flex p-4 justify-between items-center'>
                                <div className="flex items-center">
                                    <div className='text-white flex items-center justify-center rounded-full bg-blue-500 w-12 h-12 mr-3'>AL</div>
                                    <div>
                                        <p className="font-semibold text-base text-black">{video.title}</p>
                                        <span className="text-gray-600 text-sm font-bold">{video.date}</span>
                                    </div>
                                </div>                                    
                                <i className="bi bi-three-dots-vertical text-gray-500 text-xl cursor-pointer"></i>
                            </div>
                            <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
                                <iframe 
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
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
                    className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${currentIndex + cardsPerView >= videos.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex + cardsPerView >= videos.length}
                >
                    <BsArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default Youtubevdo;