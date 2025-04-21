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
import { Helmet } from 'react-helmet';


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
    <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-3 mx-auto">
        <h1 className="text-3xl font-semibold text-[#0057D3] text-center mb-6 capitalize">
        Embedded Systems Course
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our industry-leading Embedded System program and gain
          hands-on experience with cutting-edge technologies.
        </p>

        <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[#0057D3] mb-6">
        Overview of the Embedded Systems Course
          </h2>

          <p className="text-center">
          At Adventure Learning, our Embedded Systems course teaches you practical skills to build and work with everyday technology like microcontrollers and sensors. Through hands-on projects, you'll learn how to create reliable embedded systems step by step, whether you're starting fresh or have some experience.
          </p>
    
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[#0057D3] mb-6">
          Best Embedded Systems Courses Online and Offline
          </h2>

          <p className="text-center">
          At Adventure Learning, we offer the best Embedded Systems courses, available both online and offline, designed to fit your preferred learning style. Whether you prefer the flexibility of online learning or the hands-on experience of classroom sessions, our course will equip you with the skills to become an expert in embedded systems development.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[#0057D3] mb-6"> Why Choose Adventure Learning for the Embedded Systems Programming Course
      </h2>

    <p className="text-center">At Adventure Learning, we focus on a hands-on, practical approach to learning Embedded Systems Programming. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the embedded systems industry."</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-[#0057D3] mb-6 text-center mt-3">
              Why Choose Us?
            </h2>
     <div className="flex justify-center">
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

              <h2 className="text-2xl lg:text-3xl font-semibold text-center text-[#0057D3] my-12">
              Career Opportunities After Completing the Embedded Systems Training
          </h2>
          <p className="text-center mb-6">
          Upon completing your Embedded Systems training with us, you’ll be ready to step into various exciting roles in the growing tech field. With the rise in demand for embedded systems professionals, your skills will open up career opportunities with great potential for growth and job stability.
          </p>
          <h2 className="text-2xl lg:text-3xl text-center font-semibold text-[#0057D3] my-6">
    
    Where You Can Go:
  </h2>

  <div className="w-full flex justify-center px-4">
  <div className="overflow-x-auto center">
    <table className="min-w-full max-w-5xl table-auto border border-gray-300 text-justify mx-auto">
      <thead className="bg-[#0057D3] text-white">
        <tr>
          <th className="px-4 py-2 text-left text-base">Role</th>
          <th className="px-4 py-2 text-left text-base">Description</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 bg-white">
        <tr className="border-t border-gray-300">
          <td className="px-4 py-2 font-semibold">Embedded Engineer</td>
          <td className="px-4 py-2">
            Design and develop hardware and software for embedded systems in various industries.
          </td>
        </tr>
        <tr className="border-t border-gray-300">
          <td className="px-4 py-2 font-semibold">Firmware Developer</td>
          <td className="px-4 py-2">
            Write low-level software that interacts directly with hardware to control devices.
          </td>
        </tr>
        <tr className="border-t border-gray-300">
          <td className="px-4 py-2 font-semibold">IoT Developer</td>
          <td className="px-4 py-2">
            Work on connecting physical devices to the internet and building smart solutions.
          </td>
        </tr>
        <tr className="border-t border-gray-300">
          <td className="px-4 py-2 font-semibold">Hardware Engineer</td>
          <td className="px-4 py-2">
            Focus on designing and testing the hardware components of embedded systems.
          </td>
        </tr>
        <tr className="border-t border-gray-300">
          <td className="px-4 py-2 font-semibold">Systems Architect</td>
          <td className="px-4 py-2">
            Plan and design complex systems, ensuring both hardware and software work seamlessly together.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
Embedded Systems Course Learning Path
</h3>
<p>This course is perfect for anyone interested in embedded systems, whether you're starting fresh or looking to expand your skills</p>
<table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-justify">
    <thead className="bg-[#0057D3] text-white">
      <tr>
        <th className="text-left px-6 py-3 text-lg font-semibold w-1/3">Who is it for?</th>
        <th className="text-left px-6 py-3 text-lg font-semibold">Why it's great for you</th>
      </tr>
    </thead>
    <tbody className="text-gray-800 bg-white">
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Beginners</td>
        <td className="px-6 py-4 align-top">
          If you have no coding experience, we’ll guide you step by step.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Aspiring Developers</td>
        <td className="px-6 py-4 align-top">
        Want to specialize in embedded systems? This is for you.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Changers</td>
        <td className="px-6 py-4 align-top">
        Switching to embedded systems? Get started here.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Students/Graduates</td>
        <td className="px-6 py-4 align-top">
        Boost your job market prospects with solid embedded systems skills.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Tech Enthusiasts/Entrepreneurs</td>
        <td className="px-6 py-4 align-top">
          Build your own projects or offer services in embedded systems.
        </td>
      </tr>
    </tbody>
  </table>

<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">What You Will Get in the Embedded Systems Course</h3>
  <table className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-justify">
    <thead className="bg-[#0057D3] text-white">
      <tr>
        <th className="text-left px-6 py-3 text-lg font-semibold w-1/3">Feature</th>
        <th className="text-left px-6 py-3 text-lg font-semibold">Details</th>
      </tr>
    </thead>
    <tbody className="text-gray-800 bg-white">
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Comprehensive Curriculum</td>
        <td className="px-6 py-4 align-top">Master both front-end and back-end technologies.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Hands-On Projects</td>
        <td className="px-6 py-4 align-top">Build real-world applications to strengthen your skills.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Expert Guidance</td>
        <td className="px-6 py-4 align-top">Get insights from experienced instructors in the embedded systems field.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Support</td>
        <td className="px-6 py-4 align-top">Get assistance with job placement and interview preparation.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Certification</td>
        <td className="px-6 py-4 align-top">Receive an industry-recognized certification upon completion.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Lifetime Access</td>
        <td className="px-6 py-4 align-top">Access course materials anytime, even after graduation.</td>
      </tr>
    </tbody>
  </table>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Live Projects in the Embedded Systems Course</h3>
<p>
You’ll work on real-world projects that cover both hardware and software, giving you practical experience. These projects help you build a strong portfolio while learning how to troubleshoot, design, and optimize embedded systems like a professional.
</p>
          </div>
          {/* Modified Form Grid Layout */}
          <EnquiryForm />
        </div>
      </div>
    </div>
    </>
  );
};

export default WhyChoose;
