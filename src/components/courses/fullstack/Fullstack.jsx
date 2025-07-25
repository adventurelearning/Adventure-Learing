import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Banner from "./Banner";
import CourseOverview from "./CourseOverview";
import AccordionComponent from "./AccordionComponent";
import TrainerProfile from "./TrainerProfile";
import CourseSyllabus from "./CourseSyllabus";
import Batch from "./Batch";
import Certificate from "../Certificate";
import Review from "../Review";
import WhyChoose from "./WhyChoose";
import Faq1 from "./Faq1";

const Fullstack = () => {
  const { courseId } = useParams();

  useEffect(() => {
    // Delay scroll to allow layout/content to fully load
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100); // you can increase this to 200–300ms if needed

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <>
     <Helmet>
  <title>Full Stack Web Development Certification – MERN Stack Course | Adventure Learning</title>
  <meta 
    name="description" 
    content="Become a Full Stack Developer in 6 months with our MERN stack course in Coimbatore. Learn React, Node.js, MongoDB with real projects and placement support. Enroll now!" 
  />
  
  {/* Primary Keywords */}
  <meta name="keywords" content="
    full stack development course in Coimbatore,
    MERN stack certification Tamil Nadu,
    React.js training program,
    Node.js developer course,
    MongoDB database training,
    full stack web development,
    frontend backend course,
    web developer certification,
    JavaScript full stack course,
    full stack developer internship,
    Adventure Learning coding courses,
    web development placement program,
    full stack with React and Node,
    Express.js framework training,
    REST API development course,
    online full stack classes,
    offline coding bootcamp,
    software development career course
  " />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Full Stack Developer Certification | MERN Stack Course | Adventure Learning" />
  <meta property="og:description" content="6-month Full Stack Developer training with MERN stack (React, Node, MongoDB). 100+ hours of hands-on projects with industry mentorship." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.adventurelearning.co.in/course/full-stack-development" />
  <meta property="og:image" content="https://www.adventurelearning.co.in/assets/BanDesktop1-sxNQvGmv.svg" />
  <meta property="og:image:alt" content="Full Stack Developer MERN Stack Training" />
  <meta property="og:site_name" content="Adventure Learning" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Full Stack Developer Course | MERN Stack Training" />
  <meta name="twitter:description" content="Become job-ready in 6 months with our Full Stack Developer certification. Learn React, Node.js, MongoDB and build portfolio projects!" />
  <meta name="twitter:image" content="https://www.adventurelearning.co.in/assets/BanDesktop1-sxNQvGmv.svg" />
  <meta name="twitter:site" content="@AdventureLearn" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.adventurelearning.co.in/course/full-stack-development" />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Full Stack Web Development Certification (MERN Stack)",
        "description": "Comprehensive training in React.js, Node.js, Express.js and MongoDB with real-world projects and portfolio development",
        "provider": {
          "@type": "Organization",
          "name": "Adventure Learning",
          "sameAs": "https://www.adventurelearning.co.in"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "offline"],
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "India"
            }
          },
          "startDate": "2023-11-01",
          "endDate": "2024-04-30"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "category": "certificate"
        },
        "teaches": [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "JavaScript ES6+",
          "Git/GitHub"
        ]
      }
    `}
  </script>
</Helmet>
      <Banner />
      <WhyChoose />
      <Navbar />
      <div
        id="course"
        className="container-fluid rounded-lg mx-auto  bg-gray-100 shadow-lg "
      >
        <h1 className="text-2xl lg:w-3xl lg:text-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Course Overview
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4 " />
        <CourseOverview />
      </div>
      <div id="trainer" className="container-fluid rounded mx-auto px-4">
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Trainer Profile
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <TrainerProfile />
      </div>
      <div id="syllabus" className="bg-blue-50">
        <h3 className="text-2xl lg:w-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Full Stack Web Development Course Syllabus
        </h3>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <AccordionComponent />
      </div>
      <div
        id="batches"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Upcoming Batches
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4" />
        <Batch />
      </div>
      <div
        id="certificate"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Certificate
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <Certificate />
      </div>
      <div
        id="FAQ"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <Faq1 />
      </div>
      <div
        id="review"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Our learners Thought
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <Review />
      </div>
    </>
  );
};

export default Fullstack;
