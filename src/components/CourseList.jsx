import React, { useState } from "react";
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.jpeg';
import card5 from '../assets/card5.jpeg';
import card6 from '../assets/card6.jpeg';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const itemsPerPage = 6;

function Coursecard() {
    const cards = [
        { title: "Full Stack Development: Master the Art of Building Web Applications", image: card1, lesson: 6, students: 198, category: "Beginner" },
        { title: "Embedded Systems: From Basics to Advanced Applications", image: card2, lesson: 21, students: 99, category: "Advanced" },
        { title: "Data Science: Mastering Data Analysis and Machine Learning", image: card3, lesson: 33, students: 64, category: "Beginner" },
        { title: "Data Analytics: Unlocking Insights from Data", image: card4, lesson: 15, students: 215, category: "Beginner" },
        { title: "Cloud Computing: Building Scalable and Flexible Solutions", image: card5, lesson: 6, students: 198, category: "Beginner" },
        { title: "Software Testing: Ensuring Quality and Reliability in Software Development", image: card6, lesson: 15, students: 215, category: "Beginner" },
        { title: "Python Programming: From Fundamentals to Advanced Concepts", image: card1, lesson: 6, students: 198, category: "Beginner" },
        { title: "Java Development: Object-Oriented Programming Mastery", image: card2, lesson: 21, students: 99, category: "Advanced" },
        { title: "MERN Stack: Full Stack JavaScript Development", image: card3, lesson: 33, students: 64, category: "Beginner" },
        { title: "MEAN Stack: Building Modern Web Applications", image: card4, lesson: 15, students: 215, category: "Beginner" },
        { title: "Web Development Fundamentals: HTML, CSS, and JavaScript", image: card5, lesson: 6, students: 198, category: "Beginner" },
        { title: "Database Design and Management: SQL and NoSQL", image: card6, lesson: 15, students: 215, category: "Beginner" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);

    const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" >
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-3">Explore Our Courses</h2>
                <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto">
                    Join our popular classes and gain valuable knowledge to advance your career
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-5xl mx-auto p-5 lg:p-0">
                {currentCards.map((card, index) => (
                    <div key={index} className="group">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                                    {card.category}
                                </div>
                            </div>
                            <div className="p-5 flex-grow">
                                <h3 className="font-semibold text-base mb-3 line-clamp-2">{card.title}</h3>
                                <div className="flex flex-wrap gap-3 text-sm text-gray-500 ">
                                    <div className="flex items-center">
                                        <i className="bi bi-journal-bookmark-fill text-blue-500 mr-1"></i>
                                        <span>{card.lesson} Lessons</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="bi bi-people-fill text-blue-500 mr-1"></i>
                                        <span>{card.students} Students</span>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <button className="w-1/2 lg:w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                                    Start Course
                                    <i className="bi bi-chevron-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-12 space-x-2">
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg flex items-center ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                    >
                        <BiChevronLeft className="text-xl" />
                        <span className="ml-1">Previous</span>
                    </button>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNumber;
                        if (totalPages <= 5) {
                            pageNumber = i + 1;
                        } else if (currentPage <= 3) {
                            pageNumber = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                            pageNumber = totalPages - 4 + i;
                        } else {
                            pageNumber = currentPage - 2 + i;
                        }
                        
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className={`px-4 py-2 rounded-lg ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {totalPages > 5 && currentPage < totalPages - 2 && (
                        <span className="px-2 py-2">...</span>
                    )}

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg flex items-center ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'}`}
                    >
                        <span className="mr-1">Next</span>
                        <BiChevronRight className="text-xl" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Coursecard;