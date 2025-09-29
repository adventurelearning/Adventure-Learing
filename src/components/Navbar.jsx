import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo-dark.svg";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    courses: false,
    corporate: false,
    resources: false,
    Certificates: false
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

  const isActiveLink = (path) => {
    return location.pathname === path ? "text-[#0057D3] font-semibold" : "";
  };

  return (
    <nav className="sticky top-0 left-0 z-50 bg-white text-black px-4 py-1 font-poppins flex items-center justify-between shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]">
      {/* Logo (left) */}
      <div className="text-4xl font-semibold flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-40 object-contain moblogo-img block lg:hidden"
          />
        </Link>
      </div>

      {/* Desktop Nav Links (centered) */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 font-sans text-[15px] font-medium text-gray-700">
        <ul className="flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              className={`hover:text-[#0057D3] transition-colors duration-200 py-2 ${isActiveLink("/")}`}
            >
              Home
            </Link>
          </li>

          {/* Courses Dropdown */}
          <li className="relative group">
            {/* Main Dropdown Trigger */}
            <button className="hover:text-[#0057D3] flex items-center transition-colors duration-200 py-2">
              Courses
              <FaChevronDown className="ml-2 text-xs group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {/* First-level Dropdown */}
            <ul className="absolute z-50 text-sm bg-white mt-0 py-3 w-56 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li className="relative group/item">
                {/* Recommended Courses with right arrow */}
                <span className="flex justify-between items-center px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] cursor-pointer text-gray-600">
                  Recommended Courses
                  <FaChevronRight className="ml-2 text-xs" />
                </span>

                {/* Second-level Dropdown */}
                <ul className="absolute left-full top-0 ml-1 z-50 text-sm bg-white py-3 w-56 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-300">
                  <li>
                    <Link
                      to="/course/full-stack-development"
                      className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/course/full-stack")}`}
                    >
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/embedded-system"
                      className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/course/embedded-system")}`}
                    >
                      Embedded System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/data-science"
                      className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/course/data-science")}`}
                    >
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/data-analytics"
                      className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/course/data-analytics")}`}
                    >
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/cloud-computing"
                      className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/course/cloud-computing")}`}
                    >
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course/software-testing"
                      className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/course/software-testing")}`}
                    >
                      Software Testing
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Other links */}
          <li>
            <Link
              to="/onlinetraining"
              className={`hover:text-[#0057D3] transition-colors duration-200 py-2 ${isActiveLink("/onlinetraining")}`}
            >
              OnlineTraining
            </Link>
          </li>

          {/* Corporate Dropdown */}
          <li className="relative group">
            <button className="hover:text-[#0057D3] flex items-center transition-colors duration-200 py-2">
              Corporate
              <FaChevronDown className="ml-2 text-xs group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-0 py-3 w-48 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/Corporate" className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/Corporate")}`}
                >
                  Corporate Training
                </Link>
              </li>
            </ul>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group">
            <button className="hover:text-[#0057D3] flex items-center transition-colors duration-200 py-2">
              Resources
              <FaChevronDown className="ml-2 text-xs group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-0 py-3 w-48 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/Blogs" className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/Blogs")}`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <button className="hover:text-[#0057D3] flex items-center transition-colors duration-200 py-2">
              Certificates
              <FaChevronDown className="ml-2 text-xs group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-0 py-3 w-48 rounded-lg shadow-xl border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/downloadcertificate" className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/Blogs")}`}
                >
                  Download e-Certificate
                </Link>
              </li>
              <li>
                <Link to="/verifycertificate" className={`block px-4 py-3 hover:bg-blue-50 hover:text-[#0057D3] transition-colors text-gray-600 ${isActiveLink("/Blogs")}`}
                >
                  Certificates Verify
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/contact"
              className={`hover:text-[#0057D3] transition-colors duration-200 py-2 ${isActiveLink("/contact")}`}
            >
              ContactUs
            </Link>
          </li>
        </ul>
      </div>

      {/* register buttons for desktop - Now hidden on tablet (md) */}
      <div className="hidden lg:flex">
        {/* <Link
          to="/Register"
          className="border hover:border-blue-700 text-[14px] bg-[#0057D3] f hover:text-[#0057D3] px-4 py-2 ml-20 md:ml-96 lg:ml-0 lg:px-5 lg:py-2 hover:bg-white text-white hover:border rounded-md  lg:rounded-lg font-poppins cursor-pointer text-center transition-colors duration-300"
        >
          Register
        </Link> */}
        <Link
          to="/Register"
          className="register-button hidden lg:inline-block px-5 py-1 rounded-lg text-base  font-poppins text-white border border-transparent transition-all"
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
                resources: false,
                Certificates: false
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
                    to="/course/full-stack-development"
                    className={`block py-2 ${isActiveLink("/course/full-stack-development")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Full Stack Development
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
                {/* <li>
                  <Link
                    to="/placement"
                    className={`block py-3 ${isActiveLink("/placement")}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Alumini Success Journey
                  </Link>
                </li> */}
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

          <li className="border-b border-gray-100">
            <div
              className="flex justify-between items-center py-3 cursor-pointer"
              onClick={() => toggleMobileDropdown('Certificates')}
            >
              <span>Certificate</span>
              {mobileDropdowns.Certificates ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </div>

            {mobileDropdowns.Certificates && (
              <ul className="pl-4 pb-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/verifycertificate"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Verify Certificate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/downloadcertificate"
                    className="block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Download e-Certificate
                  </Link>
                </li>
              </ul>
            )}
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;