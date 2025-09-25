import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/AL white Logo.svg";

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
  const navigate = useNavigate();

  // ✅ course data
  const courses = [
    { name: "Full Stack Development", path: "/course/full-stack-development" },
    { name: "Embedded System", path: "/course/embedded-system" },
    { name: "Data Science", path: "/course/data-science" },
    { name: "Data Analytics", path: "/course/data-analytics" },
    { name: "Cloud Computing", path: "/course/cloud-computing" },
    { name: "Software Testing", path: "/course/software-testing" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // ✅ search filtering
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

  return (
    <header className="hidden lg:flex  text-white py-2 px-6 items-center bg-gradient-to-r from-[#0057D3] to-[#2171e2] justify-between">
      {/* LEFT - Rotating message */}
      <p
        key={index}
        className="text-lg font-poppins animate-slide whitespace-nowrap [word-spacing:0.25rem]"
      >
        {messages[index]}
      </p>

      {/* RIGHT - Search */}
      <div className="flex items-center space-x-2 relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=""
            className="px-3 py-3.5 pr-10 border border-gray-300 rounded-full focus:outline-none text-black h-4 transition-all duration-500 w-56 ring-1 ring-blue-300 focus:placeholder:opacity-0"
          />
          <div className="typing-placeholder absolute left-3 top-1/2 -translate-y-3.5 text-gray-400 pointer-events-none overflow-hidden whitespace-nowrap">
            <span className="typing-animation">Search for courses</span>
          </div>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        {/* ✅ Dropdown results */}
        {filteredCourses.length > 0 && (
          <ul className="absolute top-14 left-0 w-56 z-50 bg-white text-black rounded-lg shadow-lg ">
            {filteredCourses.map((course, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(course.path)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
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
