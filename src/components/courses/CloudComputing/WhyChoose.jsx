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

import Overview from "./Overview";
import Overview1 from "./Overview1";
import Overview2 from "./Overview2";
import LearningPath from "./LearningPath";
import LiveCourse from "./LiveCourse";
import CloudOver from "./CloudOver";

const WhyChoose = () => {
  return (
    <>


      <div className="container-fluid mx-auto  lg:px-4 lg:py-4 bg-white">
        <div className="p-3 flex flex-col items-center text-center mx-auto">
          {/* <Overview /> */}
          <CloudOver />
          <div className="mt-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4 tracking-tight leading-snug">
              Career Opportunities After Completing the Cloud Computing Course
            </h2>
          </div>
          <p className="text-base text-justify px-8 lg:text-lg max-w-4xl text-gray-700 leading-relaxed mb-8">
          Upon completing your Cloud Computing training, you’ll be ready to enter a wide range of exciting roles in the fast-growing field of data. The demand for data analysts is booming, and your new skills will open doors to career opportunities with great potential for growth.
          </p>

          <div className="bg-gray-50 rounded-xl">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] py-8">
              Why Choose Us?
            </h2>
            <div className="flex justify-center ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl  w-full">
                {[
                  {
                    text: "Industry-Experienced Instructors.",
                    icon: (
                      <UserGroupIcon className="h-12 w-12 text-blue-600 mb-4" />
                    ),
                  },
                  {
                    text: "Real-World Projects.",
                    icon: (
                      // <UserGroupIcon className="h-12 w-12 text-green-600 mb-4" />
                      <i className="bi bi-globe2 h-12 w-12 text-green-600 mb-4 text-4xl"></i>
                    ),
                  },
                  {
                    text: "Flexible Learning Options (Online & Offline)",
                    icon: (
                      // <BriefcaseIcon className="h-12 w-12 text-purple-600 mb-4" />

                      <i className="bi bi-camera-video-fill text-purple-600 mb-4 text-4xl"></i>
                    ),
                  },
                  {
                    text: "Comprehensive Curriculum ",
                    icon: (
                      <AcademicCapIcon className="h-12 w-12 text-orange-600 mb-4" />
                    ),
                  },
                  {
                    text: "Job Placement Assistance",
                    icon: (
                      <BriefcaseIcon className="h-12 w-12 text-blue-600 mb-4" />
                    ),
                  },
                  {
                    text: "24/7 Access to Resources",
                    icon: (
                      <LightBulbIcon className="h-12 w-12 text-yellow-600 mb-4" />
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg w-full h-48 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
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
          <div>
            <Overview1 />
          </div>
          <div>
            <LearningPath/>
          </div>
          <div>
            <LiveCourse/>
          </div>       
          <div>
            <Overview2 />
          </div>         
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
