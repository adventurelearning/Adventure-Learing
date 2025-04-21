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
    <title>Advanced Software Testing Course – Online & Offline</title>
    <meta name="description" content="Master software testing with real tools and hands-on projects. Learn automation, manual testing, and performance tools – enroll today!" />
    <meta property="og:title" content="Become a Software Testing Expert" />
    <meta property="og:description" content="Learn software testing with real-world tools and live projects. Start your QA career with expert guidance – enroll now" />
   
  </Helmet>
    <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-3 mx-auto">
        <h1 className="text-2xl lg:text-3xl  font-semibold text-[#0057D3] text-center mb-6 capitalize">
        Advanced Software Testing Certification Course
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our industry-leading Software Testing program and gain
          hands-on experience with cutting-edge technologies.
        </p>
        <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
        Overview of the Software Testing Course
          </h2>

          <p>
          At Adventure Learning, our Software Testing course is built for learners who want real, job-ready skills. You'll learn to test software across various environments, from web and mobile to APIs and enterprise systems. Whether you're new to QA or want to sharpen your automation and performance testing skills, this course walks you through everything — with real-world projects and tools used in top companies.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
          Best Software Testing Courses Online and Offline
          </h2>

          <p>
          We offer the best Software Testing training, available both online and offline. Learn at your pace or attend live sessions, and gain practical exposure to industry-standard tools. Whether you’re learning from home or in a classroom, this course will prepare you for a successful QA career.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6"> Why Choose Adventure Learning for the Data Analytics Training
      </h2>

    <p>At Adventure Learning, we focus on a hands-on, practical approach to learning Data Analytics. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the data analytics industry.
    </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8">
              {[
                {
                  text: "Master software quality assurance, test automation, and debugging techniques.",
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
          <EnquiryForm />
        </div>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
        Career Opportunities After Completing the Software Testing  Course
          </h2>
          <p className="mb-6">
          At Adventure Learning, our course goes beyond theory. We focus on actual testing tools, real-time scenarios, and career outcomes. Whether you aim to work as a manual tester, automation tester, or performance engineer. we prepare you to succeed.
          </p>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
    
    Where You Can Go:
  </h2>

  <div className="overflow-x-auto px-4">
  <table className="min-w-full table-auto border border-gray-300 text-justify">
    <thead className="bg-[#0057D3] text-white">
      <tr>
        <th className="px-4 py-2 text-left text-base">Role</th>
        <th className="px-4 py-2 text-left text-base">Description</th>
      </tr>
    </thead>
    <tbody className="text-gray-700 bg-white">
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Manual Tester:</td>
        <td className="px-4 py-2">
        Ensure software works as expected through functional and regression testing.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Automation Test Engineer</td>
        <td className="px-4 py-2">
        Create test scripts using Selenium, Java, JavaScript, and frameworks like TestNG and JUnit
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">
        API Tester</td>
        <td className="px-4 py-2">
        Test backend services using Postman, Rest Assured, and SoapUI.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Performance Tester</td>
        <td className="px-4 py-2">
        Use tools like Apache JMeter and LoadRunner to test system speed and reliability.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Mobile App Tester</td>
        <td className="px-4 py-2">
        Test iOS/Android apps using Appium
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">QA Analyst</td>
        <td className="px-4 py-2">
        Analyze and improve software quality in agile teams.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">DevOps/CI Tester</td>
        <td className="px-4 py-2">
        Use Jenkins, Git, and Allure to integrate testing into CI/CD pipelines.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
Software Testing Learning Path
</h3>
<p> 
 	
   This course is perfect for anyone interested in Software Testing, whether you're a beginner or looking to advance your skills.</p>
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
        No coding or testing background? We start from scratch.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Aspiring Software Testing</td>
        <td className="px-6 py-4 align-top">
        Looking to build a career in QA or automation testing? This course is your foundation.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Developers</td>
        <td className="px-6 py-4 align-top">
        Want to improve your testing knowledge? Learn how to write test cases and automate them.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Students/Graduates</td>
        <td className="px-6 py-4 align-top">
        Want to boost your resume with practical QA skills? This course is for you.

        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Switchers</td>
        <td className="px-6 py-4 align-top">
        Coming from non-tech? Software testing is a great entry point into IT.
        </td>
      </tr>
    </tbody>
  </table>

<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">What You Will Get in the Data Analytics Course</h3>
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
        <td className="px-6 py-4 align-top">Covers manual, automation, performance, and API testing.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Hands-On Projects</td>
        <td className="px-6 py-4 align-top"> Test web apps, APIs, mobile apps, and enterprise tools in real scenarios.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Expert Guidance</td>
        <td className="px-6 py-4 align-top">Learn from professionals with years of industry QA experience.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Interview Preparation</td>
        <td className="px-6 py-4 align-top">  Mock interviews, resume help, and career mentoring.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Certification</td>
        <td className="px-6 py-4 align-top"> Industry-recognized certification after course completion.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Lifetime Access</td>
        <td className="px-6 py-4 align-top"> Revisit learning material and tools whenever you want..</td>
      </tr>
    </tbody>
  </table>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Live Projects in the Software Testing Course</h3>
<p>
You’ll work on live testing projects, automating test cases, running performance checks, and writing test plans for real-world applications. By the end, you’ll have a full QA project in your portfolio.
</p>
      </div>
    </div>
    </>

  );
};

export default WhyChoose;
