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
            <title>Advanced Data Analytics Certification Course – Online & Offline</title>
            <meta name="description" content="Learn advanced Data Analytics with hands-on projects, expert instructors, and real-world datasets. Start your journey today – enroll now!" />
            <meta property="og:title" content="Become a Data Analytics Expert | Adventure" />
            <meta property="og:description" content="Master data analytics with practical projects and expert guidance. Enroll today and start your data analytics journey" />
           
          </Helmet>
    <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-3 mx-auto">
        <h1 className="text-3xl font-semibold text-[#0057D3] text-center mb-6 capitalize">
        Advanced Data Analytics Certification Course
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our industry-leading Data Analytics program and gain
          hands-on experience with cutting-edge technologies.
        </p>
        <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
        Overview of the Data Analytics Course
          </h2>

          <p>
          At Adventure Learning, our Data Analytics course teaches you the practical skills you need to work with data, analyze it, and derive meaningful insights. Through hands-on projects, you'll learn to work with tools and techniques used by professionals in the field, whether you're new to the subject or looking to expand your knowledge.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
          Best Data Analytics Courses Online and Offline
          </h2>

          <p>
          At Adventure Learning, we offer the best Data Analytics courses, available both online and offline, designed to suit your learning style. Whether you prefer the flexibility of online learning or the hands-on experience of classroom sessions, our course will equip you with the skills to become a data analytics expert.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6"> Why Choose Adventure Learning for the Data Analytics Training
      </h2>

    <p>At Adventure Learning, we focus on a hands-on, practical approach to learning Data Analytics. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the data analytics industry.
    </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-[#0057D3] mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8">
              {[
                {
                  text: "Master data analysis, data visualization, and statistical techniques to drive insights.",
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
                  text: "Develop cloud data storage, processing pipelines, and analytics integration.",
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
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
        Career Opportunities After Completing the Data Analytics Course
          </h2>
          <p className="mb-6">
          Upon completing your Data Analytics training, you’ll be ready to enter a wide range of exciting roles in the fast-growing field of data. The demand for data analysts is booming, and your new skills will open doors to career opportunities with great potential for growth.
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
        <td className="px-4 py-2 font-semibold">Data Scientist</td>
        <td className="px-4 py-2">
        Analyze and interpret complex data to help organizations make informed decisions.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Data Analyst </td>
        <td className="px-4 py-2">
        Use statistical methods to collect, organize, and analyze data.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">
        Machine Learning Engineer</td>
        <td className="px-4 py-2">
        Design and implement machine learning models to predict trends and behaviors.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Business Intelligence Analyst</td>
        <td className="px-4 py-2">
        Turn data into actionable insights to drive business decisions.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Data Engineer</td>
        <td className="px-4 py-2">
        Build systems and architecture to collect, store, and process data efficiently.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
Data Analytics Training Learning Path
</h3>
<p> 
 	
   This course is perfect for anyone interested in data Analytics, whether you're a beginner or looking to advance your skills.</p>
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
        No prior experience? We’ll guide you step by step.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Aspiring Data Analytics</td>
        <td className="px-6 py-4 align-top">
        Want to become a data Analytics? This course is for you.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Changers</td>
        <td className="px-6 py-4 align-top">
        Switching to data Analytics? Get started with the basics and build your way up.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Students/Graduates</td>
        <td className="px-6 py-4 align-top">
        Boost your job prospects with solid data Analytics skills.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Tech Enthusiasts/Entrepreneurs</td>
        <td className="px-6 py-4 align-top">
        Build personal projects or offer data Analytics services to clients.
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
        <td className="px-6 py-4 align-top">Learn key data Analytics concepts, from data analysis to machine learning.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Hands-On Projects</td>
        <td className="px-6 py-4 align-top">Work on real-world projects to apply your learning.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Expert Guidance</td>
        <td className="px-6 py-4 align-top">Get insights from experienced instructors in the data Analytics field.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Support</td>
        <td className="px-6 py-4 align-top"> Receive job placement assistance and interview preparation.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Certification</td>
        <td className="px-6 py-4 align-top"> Earn a certification recognized by the industry upon completion..</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Lifetime Access</td>
        <td className="px-6 py-4 align-top"> Enjoy access to course materials even after graduation.</td>
      </tr>
    </tbody>
  </table>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Live Projects in the Data Analytics Course</h3>
<p>
You’ll work on real-world projects covering data analysis, machine learning, and data visualization. These projects will help you build a strong portfolio while learning how to analyze and interpret complex datasets.
</p>
      </div>
    </div>
    </>

  );
};

export default WhyChoose;
