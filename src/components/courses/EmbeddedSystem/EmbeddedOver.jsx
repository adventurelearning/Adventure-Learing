import React, { useState } from 'react'
import img1 from '../../../assets/img/em2.webp'
import img2 from '../../../assets/img/em3.webp'
import img3 from '../../../assets/img/em4.webp'
import img4 from '../../../assets/img/em1.webp'
import EnquiryForm from '../EnquiryForm'

const EmbeddedOver = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
     const [imagesLoaded, setImagesLoaded] = useState({});

    const courseContent = [
        {
            question: 'Unlock Your Potential with Our Embedded Systems Course',
            answer: 'Join our industry-leading Embedded System program and gain hands-on experience with cutting-edge technologies.',
            image: img1
        },
        {
            question: 'Overview of the Embedded Systems Course',
            answer: "At Adventure Learning, our Embedded Systems course teaches you practical skills to build and work with everyday technology like microcontrollers and sensors. Through hands-on projects, you'll learn how to create reliable embedded systems step by step, whether you're starting fresh or have some experience.",
            image: img2
        },
        {
            question: 'Best Embedded Systems Courses Online and Offline',
            answer:
                " We offer flexible Embedded Systems courses available both online and offline. Whether you need virtual flexibility or hands-on campus sessions, we’ve got you covered.",
            image: img3
        },
        {
            question: 'Why Choose Adventure Learning for the Embedded Systems Programming Course',
            answer:
                "Our experienced instructors take a practical, hands-on approach with real-world projects to equip you with in-demand embedded system skills.",
            image: img4
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
        const handleImageLoad = (index) => {
        setImagesLoaded(prev => ({...prev, [index]: true}));
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="text-center mb-16">
                <h4 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4 tracking-tight leading-snug">
                    Advanced Embedded Systems Certification Course
                </h4>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                <h4 className="font-normal text-lg text-gray-600 max-w-2xl mx-auto">
                    Kickstart your tech career with our Complete Advanced Embedded System
                </h4>
            </div>

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
                                className={`w-full h-64 md:h-80 rounded-xl object-cover shadow-lg ${!imagesLoaded[index] ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
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

export default EmbeddedOver;