// SecondaryNavbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const NavbarLinks = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current && !dropdownRefs.current.some(ref => ref && ref.contains(event.target))) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(prevState => (prevState === index ? null : index));
  };

  const isActiveLink = (path) => location.pathname === path ? "text-white font-semibold" : "text-white";

  return (
    <header className="flex  text-white py-3 px-6 h-14 justify-start items-center bg-[#0057D3] sticky top-0 ">
      <div className="flex space-x-6 justify-center">
        <ul className="flex space-x-12">
          <li>
            <Link
              to="/"
              className={`transition-transform duration-300 transform hover:-translate-y-1 ${isActiveLink("/")}`}
            >
              Home
            </Link>
          </li>

          {/* Courses Dropdown */}
          <li className="relative group">
            <button className="flex items-center">
              Courses
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {/* First-level Dropdown */}
            <ul className="absolute z-50 text-sm bg-white mt-2 w-56 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 text-black">
              <li className="relative group/item">
                {/* Recommended Courses with right arrow */}
                <span className="flex justify-between items-center px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] cursor-pointer">
                  Recommended Courses
                  <FaChevronRight className="ml-2 text-xs" />
                </span>

                {/* Second-level Dropdown */}
                <ul className="absolute left-full top-0 ml-1 z-50 text-sm bg-white py-2 w-56 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-300">
                  <li>
                    <Link
                      to="/course/full-stack-development"
                      className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/full-stack")}`}
                    >
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/embedded-system"
                      className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/embedded-system")}`}
                    >
                      Embedded System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/data-science"
                      className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/data-science")}`}
                    >
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/data-analytics"
                      className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/data-analytics")}`}
                    >
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/cloud-computing"
                      className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/cloud-computing")}`}
                    >
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/software-testing"
                      className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/software-testing")}`}
                    >
                      Software Testing
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Online Training */}
          <li>
            <Link
              to="/onlinetraining"
              className={`hover:text-white ${isActiveLink("/onlinetraining")}`}
            >
              Online Training
            </Link>
          </li>

          {/* Corporate Dropdown */}
          <li className="relative group">
            <button className="flex items-center">
              Corporate
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 text-black">
              <li>
                <Link to="/Corporate" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/Corporate")}`}
                >
                  Corporate Training
                </Link>
              </li>
            </ul>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group">
            <button className="flex items-center ">
              Resources
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 text-black">
              <li>
                <Link to="/Blogs" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/Blogs")}`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link
              to="/contact"
              className={`hover:text-white ${isActiveLink("/contact")}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavbarLinks;