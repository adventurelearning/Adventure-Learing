import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
        <title>Full Stack Web Development Course | Adventure Learning</title>
        <meta
          name="description"
          content="Learn full stack web development with hands-on projects, expert instructors, and flexible options. Start building real-world Software today - enroll now!"
        />
        <meta
          property="og:title"
          content="Become a Full Stack Developer - Enroll Now"
        />
        <meta
          property="og:description"
          content="Master Full-Stack development with real-world projects & expert guidance. Enroll today to start your developer journey!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.adventurelearning.in/course/full-stack-development"
        />
        <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
        <meta
          property="og:image:alt"
          content="Full Stack Web Development Course"
        />
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
