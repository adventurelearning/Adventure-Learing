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
import CloudComputingCourse from "./CloudComputingCourse";

const CloudComputing = () => {
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
          No.1 Cloud Computing Certification Course – Online & Offline
        </title>
        <meta
          name="description"
          content="Join Cloud Computing Course at Adventure Learning, Coimbatore. Learn AWS, Azure & Google Cloud with real projects and 100% placement support. Build your career in Cloud Computing today!"
        />

        {/* Keywords Meta Tag */}
        <meta
          name="keywords"
          content="
    Cloud Computing Course in Coimbatore .AWS Certification Training in Coimbatore . Microsoft Azure Course with Placement . Career Opportunities in Cloud Computing India .Affordable Cloud Computing Course Tamil Nadu .Serverless Computing Course 2025
  "
        />

        {/* Open Graph/Facebook Meta Tags */}
        <meta
          property="og:title"
          content="Become a Cloud Computing Expert | Adventure"
        />
        <meta
          property="og:description"
          content="Master cloud computing with real projects and expert guidance. Learn AWS, Azure, and DevOps to build scalable, secure systems"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.adventurelearning.co.in/cloud-computing-course"
        />
        <meta
          property="og:image"
          content="https://www.adventurelearning.co.in/images/cloud-computing-course.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Become a Cloud Computing Expert | Adventure"
        />
        <meta
          name="twitter:description"
          content="Master cloud computing with real projects and expert guidance. Learn AWS, Azure, and DevOps to build scalable, secure systems"
        />
        <meta
          name="twitter:image"
          content="https://www.adventurelearning.co.in/images/cloud-computing-course.jpg"
        />
      </Helmet>
      <Banner />
      <CourseFeatures/>
      <CloudComputingCourse/>
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
        className="container-fluid rounded-lg mx-auto px-4 bg-white shadow-lg   "
      >
        <h1 className="text-2xl lg:w-3xl font-semibold  text-[#0057D3] p-6  text-center">
          Cloud Computing Syllabus
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
        <h1 className="text-2xl lg:w-3xl font-semibold  text-center text-[#0057D3] p-6">
          Our learners Thought
        </h1>
        <hr className="border-t-1 border-[#0057D3] mx-auto w-1/2 lg:w-1/4   " />
        <Review />
      </div>
    </>
  );
};

export default CloudComputing;
