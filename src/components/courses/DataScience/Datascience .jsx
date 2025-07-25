import React,{useEffect} from "react";
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

const Datascience  = () => {
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
  <title>Advanced Data Science Certification Course – Online & Offline | Adventure Learning</title>
  <meta name="description" content="Master Data Science with Python, ML & AI in Coimbatore. 6-month certification with real projects, industry mentorship, and placement assistance. Enroll now!" />
  
  {/* Primary Keywords */}
  <meta name="keywords" content="
    data science course in Coimbatore,
    best data science certification Tamil Nadu,
    machine learning course,
    AI training program,
    Python for data science,
    data scientist certification,
    advanced analytics course,
    big data training,
    data science internship,
    Adventure Learning data courses,
    artificial intelligence classes,
    predictive modeling course,
    statistical analysis training,
    data science with R programming,
    online data science classes,
    offline data science training center,
    data science placement program,
    scikit-learn and TensorFlow training
  " />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Data Science Certification Course | Adventure Learning Coimbatore" />
  <meta property="og:description" content="Become a certified Data Scientist with Python, Machine Learning & AI training. 100+ hours of hands-on projects with industry datasets." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.adventurelearning.co.in/course/data-science" />
  <meta property="og:image" content="https://www.adventurelearning.co.in/assets/BanDesktop3-B_c6pLOB.svg" />
  <meta property="og:site_name" content="Adventure Learning" />
  <meta property="og:locale" content="en_IN" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Data Science Certification | Adventure Learning" />
  <meta name="twitter:description" content="Professional Data Science training with Python, ML & AI. Start your career as Data Scientist in 6 months with placement support!" />
  <meta name="twitter:image" content="https://www.adventurelearning.co.in/assets/BanDesktop3-B_c6pLOB.svg" />
  <meta name="twitter:site" content="@AdventureLearn" />

  {/* Canonical */}
  <link rel="canonical" href="https://www.adventurelearning.co.in/course/data-science" />

  {/* Structured Data (JSON-LD) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Advanced Data Science Certification",
        "description": "Comprehensive Data Science training covering Python, Machine Learning, AI and Big Data with real-world projects",
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
        Data Science Course Syllabus
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

export default Datascience ;
