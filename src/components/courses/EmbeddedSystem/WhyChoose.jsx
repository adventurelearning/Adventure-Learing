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
        <title>Advanced Embedded Systems Course | Adventure Learning</title>
        <meta name="description" content="Learn embedded systems with hands-on projects and expert instructors. Start building real-world applications today – enroll now!" />
        <meta property="og:title" content="Become an Embedded Systems Expert" />
        <meta property="og:description" content="Master embedded systems with practical projects and expert guidance. Enroll today and start your journey!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adventurelearning.in/course/embedded-system" />
        <meta property="og:image" content="/assets/logo-dark-BujUEHab.svg" />
        <meta property="og:image:alt" content="Embedded Systems Course" />
      </Helmet>

      <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100 ">
        <div className="p-3 mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold text-[#0057D3] mb-6 capitalize text-center">
            Embedded Systems Course
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Join our industry-leading Embedded System program and gain hands-on experience with cutting-edge technologies.
          </p>

          {/* Overview */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6 text-center">
            Overview of the Embedded Systems Course
          </h2>
          <p className="text-gray-700 mb-12 text-center">
            At Adventure Learning, our Embedded Systems course teaches you practical skills to build and work with everyday technology like microcontrollers and sensors. Through hands-on projects, you'll learn how to create reliable embedded systems step by step, whether you're starting fresh or have some experience.
          </p>

          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12 text-center" />

          {/* Online / Offline */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6 text-center">
            Best Embedded Systems Courses Online and Offline
          </h2>
          <p className="text-gray-700 mb-12 text-center">
            We offer flexible Embedded Systems courses available both online and offline. Whether you need virtual flexibility or hands-on campus sessions, we’ve got you covered.
          </p>

          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12 text-center" />

          {/* Why Choose Us */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6 text-center">
            Why Choose Adventure Learning for the Embedded Systems Programming Course
          </h2>
          <p className="mb-12 text-gray-700 text-center">
            Our experienced instructors take a practical, hands-on approach with real-world projects to equip you with in-demand embedded system skills.
          </p>

          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6 text-center">
            Why Choose Us?
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
              {[
                {
                  text: "Industry-Experienced Instructors",
                  icon: <UserGroupIcon className="h-12 w-12 text-blue-600 mb-4" />,
                },
                {
                  text: "Real-World Projects",
                  icon: <i className="bi bi-globe2 text-green-600 mb-4 text-4xl"></i>,
                },
                {
                  text: "Flexible Learning Options (Online & Offline)",
                  icon: <i className="bi bi-camera-video-fill text-purple-600 mb-4 text-4xl"></i>,
                },
                {
                  text: "Comprehensive Curriculum",
                  icon: <AcademicCapIcon className="h-12 w-12 text-orange-600 mb-4" />,
                },
                {
                  text: "Job Placement Assistance",
                  icon: <BriefcaseIcon className="h-12 w-12 text-blue-600 mb-4" />,
                },
                {
                  text: "24/7 Access to Resources",
                  icon: <LightBulbIcon className="h-12 w-12 text-yellow-600 mb-4" />,
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

          {/* Career Opportunities */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-12 text-center">
            Career Opportunities After Completing the Embedded Systems Training
          </h2>
          <p className="mb-6 text-gray-700 text-center">
            Unlock job opportunities across diverse industries — from automotive to smart devices and robotics — with in-demand embedded system skills.
          </p>

          <h3 className="text-2xl font-semibold text-[#0057D3] mb-6 text-center">Where You Can Go:</h3>
          <div className="overflow-x-auto px-4 mb-10">
            <table className="min-w-full table-auto border border-gray-300 text-left bg-white">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="px-4 py-2 text-base">Role</th>
                  <th className="px-4 py-2 text-base">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Embedded Engineer", "Design and develop hardware and software for embedded systems in various industries."],
                  ["Firmware Developer", "Write low-level software that interacts directly with hardware to control devices."],
                  ["IoT Developer", "Connect physical devices to the internet and build smart solutions."],
                  ["Hardware Engineer", "Design and test the hardware components of embedded systems."],
                  ["Systems Architect", "Plan and build complex embedded systems architecture."],
                ].map(([role, desc], index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-4 py-2 font-semibold">{role}</td>
                    <td className="px-4 py-2">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Learning Path */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6 text-center">
            Embedded Systems Course Learning Path
          </h3>
          <p className="text-gray-700 mb-6 text-center">
            Whether you're new or already in tech, our course helps you build solid embedded system foundations and project-ready confidence.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full table-auto border border-gray-300 bg-white">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="text-left px-6 py-3">Who is it for?</th>
                  <th className="text-left px-6 py-3">Why it’s great for you</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Beginners", "We’ll guide you step by step – no coding experience required."],
                  ["Aspiring Developers", "Want to specialize in embedded systems? This is for you."],
                  ["Career Changers", "Thinking of switching careers? This path is tailored for you."],
                  ["Students/Graduates", "Boost your resume and job prospects with in-demand skills."],
                  ["Tech Enthusiasts/Entrepreneurs", "Build your own prototypes and launch embedded products."],
                ].map(([who, why], index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-6 py-4 font-medium">{who}</td>
                    <td className="px-6 py-4">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What You’ll Get */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6 text-center">
            What You Will Get in the Embedded Systems Course
          </h3>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full table-auto border border-gray-300 bg-white">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="text-left px-6 py-3">Feature</th>
                  <th className="text-left px-6 py-3">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Comprehensive Curriculum", "Master both front-end and back-end technologies."],
                  ["Hands-On Projects", "Build real-world applications to strengthen your skills."],
                  ["Expert Guidance", "Insights from experienced embedded systems instructors."],
                  ["Career Support", "Job placement and interview prep included."],
                  ["Certification", "Get an industry-recognized certificate."],
                  ["Lifetime Access", "Access course materials anytime."],
                ].map(([feature, detail], index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-6 py-4 font-medium">{feature}</td>
                    <td className="px-6 py-4">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Live Projects */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6 text-center">
            Live Projects in the Embedded Systems Course
          </h3>
          <p className="text-gray-700 text-center">
            You’ll work on real-world hardware and software projects, building a strong portfolio and learning how to troubleshoot, design, and optimize like a pro.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
