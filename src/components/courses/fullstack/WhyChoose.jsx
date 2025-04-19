import React from "react";
import {
  CodeBracketIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CloudIcon,
  AcademicCapIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import EnquiryForm from "../EnquiryForm";
import { Helmet } from "react-helmet";

const WhyChoose = () => {
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

      <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="p-3 mx-auto text-center">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6 capitalize">
            Unlock Your Potential with Our Full Stack Course
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Join our industry-leading full stack development program and gain
            hands-on experience with cutting-edge technologies.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />

          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
            Why Choose Us?
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl  w-full">
              {[
                {
                  text: "Master modern front-end and back-end technologies.",
                  icon: (
                    <CodeBracketIcon className="h-12 w-12 text-blue-600 mb-4" />
                  ),
                },
                {
                  text: "Learn from experienced mentors with industry insights.",
                  icon: (
                    <UserGroupIcon className="h-12 w-12 text-green-600 mb-4" />
                  ),
                },
                {
                  text: "Gain hands-on experience with real-world projects.",
                  icon: (
                    <BriefcaseIcon className="h-12 w-12 text-purple-600 mb-4" />
                  ),
                },
                {
                  text: "Access career guidance, resume building, and job placement assistance.",
                  icon: (
                    <AcademicCapIcon className="h-12 w-12 text-orange-600 mb-4" />
                  ),
                },
                {
                  text: "Develop expertise in cloud deployment and API development.",
                  icon: <CloudIcon className="h-12 w-12 text-blue-600 mb-4" />,
                },
                {
                  text: "Work on collaborative team-based coding exercises.",
                  icon: (
                    <LightBulbIcon className="h-12 w-12 text-yellow-600 mb-4" />
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  {item.icon}
                  <span className="text-md text-gray-800 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
