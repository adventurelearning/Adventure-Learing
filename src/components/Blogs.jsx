

import React, { useState, useEffect } from 'react';

const ArticleCard = ({ category, title, author, date, readTime, imageSrc, link }) => (
  <div className="bg-white rounded-md p-3 shadow-md overflow-hidden">
    <a href={link} className="block">
      {imageSrc && <img src={imageSrc} className="w-full h-auto" />}
      <div className="p-4">
        <div className="uppercase text-xs text-gray-500 font-semibold mb-1">{category}</div>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <div className="mt-4  items-center text-gray-600 text-xs ">
          {author && <span>By {author}</span>}
          <p>{date} | <span>{readTime}</span></p>
        </div>
      </div>
    </a>
  </div>
);

const SidebarLink = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex items-center w-full mt-3 mb-3 px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-md group"
  >
    <span
      className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4"
    >
      <span
        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
      ></span>
    </span>
    <span
      className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-ml-4 group-hover:-mb-4"
    >
      <span
        className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
      ></span>
    </span>
    <span
      className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-600 rounded-md group-hover:translate-x-0"
    ></span>
    <span
      className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >
      {label}
    </span>
  </button>
);

const Blogs = () => {
  const [selectedTopic, setSelectedTopic] = useState('fullstack'); // Default selected topic is IoT

  const BlogsAll = [{
    blog: 'IOT', card: [
      {
        category: 'IOT EVOLUTION',
        title: 'The Future of IoT: Emerging Trends and Technologies...',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '37 min read',
        imageSrc: '        https://cdn.pixabay.com/photo/2021/05/30/21/47/dots-6297146_1280.jpg',
        link: '#',
      },      
      {
        category: 'HEALTHCARE EVOLUTION',
        title: 'How IoT is Transforming Healthcare [2025]',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '10 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2021/05/25/07/28/woman-6281625_1280.jpg',
        link: '#',
      },
      {
        category: 'Urban IoT Solutions',
        title: 'Smart Cities: The Role of IoT in Urban Development...',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2023/03/13/15/21/iot-7850194_1280.jpg',
        link: '#',
      },
      {
        category: 'Data-Driven IoT',
        title: 'IoT and the Role of Big Data Analytics',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540923_1280.jpg',
        link: '#',
      },
      {
        category: 'Next-Gen IoT',
        title: '5G and IoT: How Next-Generation Networks Will Impact the IoT Landscape',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2017/04/10/07/57/processor-2217771_1280.jpg',
        link: '#',
      },
      {
        category: 'IoT Trust with Blockchain',
        title: 'Future of Blockchain in IoT Security',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2020/12/18/15/45/chain-5842371_1280.jpg',             
        link: '#',
      }]
  },
  {
    blog: 'fullstack', card: [
      {
        category: 'Full Stack Surge',
        title: 'The Rise of Full Stack Development in 2025',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '37 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829735_1280.jpg',
        link: '#',
      },      
      {
        category: 'Development Revolution',
        title: 'How Full Stack Developers are Revolutionizing Web App Development',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '10 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg',
        link: '#',
      },
      {
        category: 'Development Trends',
        title: 'The Future of Full Stack Development: Trends You...',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2023/09/24/15/52/ai-generated-8273245_1280.jpg',
        link: '#',
      },
      {
        category: 'Scalable Solutions',
        title: 'Why Full Stack Development is the Key to Scalable Web Solutions',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779036_1280.jpg',
        link: '#',
      },
      {
        category: 'Web App Basics',
        title: 'Building Modern Web Apps with Full Stack Development: A Beginner’s Guide',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_960_720.jpg',
        link: '#',
      },
      {
        category: 'Developer Demand',
        title: 'Why Companies are Prioritizing Full Stack Developers in 2025',
        author: 'Adventure Learning',
        date: '04 Apr 2025',
        readTime: '7 min read',
        imageSrc: 'https://cdn.pixabay.com/photo/2024/06/14/12/15/developer-8829711_1280.jpg',             
        link: '#',
      }]
  },

  {
    "blog": "embeddedsystem",
    card: [
      {
        "category": "Embedded Systems in Automation",
        "title": "The Future of Embedded Systems in Industrial Automation",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "37 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2023/04/27/21/25/circuit-7955446_1280.png",
        "link": "#"
      },
      {
        "category": "Embedded Systems in Healthcare",
        "title": "How Embedded Systems are Revolutionizing Medical Devices [2025]",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "10 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2025/02/25/04/54/ai-generated-9429545_1280.jpg",
        "link": "#"
      },
      {
        "category": "Embedded Systems in Robotics",
        "title": "Embedded Systems: The Heart of Advanced Robotics",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2023/05/07/07/03/ai-generated-7975810_1280.jpg",
        "link": "#"
      },
      {
        "category": "IoT and Embedded Systems",
        "title": "How Embedded Systems Power IoT Devices",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_1280.jpg",
        "link": "#"
      },
      {
        "category": "Embedded Systems for Consumer Electronics",
        "title": "Embedded Systems in the Next Generation of Consumer Electronics",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2021/02/06/10/39/network-5987759_1280.jpg",
        "link": "#"
      },
      {
        "category": "Embedded Systems in Security",
        "title": "Ensuring Security in Embedded Systems: Best Practices",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": " https://cdn.pixabay.com/photo/2024/01/26/08/06/ai-generated-8533600_1280.jpg",
        "link": "#"
      }
    ]
  }, {
    blog: "datascience",
    card: [
      {
        "category": "Data Science in Healthcare",
        "title": "How Data Science is Transforming Healthcare [2025]",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "37 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540912_1280.jpg",
        "link": "#"
      },
      {
        "category": "AI and Machine Learning",
        "title": "The Future of AI and Machine Learning in Data Science",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "10 min read",
        "imageSrc": " https://cdn.pixabay.com/photo/2024/08/03/20/10/ai-generated-8942972_1280.jpg",
       
        "link": "#"
      },
      {
        "category": "Data Science in Finance",
        "title": "How Data Science is Revolutionizing the Finance Industry",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2023/10/27/22/15/technology-8346311_1280.png",
        "link": "#"
      },
      {
        "category": "Big Data Analytics",
        "title": "The Role of Big Data Analytics in Data Science",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/10/01/15/54/ai-generated-9088888_1280.jpg",
        "link": "#"
      },
      {
        "category": "Data Science for Business",
        "title": "Leveraging Data Science for Business Growth",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540917_1280.jpg",
        "link": "#"
      },
      {
        "category": "Data Visualization",
        "title": "The Power of Data Visualization in Data Science",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2023/02/08/08/50/frequency-wave-7776034_1280.jpg",
        "link": "#"
      }
    ]
  }, {
    blog: "cloudcomputing",
    card: [
      {
        "category": "Cloud Infrastructure",
        "title": "The Future of Cloud Infrastructure: Trends and Innovations",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "37 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540922_1280.jpg",
        "link": "#"
      },
      {
        "category": "Cloud Security",
        "title": "How Cloud Security is Evolving in 2025",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "10 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2018/11/28/10/45/cloud-3843352_1280.jpg",
        "link": "#"
      },
      {
        "category": "Cloud for Business",
        "title": "Maximizing Efficiency: Cloud Computing for Business Growth",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2017/01/22/22/11/cloud-computing-2001090_1280.jpg",
        "link": "#"
      },
      {
        "category": "Hybrid Cloud Solutions",
        "title": "The Rise of Hybrid Cloud Solutions: A Game Changer",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg",
        "link": "#"
      },
      {
        "category": "Cloud for Developers",
        "title": "Cloud Computing for Developers: Best Practices and Tools",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2018/07/14/11/33/earth-3537401_1280.jpg",
        "link": "#"
      },
      {
        "category": "Cloud Automation",
        "title": "Leveraging Cloud Automation for Business Efficiency",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2022/04/04/16/24/waves-7111758_1280.jpg",
        "link": "#"
      }
    ]
  }, {
    "blog": "dataanalytics",
    "card": [
      {
        "category": "Data Analytics in Business",
        "title": "How Data Analytics is Shaping Modern Business Strategies",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "37 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2023/10/09/07/23/industry-8303482_960_720.jpg",
        "link": "#"
      },
      {
        "category": "Big Data Analytics",
        "title": "Harnessing Big Data Analytics for Competitive Advantage",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "10 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/05/14/05/38/technology-8760347_1280.jpg",
        "link": "#"
      },
      {
        "category": "Predictive Analytics",
        "title": "The Power of Predictive Analytics in Decision Making",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2021/03/19/12/13/man-6107416_1280.png",
        "link": "#"
      },
      {
        "category": "Data Visualization",
        "title": "The Role of Data Visualization in Analytics",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2023/09/28/07/25/technology-8280863_1280.jpg",
        "link": "#"
      },
      {
        "category": "Real-Time Analytics",
        "title": "How Real-Time Data Analytics is Transforming Industries",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/05/27/21/26/desk-8792352_1280.png",
        "link": "#"
      },
      {
        "category": "Data Analytics Tools",
        "title": "Top Data Analytics Tools for 2025: What's Next?",
        "author": "Adventure Learning",
        "date": "04 Apr 2025",
        "readTime": "7 min read",
        "imageSrc": "https://cdn.pixabay.com/photo/2024/02/28/17/16/ai-generated-8602502_1280.jpg",
        "link": "#"
      }
    ]
  }
  ];

  const sidebarLinks = [
    { label: 'Full Stack', onClick: () => setSelectedTopic('fullstack') },
    { label: 'Internet of Things', onClick: () => setSelectedTopic('IOT') },   
    { label: 'Embedded System', onClick: () => setSelectedTopic('embeddedsystem') },
    { label: 'Data Science', onClick: () => setSelectedTopic('datascience') },
    { label: 'Cloud Computing', onClick: () => setSelectedTopic('cloudcomputing') },
    { label: 'Data Analytics', onClick: () => setSelectedTopic('dataanalytics') },
  ];

  // Find the selected blog cards based on the selected topic
  const selectedBlogCards = BlogsAll.find(blog => blog.blog === selectedTopic)?.card || [];

  return (
    <div className="bg-gradient-to-b from-blue-200 to-white py-8 md:py-10 rounded-md text-center px-4">
      <h2 data-aos="fade-down" data-aos-delay="100" className="text-2xl md:text-3xl font-semibold text-[#0057D3] mb-4">
        Discover Trending Blog Categories
      </h2>
      <p data-aos="fade-down" data-aos-delay="200" className="text-gray-600 text-base mb-6 md:mb-8">
        Explore the top blog categories, trends, and insights to enhance your knowledge
      </p>
      <div data-aos="fade-right" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-blue-100 w-full p-5 rounded-md shadow-md">
              <div className="py-3 px-2 flex items-center justify-between text-gray-800 font-semibold">
                Latest Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="border-t border-gray-200">
                {sidebarLinks.map((link, index) => (
                  <SidebarLink key={index} label={link.label} onClick={link.onClick} />
                ))}
              </div>
            </div>
          </div>

          {/* Article Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedBlogCards.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
