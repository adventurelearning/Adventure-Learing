import React, { useState } from 'react';
import card1 from '../assets/card1.jpeg';
import { useNavigate } from 'react-router-dom';


const NewsandBlog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate= useNavigate()

   const handleClick = (id) => {
    navigate(id); // Navigate to the course page with the given ID
  };

  // Sample blog data
  const blogs = [
    {
      id:'/article1',
      category: "General",
      date: "03 Apr 2025",
      readTime: "33 min read",
      title: "6 Trending Courses Online in 2025: Top Benefits and How To Pick One!",
      excerpt: "offering a wide range of courses that cater to various interests and career goals. Whether you're looking to upskill, change careers, or explore a new field, the top trending courses provide valuable opportunities to expand your knowledge.",
      author: "Admin",
      image: card1
    },
    {
      id:'/article2',
      category: "Technology",
      date: "02 Apr 2025",
      readTime: "25 min read",
      title: " A Growing Demand for Full-Stack Developers",
      excerpt: "The future of education is evolving to equip students with essential skills for building dynamic web applications. Full-stack development will play a key role, fostering innovation and preparing students for high-demand tech careers across diverse industries globally.",
      author: "Admin",
      image: card1
    },
    {
      id: '/article3',
      category: "Business",
      date: "01 Apr 2025",
      readTime: "18 min read",
      title: "Adaptability with Technology: A Key Skill for Remote Work in 2025",
      excerpt: "As remote work becomes more widespread, the ability to adapt to new and evolving technologies is critical for success. In 2025, remote workers will need to stay ahead of the curve in terms of tech tools and platforms, as companies increasingly rely on digital solutions to maintain productivity and communication.",
      author: "Admin",
      image: card1
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  return (
    <div className="lg:max-w-6xl mx-auto relative  p-5 ">
      {/* Single Card Container */}
      <div
        className="relative bg-white rounded-lg overflow-hidden flex flex-col md:flex-row transition-all duration-300"
        style={{
          boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        {/* Left Image Section */}
        <div className="md:w-1/3 w-full h-48 md:h-auto relative">
          <img
            src={blogs[currentIndex].image}
            alt="Blog cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold text-white">upGrad's</h3>
              <p className="text-lg text-white">Career Advice</p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="md:w-2/3 w-full p-4 md:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <span>{blogs[currentIndex].category}</span>
              <span className="mx-2">|</span>
              <span>{blogs[currentIndex].date}</span>
              <span className="mx-2">|</span>
              <span>{blogs[currentIndex].readTime}</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              {blogs[currentIndex].title}
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              {blogs[currentIndex].excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <span className="text-xs text-gray-600">
                  {blogs[currentIndex].author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-sm text-gray-800">{blogs[currentIndex].author}</span>
            </div>
            <button onClick={() => handleClick(blogs[currentIndex].id)}  className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {blogs.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2   bg-blue-500 rounded-full p-2 shadow-lg hover:bg-gray-400 transition-colors "
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2  bg-blue-500 rounded-full p-2 shadow-lg hover:bg-gray-400 transition-colors "
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {blogs.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className='flex items-center space-x-4 mt-4 lg:mt-0'>
        <div>
          <p className='text-black text-lg lg:text-2xl  font-semibold'>Explore Blog's</p>
        </div>
        <div>
          <button className="bg-white border border-[#0057D3] text-[#0057D3] px-5 py-2 rounded-md font-semibold hover:bg-[#0057D3] hover:text-white transition duration-300">
            <a href='/blogs'>Show More</a>
          </button>
        </div>
      </div>
    </div >
  );
};

export default NewsandBlog;