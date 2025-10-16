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
import CourseFeatures from "../fullstack/CourseFeatures";
import SoftwareTestingCourse from "./SoftwareTestingCourse";

const Software_Testing = () => {
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
        <title>
          Software Testing Certification Course – Manual & Automation |
          Adventure Learning
        </title>
        <meta
          name="description"
          content="Advance your career with Software Testing Certification at Adventure Learning, Coimbatore. Learn Manual & Automation Testing with 100% placement support. Start your Software Testing career today!"
        />

        {/* Primary Keywords */}
        <meta
          name="keywords"
          content="
   Software Testing course in Coimbatore. Manual Testing and Automation Testing course . Software Testing with placement support . Top Automation Testing tools 2025 . Beginner to Advanced Software Testing course
  "
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Software Testing Certification | QA Engineer Course | Adventure Learning"
        />
        <meta
          property="og:description"
          content="4-month Software Testing training covering manual and automation testing (Selenium, JMeter). 80+ hours of hands-on testing projects."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.adventurelearning.co.in/course/software-testing"
        />
        <meta
          property="og:image"
          content="https://www.adventurelearning.co.in/assets/BanDesktop6-CYEe4v-X.svg"
        />
        <meta
          property="og:image:alt"
          content="Software Testing Certification Training"
        />
        <meta property="og:site_name" content="Adventure Learning" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="QA Engineer Certification | Software Testing Course"
        />
        <meta
          name="twitter:description"
          content="Become job-ready in 4 months with our Software Testing certification. Learn Selenium, JMeter, TestNG and build testing portfolio!"
        />
        <meta
          name="twitter:image"
          content="https://www.adventurelearning.co.in/assets/BanDesktop6-CYEe4v-X.svg"
        />
        <meta name="twitter:site" content="@AdventureLearn" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.adventurelearning.co.in/course/software-testing"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Software Testing Certification (Manual & Automation)",
        "description": "Comprehensive QA training covering manual testing, Selenium WebDriver, JMeter, TestNG and API testing with real projects",
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
          "endDate": "2028-02-28"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "category": "certificate"
        },
        "teaches": [
          "Manual Testing",
          "Selenium WebDriver",
          "JMeter",
          "TestNG",
          "API Testing",
          "Mobile Testing",
          "Test Automation",
          "Bug Tracking Systems"
        ]
      }
    `}
        </script>
      </Helmet>
      <Banner />
      <CourseFeatures/>
      <SoftwareTestingCourse/>
      <WhyChoose />
      <Navbar />
      <div
        id="course"
        className="container-fluid rounded-lg mx-auto  mt-3 bg-gray-100 shadow-lg "
      >
        <h1 className="text-2xl lg:text-3xl font-semibold  text-[#0057D3] p-3  text-center">
          Course Overview
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4 " />
        <CourseOverview />
      </div>
      <div id="trainer" className="container-fluid rounded mx-auto px-4">
        <h1 className="text-2xl lg:text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Trainer Profile
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <TrainerProfile />
      </div>

      <div id="syllabus">
        <h1 className="text-2xl lg:text-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Software Testing Course Syllabus
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <AccordionComponent />
        {/* <CourseSyllabus /> */}
      </div>

      <div
        id="batches"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Upcoming Batches
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4  " />
        <Batch />
      </div>
      <div
        id="certificate"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <h1 className="text-2xl lg:text-3xl font-semibold  text-center text-[#0057D3] p-6">
          Certificate
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4   " />
        <Certificate />
      </div>
      <div
        id="FAQ"
        className="container-fluid rounded shadow-lg my-2 mx-auto px-4 bg-slate-50"
      >
        <Faq />
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

export default Software_Testing;
