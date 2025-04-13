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

const WhyChoose = () => {
  return (
    <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-3 mx-auto">
        <h1 className="text-3xl font-semibold text-[#0057D3] text-center mb-6 capitalize">
          Unlock Your Potential with Our Cloud Computing Course
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our industry-leading Cloud Computing program and gain
          hands-on experience with cutting-edge technologies.
        </p>
        <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-[#0057D3] mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8">
              {[
                {
                  text: "Master cloud infrastructure, virtualization, and scalable cloud solutions.",
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
                  text: "Gain expertise in cloud infrastructure, services, and scalable solutions.",
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
                  className="bg-white shadow-lg rounded-xl p-4  flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  {item.icon}
                  <span className="text-md text-gray-800 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Modified Form Grid Layout */}
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
