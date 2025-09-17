import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Navbar";
import Banner from "./Banner";
import CourseOverview from "./CourseOverview";
import AccordionComponent from "./AccordionComponent";
import TrainerProfile from "./TrainerProfile";
import CourseSyllabus from "./CourseSyllabus";
import Batch from "./Batch";
import Certificate from "../Certificate";
import Review from "../Review";
import { Helmet } from "react-helmet";
import WhyChoose from "./WhyChoose";
import Faq from "./Faq";

const Dataanalytics = () => {
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
  <title>Advanced Data Analytics Certification Course – Online & Offline | Adventure Learning</title>
  <meta name="description" content="Build a career in Data Analytics with Adventure Learning, Coimbatore. Learn Excel, SQL, Python & BI tools with real projects. Start your data analytics career today!" />
  
  {/* Primary Keywords */}
  <meta name="keywords" content="
    Data Analytics course in Coimbatore .Best Data Analytics training institute in Tamil Nadu .Python for Data Analytics course Coimbatore . Affordable Data . Hands-on Data Analytics projects for beginners .Excel and Power BI training with Data Analytics
  " />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Data Analytics Certification Course | Adventure Learning Coimbatore" />
  <meta property="og:description" content="Become a certified data analyst with our comprehensive training in Python, SQL, Tableau & Power BI. Hands-on projects with real datasets." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.adventurelearning.co.in/course/data-analytics" />
  <meta property="og:image" content="https://www.adventurelearning.co.in/assets/BanDesktop4-Bwbmsjsp.svg" />
  <meta property="og:site_name" content="Adventure Learning" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Data Analytics Certification | Adventure Learning" />
  <meta name="twitter:description" content="Professional data analytics training with Python, SQL & BI tools. Start your career as a data analyst in 6 months!" />
  <meta name="twitter:image" content="https://www.adventurelearning.co.in/assets/BanDesktop4-Bwbmsjsp.svg" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.adventurelearning.co.in/course/data-analytics" />

  {/* Structured Data (JSON-LD) - Recommended Addition */}
 <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Advanced Data Analytics Certification",
        "description": "Comprehensive data analytics training covering Python, SQL, Tableau and Power BI with real-world projects",
        "provider": {
          "@type": "Organization",
          "name": "Adventure Learning",
          "sameAs": "https://www.adventurelearning.co.in"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          }
        }
      }
    `}
  </script>
</Helmet>
      <Banner />
      <WhyChoose />
      <Navbar />
      <div
        id="course"
        className="container-fluid rounded-lg mx-auto  mt-3 bg-gray-100 shadow-lg "
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Course Overview
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <CourseOverview />
      </div>
      <div id="trainer" className="container-fluid rounded mx-auto px-4">
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Trainer Profile
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4   " />
        <TrainerProfile />
      </div>

      <div
        id="syllabus"
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Data Analytics Course Syllabus
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <AccordionComponent />
        {/* <CourseSyllabus /> */}
      </div>

      <div
        id="batches"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Upcoming Batches
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
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
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50" >
        <Faq />
      </div>
      <div
        id="review"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Our learners Thought
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <Review />
      </div>
    </>
  );
};

export default Dataanalytics;
