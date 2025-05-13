import React, { useState } from 'react';
import place1 from '../../assets/profile2.png';
import profile1 from '../../assets/alumini1.jpeg';
import profile2 from '../../assets/alumini2.jpeg';
import HiringCompanies from '../../components/HiringCompanies';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Placement = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= alumniData.length ? 0 : prevIndex + 4
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? alumniData.length - 4 : prevIndex - 4
    );
  };

  const alumniData = [
    {
      name: "Y.Innamul Hasan",
      company: "Digital Mantraaz...",
      image: profile1,
      previousRole: "Associate",
      currentRole: "Frontend Developer",
      CTC: "3 LPA",
      linkedIn: "https://www.linkedin.com/in/innamul-hasan-8663b82b8/",

    },
    {
      name: "A.Antony paulson",
      company: "Vee Healthtek",
      image: profile2,
      previousRole: "Associate",
      currentRole: "Quality Analyst",
      CTC: "5 LPA",
      linkedIn: "https://www.linkedin.com/in/",
    },
    {
      name: "Karthik M",
      company: "Amazon",
      image: profile2,
      previousRole: "Sales Executive",
      currentRole: "Backend Developer",
      CTC: "3 months",
      linkedIn: "https://www.linkedin.com/in/",
    },
    {
      name: "Deepa S",
      company: "Tech Mahindra",
      image: profile1,
      previousRole: "Customer Support",
      currentRole: "UI/UX Developer",
      CTC: "3 months",
      linkedIn: "https://www.linkedin.com/in/",
    },

  ];

  return (
    <>

      <Helmet>
        <title>Career Placement Success | Adventure Learning Alumni</title>
        <meta
          name="description"
          content="See how Adventure Learning alumni successfully transitioned to top tech roles with expert training and placement support."
        />
        <meta property="og:title" content="Career Success Stories at Adventure Learning" />
        <meta
          property="og:description"
          content="Explore real alumni journeys – from career transitions to jobs at Google, Microsoft, and more. Start your transformation today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adventurelearning.in/placement" />
        <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
        <meta property="og:image:alt" content="Career Placement at Adventure Learning" />
      </Helmet>
      <div className="">
        {/* Hero Section */}
        <div className="flex justify-center mb-6 md:mb-10 ">
          <div className="relative w-full overflow-hidden group">
            <img
              src={place1}
              alt="Career placement guidance"
              className="  w-full h-[350px] sm:h-[450px] md:h-[600px]  duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 rounded-xl md:rounded-2xl 
              flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16 lg:px-24">
              <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 transition-all duration-700 transform -translate-y-2 sm:-translate-y-4 group-hover:translate-y-0">
                Empowering Your <br />
                <span className="text-[#0057D3] bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 inline-block mt-1 sm:mt-2">
                  Career Transition
                </span>
              </h3>
              <p className="text-xs sm:text-lg md:text-xl lg:text-2xl max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                With our robust placement guidance and exclusive opportunities tailored to your career goals
              </p>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-b from-gray-900 to-black mt-[-40px] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-50"></div>
          </div>

          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left column */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  We would <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">love</span> to know you better
                </h1>
                <p className="text-gray-300 text-xl max-w-lg">
                  Unlock personalized recommendations tailored just for you by sharing your preferences
                </p>

              </div>

              {/* Right column */}
              <div className="space-y-8">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  Why Choose Adventure for Placement?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Card 1 */}
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 group">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-blue-400 mb-2">Resume Building</h4>
                    <p className="text-gray-300 text-sm">ATS-optimized resumes crafted to pass automated screening and impress recruiters</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-indigo-400/30 shadow-lg hover:shadow-indigo-500/20 transition-all duration-500 group">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-indigo-400 mb-2">Interview Prep</h4>
                    <p className="text-gray-300 text-sm">Realistic mock interviews with personalized feedback from industry veterans</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 group">
                    <div className="w-12 h-12 mb-4 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-cyan-400 mb-2">Live Projects</h4>
                    <p className="text-gray-300 text-sm">Hands-on experience with real-world projects mentored by industry experts</p>
                  </div>
                </div>

                   <div className="text-center pt-4">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 group transition-colors cursor-pointer"
                  >
                    Talk Our Experts
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 px-6 ">
          {[
            { value: "400+", label: "Hiring partners", sublabel: null },
            { value: "11+ years", label: "Excellence", sublabel: null },
            { value: "100%", label: "Interview Guidance", sublabel: null }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-6 md:p-8 rounded-lg sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100 hover:border-blue-100"
            >
              <div className="text-lg lg:text-4xl font-bold text-[#0057D3]">
                {stat.value}
              </div>
              <div className="text-base sm:text-xl text-gray-700 font-medium">{stat.label}</div>
              {stat.sublabel && (
                <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
              )}
              <div className="mt-2 sm:mt-4 h-1 w-12 sm:w-20 mx-auto bg-gradient-to-r from-blue-100 to-blue-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Alumni Section */}
        <div className="mt-8 md:mt-20 text-center max-w-4xl mx-auto px-2 sm:px-4">
          <h1 className="font-semibold text-lg sm:text-2xl lg:text-3xl mt-3 sm:mt-5 text-[#0057D3]">
            Our Alumni Journey
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-12">
            Discover how our graduates transformed their careers and achieved remarkable success through our comprehensive training and placement support
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="relative px-4 md:px-8 lg:px-12">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 lg:ml-[1px]  top-1/2 -translate-y-1/2 sm:ml-[80px] -translate-x-2 md:-translate-x-8 lg:-translate-x-12 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
            style={{ transform: 'translateY(-50%)' }} // Ensures consistent vertical centering
          >
            <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 py-4 md:py-6 lg:py-8">
              {alumniData.slice(currentIndex, currentIndex + 4).map((alumni, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  {/* Decorative elements (unchanged) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>

                  <div className="relative flex flex-col items-center">
                    {/* Avatar with glow effect */}
                    <div className="relative mb-3 md:mb-4">
                      <img
                        src={alumni.image}
                        alt={alumni.name}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 md:border-4 border-white shadow-sm md:shadow-md group-hover:border-blue-100 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                    </div>

                    {/* Name with subtle animation */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {alumni.name}
                    </h3>

                    {/* Company with logo effect */}
                    <p className="text-blue-600 font-semibold text-sm md:text-base mb-3 md:mb-4 flex items-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      {alumni.company}
                    </p>

                    {/* Details with improved layout */}
                    <div className="w-full space-y-2 md:space-y-3 bg-gray-50 rounded-md md:rounded-lg p-3 md:p-4 group-hover:bg-white transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs md:text-sm flex items-center">
                          <svg className="w-2 h-2 md:w-3 md:h-3 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Before:
                        </span>
                        <span className="font-medium text-gray-800 text-right text-xs md:text-sm">{alumni.previousRole}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs md:text-sm flex items-center">
                          <svg className="w-2 h-2 md:w-3 md:h-3 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          After:
                        </span>
                        <span className="font-medium text-gray-800 text-right text-xs md:text-sm">{alumni.currentRole}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-xs md:text-sm flex items-center">
                          <svg className="w-2 h-2 md:w-3 md:h-3 mr-1 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          CTC Package:
                        </span>
                        <span className="font-medium text-gray-800 text-xs md:text-sm">{alumni.CTC}</span>
                      </div>
                    </div>

                    {/* LinkedIn link */}
                    <a
                      href={alumni.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 md:mt-4 text-xs text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center hover:text-blue-700"
                    >
                      View journey
                      <svg className="w-2 h-2 md:w-3 md:h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 lg:mr-[1px] top-1/2 -translate-y-1/2 sm:mr-[80px] translate-x-2 md:translate-x-8 lg:translate-x-12 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
            style={{ transform: 'translateY(-50%)' }} // Ensures consistent vertical centering
          >
            <svg className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* hiring companies */}
        <HiringCompanies />

        {/* Reviews Section */}
        <div className="mt-6 sm:mt-10 mb-8 sm:mb-16 px-2 sm:px-4">
          <h1 className="font-semibold text-lg sm:text-2xl lg:text-3xl text-center mt-3 sm:mt-5 text-[#0057D3]">
            Voice Of Success
          </h1>
          <div className="relative overflow-hidden mt-4 sm:mt-6">
            <div className="flex gap-4 sm:gap-6 py-4 animate-marquee hover:pause">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 sm:gap-6 flex-nowrap">
                  {[
                    {
                      name: "Dhanya",
                      role: "Data Analytics",
                      review: "Great course on data analytics, covering data cleaning, visualization, and statistical analysis. Practical exercises enhance problem-solving skills effectively",
                      platform: "linkedin"
                    },
                    {
                      name: "Aruna Balaji",
                      role: "Python Developer",
                      review: "I studied the Python Automation Testing (PAT). My mentor and co-ordinator were really supportive. Special thanks to mentor Mr. Eshwar Srinivasan and co-ordinator Ms. Divya for being helpful...",
                      platform: "google"
                    },
                    {
                      name: "Gayathri",
                      role: "Full Stack Developer",
                      review: "Highly valid course, Really amazing mentors support, The entire learning path is so good, I have improved my python knowledge in codekata. I would suggest this course to all.",
                      platform: "google"
                    },
                                        {
                      name: "Karthik",
                      role: "Embedded system",
                      review: "Great course on embedded systems, covering microcontrollers, sensors, programming, and real-time applications. Hands-on projects improve practical skills significantly",
                      platform: "google"
                    },
                                        {
                      name: "Madhesh",
                      role: "Data Science",
                      review: "Excellent data science course covering Python, statistics, machine learning, and real-world projects. Great for beginners to build strong foundations.",
                      platform: "google"
                    },
                                        {
                      name: "Gokul",
                      role: "Cloud computing",
                      review: "Comprehensive cloud computing course covering AWS, Azure, deployment, security, and scalability. Hands-on labs offer valuable real-world experience",
                      platform: "google"
                    }
                  ].map((review, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex-none w-[260px] sm:w-[320px] md:w-[350px] bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 sm:p-6 border border-gray-100"
                    >
                      <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100">
                          {review.platform === 'linkedin' ? (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                              <path d="M23.766 12.2764c0-.9175-.07-1.7935-.2036-2.6401H12.24v4.9841h6.4757c-.2789 1.4976-.9349 2.7645-1.9991 3.6116v2.998h3.2376c1.8949-1.7406 2.9868-4.2985 2.9868-7.3897z" fill="#4285F4" />
                              <path d="M12.2401 24c2.7033 0 4.9592-.8958 6.6088-2.4289l-3.2376-2.998c-.8957.5979-2.0438.9519-3.3712.9519-2.5914 0-4.7863-1.7477-5.5689-4.0991H3.2478v3.0984C4.9557 21.2564 8.4051 24 12.2401 24z" fill="#34A853" />
                              <path d="M6.6712 15.4239c-.2001-.5979-.3138-1.2367-.3138-1.8956 0-.6588.1137-1.2976.3138-1.8956V8.5347H3.2478C2.4519 10.0168 2 11.6834 2 13.5283c0 1.8448.4519 3.5114 1.2478 4.9935l3.4234-3.0979z" fill="#FBBC05" />
                              <path d="M12.2401 5.5142c1.4608 0 2.7719.5028 3.8053 1.4894l2.8721-2.8721C17.0441 2.4558 14.7882 1.5599 12.2401 1.5599 8.4051 1.5599 4.9557 4.3035 3.2478 7.1001l3.4234 3.0984c.7826-2.3514 2.9775-4.0991 5.5689-4.0991z" fill="#EA4335" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{review.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{review.role}</p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{review.review}</p>
                      <div className="mt-2 sm:mt-4 flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="mt-8 sm:mt-16 md:mt-20 lg:mt-24 relative overflow-hidden px-2 sm:px-4">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-0 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-[#0057D3]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-[#00D749]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl text-center mb-3 sm:mb-6 text-[#0057D3]">
                Real Success Stories, <span className='text-black'>Real Impact</span>
              </h1>
              <p className="text-center text-xs sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Hear from our students about their transformative learning experiences
              </p>

              {/* Testimonials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
                {/* Testimonial Card 1 */}
                <div className="bg-white p-4 sm:p-8 rounded-lg sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#0057D3] flex items-center justify-center text-white font-bold text-sm sm:text-lg">JS</div>
                    <div className="ml-2 sm:ml-4">
                      <h4 className="font-semibold text-sm sm:text-lg">Janani Selvi</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Full Stack Development</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-2 sm:mb-4 text-xs sm:text-base">"The program completely transformed my career. I went from no tech background to a data analyst role in just 6 months!"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white p-4 sm:p-8 rounded-lg sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#00D749] flex items-center justify-center text-white font-bold text-sm sm:text-lg">MA</div>
                    <div className="ml-2 sm:ml-4">
                      <h4 className="font-semibold text-sm sm:text-lg">Madhan</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Web Development Program</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-2 sm:mb-4 text-xs sm:text-base">"The hands-on projects gave me the confidence to start freelancing immediately after completing the course."</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="bg-white p-4 sm:p-8 rounded-lg sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#0057D3] flex items-center justify-center text-white font-bold text-sm sm:text-lg">TP</div>
                    <div className="ml-2 sm:ml-4">
                      <h4 className="font-semibold text-sm sm:text-lg">Thilaka Priya</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Embedded System Course</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-2 sm:mb-4 text-xs sm:text-base">"Very useful embedded systems course. Learned about Arduino, UART, I2C, SPI, and C programming. Practical sessions were engaging and insightful."</p>
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-gray-300" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -z-10 w-full top-1/4">
            <div className="flex justify-between items-center opacity-10">
              <div className="w-12 h-12 sm:w-20 sm:h-20 bg-[#00D749] rounded-xl rotate-12 animate-float"></div>
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-[#0057D3] rounded-xl -rotate-12 animate-float animation-delay-2000"></div>
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#00D749] rounded-xl rotate-45 animate-float animation-delay-4000"></div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Placement;