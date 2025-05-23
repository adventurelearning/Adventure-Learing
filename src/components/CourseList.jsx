import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

const itemsPerPage = 6;

function Coursecard() {
    const cards = [
        {
            title: "Full Stack Development: Master the Art of Building Web Applications",
            image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1746001116~exp=1746004716~hmac=25dd0af523b2b07e4a1cce9be78769e9526f7b6dbd85cb69489f2bacdd651063&w=996",
            lesson: 6,
            students: 198,
            category: "Advanced"
        },
        {
            title: "Embedded Systems: From Basics to Advanced Applications",
            image: "https://img.freepik.com/free-photo/motherboard-background_23-2151733800.jpg?t=st=1746004070~exp=1746007670~hmac=db894979c90bf02b02362907252b3044d4c85bbf2dba90e91e449ff437059905&w=1380",
            lesson: 21,
            students: 99,
            category: "Advanced"
        },
        {
            title: "Data Science: Mastering Data Analysis and Machine Learning",
            image: "https://img.freepik.com/free-photo/man-is-working-computer-with-graph-screen_23-2151929046.jpg?t=st=1746004171~exp=1746007771~hmac=c810f5a2d8559ead31220d467f8d02d942f67080c9446b5aa64ac55fa86c94c0&w=1060",
            lesson: 33,
            students: 64,
            category: "Advanced"
        },
        {
            title: "Data Analytics: Unlocking Insights from Data",
            image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?t=st=1746002849~exp=1746006449~hmac=7fc701f5b775cade81adc6e1673d4880c47b6a045f31fddf9870a5c239422377&w=996",
            lesson: 15,
            students: 215,
            category: "Advanced"
        },
        {
            title: "Cloud Computing: Building Scalable and Flexible Solutions",
            image: "https://www.draegan.com/content/images/2021/08/YT-Cloud-Computing-2.png",
            lesson: 6,
            students: 198,
            category: "Advanced"
        },
        {
            title: "Software Testing: Ensuring Quality and Reliability in Software Development",
            image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg?t=st=1746004873~exp=1746008473~hmac=7c0046167b279d4a586a8793c1f1a0dee02f7c0296d5f5baaa13d291e50e0f88&w=996",
            lesson: 15,
            students: 215,
            category: "Advanced"
        },
        {
            title: "Python Programming: From Fundamentals to Advanced Concepts",
            image: "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2019/10/Python-programming-india.jpg",
            lesson: 6,
            students: 198,
            category: "Advanced"
        },
        {
            title: "Java Development: Object-Oriented Programming Mastery",
            image: "https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp",
            lesson: 21,
            students: 99,
            category: "Advanced"
        },
        {
            title: "MERN Stack: Full Stack JavaScript Development",
            image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1",
            lesson: 33,
            students: 64,
            category: "Advanced"
        },
        {
            title: "MEAN Stack: Building Modern Web Applications",
            image: "https://www.mindinventory.com/blog/wp-content/uploads/2023/02/advantages-of-choosing-MEAN-stack-for-web-development-project.webp",
            lesson: 15,
            students: 215,
            category: "Advanced"
        },
        {
            title: "Web Development Fundamentals: HTML, CSS, and JavaScript",
            image: "https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo",
            lesson: 6,
            students: 198,
            category: "Advanced"
        },
        {
            title: "Database Design and Management: SQL and NoSQL",
            image: "https://media.istockphoto.com/id/1401158747/photo/panoramic-view-of-multiple-database-is-placed-on-relational-database-tables-concept-of.jpg?s=612x612&w=0&k=20&c=UohzWyXiCls5F7VYwvWr-7lg_MWl9eRCVifCcdP0VWI=",
            lesson: 15,
            students: 215,
            category: "Advanced"
        }
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
        <div data-aos="zoom-in-up" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="courselist">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-3">Explore Our Courses</h2>
                <p className="text-lg font-normal text-gray-600 max-w-2xl mx-auto">
                    Join our popular classes and gain valuable knowledge to advance your career
                </p>
            </div>

            {/* Course Cards */}
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

            {/* Pagination */}
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
