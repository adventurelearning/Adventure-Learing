import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-dark.svg";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    courses: false,
    corporate: false,
    resources: false
  });
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

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns(prevState => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };

  const isActiveLink = (path) => location.pathname === path ? "text-[#0057D3] font-semibold" : "text-black";

  return (
    <nav className="bg-white text-black px-4 py-2 font-sans flex items-center justify-between sticky top-0 left-0 w-full z-50 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]">
      {/* Logo */}
      <div className="text-4xl font-semibold flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-40 lg:w-32 lg:h-16 xl:w-40 xl:h-14 2xl:w-56 2xl:h-16 object-contain logo-img"
          />
        </Link>
      </div>

      {/* Desktop Nav Links - Now hidden on tablet (md) */}
      <div className="hidden lg:flex space-x-6 justify-center">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className={`transition-transform duration-300 transform hover:-translate-y-1 hover:text-[#0057D3] ${isActiveLink("/")}`}
            >
              Home
            </Link>
          </li>

          {/* Courses Dropdown */}
          <li className="relative group">
            <button className="hover:text-[#0057D3] flex items-center">
              Courses
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/course/full-stack" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/full-stack")}`}
                >
                  Full Stack
                </Link>
              </li>
              <li>
                <Link to="/course/embedded-system" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/embedded-system")}`}
                >
                  Embedded System
                </Link>
              </li>
              <li>
                <Link to="/course/data-science" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/data-science")}`}
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/course/data-analytics" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/data-analytics")}`}
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/course/cloud-computing" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/cloud-computing")}`}
                >
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="/course/software-testing" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/course/software-testing")}`}
                >
                  Software Testing
                </Link>
              </li>
            </ul>
          </li>
          {/* Other links */}
          <li>
            <Link
              to="/onlinetraining"
              className={`hover:text-[#0057D3] ${isActiveLink("/onlinetraining")}`}
            >
              Online Training
            </Link>
          </li>

          {/* Corporate Dropdown */}
          <li className="relative group">
            <button className="hover:text-[#0057D3] flex items-center">
              Corporate
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
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
            <button className="hover:text-[#0057D3] flex items-center ">
              Resources
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/Blogs" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${isActiveLink("/Blogs")}`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-[#0057D3] ${isActiveLink("/contact")}`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* register buttons for desktop - Now hidden on tablet (md) */}
      <div className="flex space-x-2  lg:flex">
        <Link
          to="/Register"
          className="border hover:border-blue-700 text-[14px] bg-[#0057D3] hover:text-[#0057D3] px-4 py-2 ml-20 lg:ml-0 lg:px-5 lg:py-3 hover:bg-white text-white hover:border rounded-md  lg:rounded-3xl font-semibold cursor-pointer text-center transition-colors duration-300"
        >
          Register
        </Link>
      </div>

      {/* Hamburger Icon - Now visible from tablet (md) up to desktop (lg) */}
      <div className="lg:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      {/* Mobile Nav Links - Now visible from tablet (md) */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } z-50 shadow-lg overflow-y-auto`}
      >

        
        <div className="flex justify-between items-center px-4 py-4">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-40 h-auto object-contain logo-img"
              />
            </Link>
        
          <FaTimes
            className="text-2xl cursor-pointer text-gray-700"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setMobileDropdowns({
                courses: false,
                corporate: false,
                resources: false
              });
            }}
          />
        </div>

        <ul className="space-y-2 text-base px-6 text-gray-800 ">
          <li>
            <Link
              to="/"
              className={`block py-3 ${isActiveLink("/")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* Mobile Courses Dropdown */}
          <li className="border-b border-gray-100">
            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => toggleMobileDropdown('courses')}
            >
              <span>Courses</span>
              {mobileDropdowns.courses ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </div>
            {mobileDropdowns.courses && (
              <ul className="pl-4 pb-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/course/full-stack"
                    className={`block py-2 ${isActiveLink("/course/full-stack")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Full Stack
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/embedded-system"
                    className={`block py-2 ${isActiveLink("/course/embedded-system")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Embedded System
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/data-science"
                    className={`block py-2 ${isActiveLink("/course/data-science")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/data-analytics"
                    className={`block py-2 ${isActiveLink("/course/data-analytics")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/cloud-computing"
                    className={`block py-2 ${isActiveLink("/course/cloud-computing")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/software-testing"
                    className={`block py-2 ${isActiveLink("/course/software-testing")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Software Testing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/onlinetraining"
              className={`block py-3 ${isActiveLink("/onlinetraining")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Online Training
            </Link>
          </li>

          {/* Mobile Corporate Dropdown */}
          <li className="border-b border-gray-100">
            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => toggleMobileDropdown('corporate')}
            >
              <span>Corporate</span>
              {mobileDropdowns.corporate ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </div>
            {mobileDropdowns.corporate && (
              <ul className="pl-4 pb-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/Corporate"
                    className={`block py-2 ${isActiveLink("/Corporate")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Corporate Training
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Mobile Resources Dropdown */}
          <li className="border-b border-gray-100">
            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => toggleMobileDropdown('resources')}
            >
              <span>Resources</span>
              {mobileDropdowns.resources ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </div>
            {mobileDropdowns.resources && (
              <ul className="pl-4 pb-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/blogs"
                    className={`block py-2`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/contact"
              className={`block py-3 ${isActiveLink("/contact")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;