import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NewsandBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(id);
  };

  const blogs = [
    {
      id: '/article1',
      category: "General",
      date: "03 Apr 2025",
      readTime: "33 min read",
      title: "6 Trending Courses Online in 2025: Top Benefits and How To Pick One!",
      excerpt: "Offering a wide range of courses that cater to various interests and career goals...",
      author: "Admin",
      image: "https://img.freepik.com/free-vector/distance-course-isometric_98292-7151.jpg?t=st=1746011696~exp=1746015296~hmac=aff588ea42eb3a326cd910d5e865cb7bab05a2ca4cbc02010b1044b88efe3083&w=826"
    },
    {
      id: '/article2',
      category: "Technology",
      date: "02 Apr 2025",
      readTime: "25 min read",
      title: "A Growing Demand for Full-Stack Developers",
      excerpt: "The future of education is evolving to equip students with essential skills...",
      author: "Admin",
      image: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1746011321~exp=1746014921~hmac=80927d422088be2e88b9eb75d490ce973f4735df1d6ca7f31bd580ba7384b3b2&w=740"
    },
    {
      id: '/article3',
      category: "Business",
      date: "01 Apr 2025",
      readTime: "18 min read",
      title: "Adaptability with Technology: A Key Skill for Remote Work in 2025",
      excerpt: "As remote work becomes more widespread, the ability to adapt to new technologies...",
      author: "Admin",
      image: "https://img.freepik.com/free-vector/telecommuting-concept-illustration_52683-36259.jpg?t=st=1746011853~exp=1746015453~hmac=1459626ebfbaa2e3ffc98bf20aa79cdb909f08b4a114a9ab73afe303ddee5a96&w=996"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <div 
      data-aos="fade-up" 
      data-aos-anchor-placement="top-bottom" 
      className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8 py-6"
    >
      {/* Blog Card - Fixed height on desktop, auto on mobile */}
      <div
        className="relative bg-white rounded-lg overflow-hidden flex flex-col md:flex-row transition-all duration-300 h-auto md:h-[300px]"
        style={{
          boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Image Section - Fixed aspect ratio */}
        <div className="md:w-1/3 w-full h-48 md:h-full relative">
          <img
            src={blogs[currentIndex].image}
            alt="Blog cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section - Flex grow to fill remaining space */}
        <div className="md:w-2/3 w-full p-4 sm:p-6 flex flex-col">
          <div className="flex-grow">
            <div className="flex flex-wrap items-center text-xs text-gray-500 mb-2 gap-x-2">
              <span>{blogs[currentIndex].category}</span>
              <span>|</span>
              <span>{blogs[currentIndex].date}</span>
              <span>|</span>
              <span>{blogs[currentIndex].readTime}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
              {blogs[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {blogs[currentIndex].excerpt}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <span className="text-xs text-gray-600">
                  {blogs[currentIndex].author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-sm text-gray-800">{blogs[currentIndex].author}</span>
            </div>
            <button 
              onClick={() => handleClick(blogs[currentIndex].id)} 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium text-right sm:text-left"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      {blogs.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-4 sm:left-0 top-1/2 -translate-y-1/2 bg-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Previous article"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-4 sm:right-0 top-1/2 -translate-y-1/2 bg-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Next article"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
        <div>
          <p className="text-black text-lg sm:text-xl lg:text-2xl font-semibold">Explore Blog's</p>
        </div>
        <div>
          <Link
            to="/blogs"
            className="inline-block bg-white border border-blue-600 text-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition duration-300 text-center"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsandBlog;