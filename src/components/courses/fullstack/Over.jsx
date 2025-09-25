import React, { useState } from 'react'
import img1 from '../../../assets/img/full5.webp'
import img2 from '../../../assets/img/full6.webp'
import img3 from '../../../assets/img/full3.webp'
import img4 from '../../../assets/img/full2.webp'
import CourseFeatures from './CourseFeatures'
import WebDevelopmentCourse from './WebDevelopmentCourse'

const Over = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState({});

    const courseContent = [      
       
    ]

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleImageLoad = (index) => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
    };

    return (
        <div className="container mx-auto px-4  bg-blue-50 rounded-xl">               

            <div className="space-y-8">
                {courseContent.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <div className={`flex-1 w-full transition-all duration-500 relative ${activeIndex === index ? 'scale-105' : 'scale-100'}`}>
                            {!imagesLoaded[index] && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
                            )}
                            <img
                                src={item.image}
                                alt={item.question}
                                className={`w-[90%] m-7 h-64 md:h-60 rounded-xl object-cover shadow-lg ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                                loading="lazy"
                                onLoad={() => handleImageLoad(index)}
                            />
                        </div>
                        <div className="flex-1 w-full space-y-4">
                            <h3
                                className="text-xl md:text-2xl font-medium text-[#0057D3] cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                            </h3>
                            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-20'}`}>
                                <p className="text-gray-600 text-justify">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <button
                onClick={() => setIsPopupOpen(true)}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
                Enroll Now
                <span className="ml-2">→</span>
            </button>

            {/* Enhanced Popup Modal */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center bg-blue-600 px-6 py-4">
                            <h3 className="text-xl font-bold text-white">Enrollment Form</h3>
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="text-white hover:text-gray-200 text-2xl transition-transform hover:rotate-90"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-6 lg:ml-10">
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Over;