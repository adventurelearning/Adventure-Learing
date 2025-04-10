import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import course1 from '../assets/course1.jpg';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png';
import course5 from '../assets/course5.png';
import course6 from '../assets/course6.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Coursecard = () => {
  const cards = [
    {id:"full-stack", title: "Full Stack Development: Art of Building Web Applications", image: course4, lesson: 6, students: 198, category: "Beginner" },
    {id:"embedded-system", title: "Embedded Systems: From Basics to Advanced Applications", image: course2, lesson: 21, students: 99, category: "Advanced" },
    {id:"data-science", title: "Data Science: Mastering Data Analysis and Machine Learning", image: course3, lesson: 33, students: 64, category: "Beginner" },
    {id:"data-analytics", title: "Data Analytics: Unlocking Insights from Data", image: course5, lesson: 15, students: 215, category: "Beginner" },
    {id:"cloud-computing", title: "Cloud Computing: Building Scalable and Flexible Solutions", image: course6, lesson: 6, students: 198, category: "Beginner" },
    {id:"software-testing", title: "Software Testing: Quality and Reliability in Software Development", image: "https://img.freepik.com/premium-photo/concept-testing-technology-internet-networking_220873-12407.jpg?w=1060", lesson: 15, students: 215, category: "Beginner" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = window.innerWidth < 640 ? 1 : 4; // Adjust based on screen size
  const navigate = useNavigate();


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
  const handleClick = (id) => {
    navigate(`/course/${id}`); // Navigate to the course page with the given ID
  };

  return (
    <div className="relative overflow-hidden px-5">
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
            <div className="bg-white border border-1 border-gray-300 rounded-lg items-center overflow-hidden text-left shadow-md p-3">
              <img src={card.image} alt={card.title} className="w-full object-cover rounded-lg" />
              <div className="p-3">
                <h3 className="text-base font-semibold mb-2">{card.title}</h3>
                <div className="flex items-center  text-gray-500 font-semibold mb-3 space-x-2 text-xs">
                  <div className="flex items-center">
                    <i className="bi bi-journal-bookmark-fill text-sm"></i>:
                    <span className="ml-1">Lesson:{card.lesson}</span>
                  </div>
                  <div className="flex items-center"><i className="bi bi-person-fill text-sm"></i>:
                    <span className="ml-1">Students:{card.students}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="bi bi-trophy-fill text-sm"></i>:
                    <span className="ml-1">{card.category}</span>
                  </div>
                </div>
                <div className="flex flex-col-2 sm:flex-row gap-2 sm:gap-4 mt-3 items-center">
                  <button onClick={() => handleClick(card.id)} className="bg-blue-600 border text-sm font-semibold border-white text-white px-3 py-2 rounded-md  hover:border-[#0057D3] hover:bg-white hover:text-blue-600 transition duration-300">
                    Start Course
                    <i className="bi bi-chevron-right ml-1 text-base"></i>
                  </button>

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
  );
};

export default Coursecard;