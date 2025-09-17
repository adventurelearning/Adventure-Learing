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

const Embeddedsystem = () => {
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
  <title>Advanced Embedded Systems Certification Course – Online & Offline | Adventure Learning</title>
  <meta name="description" content="Master Embedded Systems & IoT at Adventure Learning, Coimbatore. Hands-on training with 100% placement support. Start your embedded career today!" />
  
  {/* Primary Keywords */}
  <meta name="keywords" content="
   Edge AI embedded systems .AI inference on edge devices .AI chips for embedded systems .Edge AI embedded systems course in Coimbatore .AI powered embedded systems training 
  " />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Embedded Systems Certification Course | Adventure Learning Coimbatore" />
  <meta property="og:description" content="Become certified in Embedded Systems with ARM, RTOS & IoT. Hands-on training with development kits and industry projects." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.adventurelearning.co.in/course/embedded-system" />
  <meta property="og:image" content="https://www.adventurelearning.co.in/assets/BanDesktop2-BiQWYf56.svg" />
  <meta property="og:image:alt" content="Embedded Systems Training with Hardware Kits" />
  <meta property="og:site_name" content="Adventure Learning" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Embedded Systems Certification | Adventure Learning" />
  <meta name="twitter:description" content="Professional Embedded Systems training with ARM, RTOS & IoT. Start your career in embedded engineering in 6 months!" />
  <meta name="twitter:image" content="https://www.adventurelearning.co.in/assets/BanDesktop2-BiQWYf56.svg" />
  <meta name="twitter:site" content="@AdventureLearn" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.adventurelearning.co.in/course/embedded-system" />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Advanced Embedded Systems Certification",
        "description": "Comprehensive Embedded Systems training covering ARM Microcontrollers, RTOS, IoT and Embedded Linux with hardware projects",
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
        <h3 className="text-2xl lg:w-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Embedded Systems Course Syllabus
        </h3>
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
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4   " />
        <Batch />
      </div>
      <div
        id="certificate"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Certificate
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4   " />
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
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4   " />
        <Review />
      </div>
    </>
  );
};

export default Embeddedsystem;
