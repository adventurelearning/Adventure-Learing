import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const BlogsAll = [
    {
      blog: 'softwaretesting',
      card: [
        {
          category: 'IOT EVOLUTION',
          title: 'The Future of IoT: Emerging Trends and Technologies...',
          author: 'Adventure Learning',
          date: '04 Apr 2025',
          readTime: '37 min read',
          imageSrc: 'https://cdn.pixabay.com/photo/2021/05/30/21/47/dots-6297146_1280.jpg',
          link: '1',
        },
      ],
    },
    {
      blog: 'fullstack',
      card: [
        {
          category: 'Full Stack Surge',
          title: 'The Rise of Full Stack Development in 2025 Update',
          author: 'Adventure Learning',
          date: '04 Apr 2025',
          readTime: '37 min read',
          imageSrc: 'https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829735_1280.jpg',
          link: '2',
        },
      ],
    },
    {
      blog: 'embeddedsystem',
      card: [
        {
          category: 'Embedded Systems in Automation',
          title: 'The Future of Embedded Systems in Industrial Automation',
          author: 'Adventure Learning',
          date: '04 Apr 2025',
          readTime: '37 min read',
          imageSrc: 'https://cdn.pixabay.com/photo/2023/04/27/21/25/circuit-7955446_1280.png',
          link: '3',
        },
      ],
    },
    {
      blog: 'datascience',
      card: [
        {
          category: 'Data Science in Healthcare',
          title: 'How Data Science is Transforming Healthcare [2025]',
          author: 'Adventure Learning',
          date: '04 Apr 2025',
          readTime: '37 min read',
          imageSrc: 'https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540912_1280.jpg',
          link: '4',
        },
      ],
    },
    {
      blog: 'cloudcomputing',
      card: [
        {
          category: 'Cloud Infrastructure',
          title: 'The Future of Cloud Infrastructure: Trends and Innovations',
          author: 'Adventure Learning',
          date: '04 Apr 2025',
          readTime: '37 min read',
          imageSrc: 'https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540922_1280.jpg',
          link: '5',
        },
      ],
    },
    {
      blog: 'dataanalytics',
      card: [
        {
          category: 'Data Analytics in Business',
          title: 'How Data Analytics is Shaping Modern Business Strategies',
          author: 'Adventure Learning',
          date: '04 Apr 2025',
          readTime: '37 min read',
          imageSrc: 'https://cdn.pixabay.com/photo/2023/10/09/07/23/industry-8303482_960_720.jpg',
          link: '6',
        },
      ],
    },
  ];

  // Flatten all the cards from all blogs into a single array
  const allCards = BlogsAll.flatMap(blog => blog.card);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-white py-8 md:py-10 rounded-md text-center px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0057D3] mb-4">
        Discover Trending Blog Categories
      </h2>
      <p className="text-gray-600 text-base mb-6 md:mb-8">
        Explore the top blog categories, trends, and insights to enhance your knowledge
      </p>

      {/* Blog Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allCards.map((card, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
            <img src={card.imageSrc} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <span className="text-sm text-blue-600 font-semibold">{card.category}</span>
              <h3 className="text-lg font-bold mt-2">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                By {card.author} · {card.date} · {card.readTime}
              </p>
              <div className="flex items-center">
              <Link to={`subblogs/${card.link}`} className="text-blue-500 mt-3 inline-flex items-center font-bold hover:underline">
    Read More
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
      </svg>
    </span>
  </Link>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
