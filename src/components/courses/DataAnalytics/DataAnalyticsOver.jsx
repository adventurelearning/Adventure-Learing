import React, { useState } from 'react'
import img1 from '../../../assets/img/da1.webp'
import img2 from '../../../assets/img/da2.webp'
import img3 from '../../../assets/img/da3.webp'
import img4 from '../../../assets/img/da4.webp'
import EnquiryForm from '../EnquiryForm'

const DataAnalyticsOver = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
     const [imagesLoaded, setImagesLoaded] = useState({});

    const courseContent = [
        {
            question: 'Unlock Your Potential with Our Data Analytics Course',
            answer:
                'Join our industry-leading Data Analytics program and gain hands-on experience with cutting-edge technologies.',
            image: img1,
        },
        {
            question: 'Overview of the Data Analytics Course',
            answer:
                "At Adventure Learning, our Data Analytics course teaches you the practical skills you need to work with data, analyze it, and derive meaningful insights. Through hands-on projects, you'll learn to work with tools and techniques used by professionals in the field, whether you're new to the subject or looking to expand your knowledge.",
            image: img2,
        },
        {
            question: ' Best Data Analytics Courses Online and Offline',
            answer:
                "At Adventure Learning, we offer the best Data Analytics courses, available both online and offline, designed to suit your learning style. Whether you prefer the flexibility of online learning or the hands-on experience of classroom sessions, our course will equip you with the skills to become a data analytics expert.",
            image: img3,
        },
        {
            question: 'Why Choose Adventure Learning for the Data Analytics Training',
            answer:
                " At Adventure Learning, we focus on a hands-on, practical approach to learning Data Analytics. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the data analytics industry.",
            image: img4,
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
                    Advanced Data Analytics Certification Course
                </h4>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                <h4 className="font-normal text-lg text-gray-600 max-w-2xl mx-auto">
                    Kickstart your tech career with our Complete Advanced Data Analytics
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

export default DataAnalyticsOver;