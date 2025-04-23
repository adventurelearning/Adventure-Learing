import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const itemsPerPage = 6;

function Coursecard() {
    const cards = [
        { title: "Full Stack Development: Master the Art of Building Web Applications", image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1745383886~exp=1745387486~hmac=c6118a26228cf64c5315b23d73c202b12136a6ad2558f5de1276df513c1eb0f6&w=996", lesson: 6, students: 198, category: "Advanced" },
        { title: "Embedded Systems: From Basics to Advanced Applications", image: "https://img.freepik.com/free-photo/close-up-researcher-holding-chip_23-2148925507.jpg?t=st=1745383930~exp=1745387530~hmac=f2a4672a4752137f26b1064f565575ad1e4d11a8d66446f8215df49cfb5a6265&w=996", lesson: 21, students: 99, category: "Advanced" },
        { title: "Data Science: Mastering Data Analysis and Machine Learning", image: "https://media.istockphoto.com/id/2153308796/photo/scientist-working-with-business-data-finance-marketing-report-big-data-analytics-technology.jpg?s=612x612&w=0&k=20&c=wPF8Cm01hb2BLkYJ7hFLFvmPs96zGXPKYkZBzWnlXJo=", lesson: 33, students: 64, category: "Advanced" },
        { title: "Data Analytics: Unlocking Insights from Data", image: "https://img.freepik.com/premium-photo/auditor-accountant-audit-financial-data-accounting-record-documents-online-computer-report-company-taxation-planning-profitable-cash-flow-finance-analysis-account-management_562859-5602.jpg?uid=R164337686&ga=GA1.1.1279898111.1743062049&semt=ais_hybrid&w=740", lesson: 15, students: 215, category: "Advanced" },
        { title: "Cloud Computing: Building Scalable and Flexible Solutions", image: "https://media.licdn.com/dms/image/v2/D4E12AQF-rRl6ZspBeg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688453983937?e=2147483647&v=beta&t=vOUNVI8wuirtNybLB-MYsyPjYujzrkM1DSxYdJtJGz4", lesson: 6, students: 198, category: "Advanced" },
        { title: "Software Testing: Ensuring Quality and Reliability in Software Development", image: "https://img.freepik.com/premium-photo/midsection-software-developers-working-office_1048944-21568565.jpg?uid=R164337686&ga=GA1.1.1279898111.1743062049&semt=ais_hybrid&w=740", lesson: 15, students: 215, category: "Advanced" },
        { title: "MERN Stack: Full Stack JavaScript Development", image: "https://miro.medium.com/v2/resize:fit:768/1*jyvi6rdhEWdbKbybyuht9w.png", lesson: 33, students: 64, category: "Advanced" },
        { title: "Python Programming: From Fundamentals to Advanced Concepts", image: "https://miro.medium.com/v2/resize:fit:1400/1*GAhkb5R3_uJdkI2vbIut0w.jpeg", lesson: 6, students: 198, category: "Advanced" },
        { title: "Java Development: Object-Oriented Programming Mastery", image: "https://media.licdn.com/dms/image/v2/D4E12AQH6m3PPq9TRpA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710432211600?e=2147483647&v=beta&t=KiJlamdBoHj17vFSqXjoUxhU_osE-o_9CXc_WkJnzrM", lesson: 21, students: 99, category: "Advanced" },
        { title: "MEAN Stack: Building Modern Web Applications", image: "https://evincedev.com/blog/wp-content/uploads/2017/07/Mean-stack-technology.jpg", lesson: 15, students: 215, category: "Advanced" },
        { title: "Web Development Fundamentals: HTML, CSS, and JavaScript", image: "https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo", lesson: 6, students: 198, category: "Advanced" },
        { title: "Database Design and Management: SQL and NoSQL", image: "https://img.freepik.com/premium-photo/hand-business-professional-interacting-with-futuristic-sql-database-interface-digital-screen_464863-22405.jpg?w=1380", lesson: 15, students: 215, category: "Advanced" },
    ];

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCards = cards.slice(startIndex, endIndex);

    const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

    return (
        <div data-aos="zoom-in-up" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="courselist" >
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
                                <button onClick={() => navigate('/Register')} className="w-1/2 lg:w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-2 rounded-lg transition-all duration-300 flex items-center justify-center">
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
