import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaBookOpen, FaIdCard, FaFolderOpen, FaBuilding } from 'react-icons/fa';
import logo from "../assets/AL white Logo.svg";

// Mock logo since the original is an asset import
const Logo = () => (
  <svg width="150" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.2114 2.82717C20.3061 1.25885 21.6521 0.0528656 23.2307 0.158564L35.617 0.963496C36.8521 1.04403 37.7669 2.15234 37.7669 3.41432V38.0305H1.41162V3.41432C1.41162 2.15234 2.32635 1.04403 3.56149 0.963496L15.9478 0.158564C17.5264 0.0528656 18.8724 1.25885 18.9672 2.82717L20.2114 2.82717Z" fill="white" />
    <rect x="5.14355" y="4.14502" width="28.9839" height="30.7303" rx="1.5" fill="#0057D3" />
    <path d="M72.2886 16.5919L64.4449 19.4971L56.7118 16.5919L64.4449 13.6867L72.2886 16.5919Z" fill="white" />
    <path d="M84.582 18.258L84.1438 18.0673L76.9209 15.3082L76.9209 23.2384L84.582 26.1436L84.582 18.258ZM85.0202 18.4487V26.3813L92.2431 29.1384V21.2082L85.0202 18.4487ZM75.8755 23.755L75.8755 14.8029L68.8037 17.6593L68.8037 26.6114L75.8755 23.755Z" fill="white" />
    <path d="M129.567 18.5911V26.3986L137.289 29.3038V21.4963L129.567 18.5911ZM138.334 29.5073V21.6094L146.056 18.7042V26.6021L138.334 29.5073ZM128.522 26.6021L128.522 18.7042L120.789 15.799L120.789 23.6965L128.522 26.6021Z" fill="white" />
    <path d="M149.334 26.9691V18.7505L141.611 15.8453V24.064L149.334 26.9691ZM140.567 15.6453L140.567 23.964L132.845 27.0691V18.7505L140.567 15.6453Z" fill="white" />
    <path d="M112.556 19.3406V27.5593L120.278 30.6644V22.4458L112.556 19.3406ZM121.322 30.8644V22.5458L129.045 19.6406V27.9593L121.322 30.8644Z" fill="white" />
    <path d="M111.511 27.7593V19.5406L103.789 16.4355V24.6542L111.511 27.7593ZM102.745 16.2355V24.5542L95.0223 27.6593V19.3406L102.745 16.2355Z" fill="white" />
  </svg>
);

const Header = () => {
  const messages = [
    "Master Full Stack skills and land high-paying SDE roles.",
    "Build real-world IoT & Embedded projects and launch your core tech career.",
    "Learn AI, ML & Deep Learning to secure top Data Science jobs.",
    "Turn data into insights — become an industry-ready Data Analyst.",
    "Master AWS, DevOps & Cloud to power your global tech career.",
    "Learn Manual + Automation Testing and kickstart your QA journey.",
  ];

  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeMegaMenu, setActiveMegaMenu] = useState("Youth");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Courses for search
  const courses = [
    { name: "Full Stack Development", path: "/course/full-stack-development" },
    { name: "Embedded System", path: "/course/embedded-system" },
    { name: "Data Science", path: "/course/data-science" },
    { name: "Data Analytics", path: "/course/data-analytics" },
    { name: "Cloud Computing", path: "/course/cloud-computing" },
    { name: "Software Testing", path: "/course/software-testing" },
  ];

  // ✅ New data structure for mega-menu based on the image
  const megaMenuItems = [
    {
      name: "Courses",
      icon: <FaBookOpen className="w-5 h-5 text-gray-500" />,
      sections: [
        {
          title: "Recomended Courses",
          links: [
            { name: "Full Stack Development", path: "/course/full-stack-development" },
            { name: "Embedded System", path: "/course/embedded-system" },
            { name: "Data Science", path: "/course/data-science" },
            { name: "Data Analytics", path: "/course/data-analytics" },
            { name: "Cloud Computing", path: "/course/cloud-computing" },
            { name: "Software Testing", path: "/course/software-testing" },
          ]

        },
        {
          title: "Learning Resources",
          links: [
            { name: "Online / Offline Assessment", path: "/Register" },
            { name: "Course Enquiry", path: "/contact" },
          ],
        },
      ],
    },
    {
      name: "Student Credentials",
      icon: <FaIdCard className="w-5 h-5 text-gray-500" />,
      sections: [
        {
          title: "Student Certificates",
          description: "Access and verify your certificates online quickly and securely.",
          links: [
            { name: "Download e-Certificate", path: "/downloadcertificate" },
            { name: "Verify Certificate", path: "/verifycertificate" },
          ],
        }

      ],
    },
    {
      name: "Resources",
      icon: <FaFolderOpen className="w-5 h-5 text-gray-500" />,
      sections: [
        {
          title: "Course Blogs",
          description: "Read insights, guides, and updates on different courses and career paths.",
          links: [
            { name: "All Blogs", path: "/blogs" },
            { name: "Technology Blogs", path: "/blogs/technology" },
            { name: "Management Blogs", path: "/blogs/management" },
            { name: "Education & Career Blogs", path: "/blogs/education" },
          ],
        },
      ],
    },
    {
      name: "Corporate",
      icon: <FaBuilding className="w-5 h-5 text-gray-500" />,
      sections: [
        {
          title: "Corporate Training",
          description: "Programs delivered for your training needs.",
          links: [
            { name: "Corporate Training", path: "/corporate" },
            { name: "Contact Us", path: "/contact" },
          ],
        },
      ],
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredCourses([]);
    } else {
      const results = courses.filter((course) =>
        course.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(results);
    }
  }, [query]);

  const handleSelect = (path) => {
    setQuery("");
    setFilteredCourses([]);
    navigate(path);
  };

  const isActiveLink = (path) => {
    return window.location.pathname === path ? "text-[#0057D3] font-semibold" : "";
  };

  const activeCategory = megaMenuItems.find(item => item.name === activeMegaMenu);

  return (
    <header className="hidden  lg:flex text-white py-2 px-4 items-center bg-gradient-to-r from-[#0057D3] to-[#2171e2] justify-between relative">
      {/* LEFT - Logo & Explore */}
      <div
        className="text-4xl font-semibold flex items-center relative group"
        ref={dropdownRef}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-40 lg:w-40 object-contain logo-img"
          />
        </Link>

        {/* Explore button */}
        <button className="border flex items-center font-sans border-white py-2 sm:px-3 md:ml-10 lg:ml-10 rounded-md font-medium text-sm hover:bg-white hover:text-[#0057D3] transition duration-300">
          EXPLORE
          <FaChevronDown className="ml-2 text-xs transition-transform duration-200 group-hover:rotate-180" />
        </button>

        {/* Mega-menu container - show on hover */}
        <div className="absolute left-0 top-14 min-w-[900px] bg-white text-gray-800 shadow-2xl rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 p-6">
          <div className="flex">
            {/* Left column: Main categories */}
            <div className="w-1/4 border-r pr-6 border-gray-200">
              <h3 className="font-semibold text-2xl text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-1">
                {megaMenuItems.map((item) => (
                  <li
                    key={item.name}
                    onMouseEnter={() => setActiveMegaMenu(item.name)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${activeMegaMenu === item.name ? "bg-blue-100 text-[#0057D3]" : "hover:bg-blue-50 hover:text-[#0057D3]"
                      }`}
                  >
                    {item.icon}
                    <span className="font-medium text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column: Dynamic content based on active category */}
            <div className="w-3/4 pl-6 grid grid-cols-2 gap-6">
              {activeCategory &&
                activeCategory.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-2xl text-gray-900 mb-3 pb-2 border-b">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            to={link.path}
                            className={`block py-1 rounded hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 text-sm ${isActiveLink(link.path)}`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT - Search */}
      <div className="flex items-center space-x-2 relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=""
            className="px-3 py-3.5 pr-10 border border-gray-300 rounded focus:outline-none text-black h-4 transition-all duration-500 w-64 ring-1 ring-blue-300 focus:placeholder:opacity-0 text-sm"
          />
          <div className="typing-placeholder absolute left-3 top-1/2 -translate-y-2.5 text-gray-400 pointer-events-none overflow-hidden whitespace-nowrap">
            <span className="typing-animation text-sm">Search for courses</span>
          </div>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search dropdown */}
        {filteredCourses.length > 0 && (
          <ul className="absolute top-14 left-0 w-56 z-50 bg-white text-black rounded-lg shadow-lg">
            {filteredCourses.map((course, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(course.path)}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100"
              >
                {course.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
