import React from "react";
import {
  CodeBracketIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CloudIcon,
  AcademicCapIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { Helmet } from "react-helmet";

const WhyChoose = () => {
  return (
    <>
      <Helmet>
        <title>Advanced Data Science Certification Course – Online & Offline</title>
        <meta name="description" content="Learn data science with hands-on projects, expert instructors, and real-world datasets. Start your journey today – enroll now!" />
        <meta property="og:title" content="Become a Data Science Expert | Adventure" />
        <meta property="og:description" content="Master data science with practical projects and expert guidance. Enroll today and start your data science journey!" />
      </Helmet>

      <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
        <div className="p-3 mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold text-[#0057D3] mb-6 capitalize">
            Advanced Data Science Certification Course
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            Join our industry-leading Data Science program and gain hands-on experience with cutting-edge technologies.
          </p>

          <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />

          {/* Overview */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">Overview of the Data Science Course</h2>
          <p className="mb-12">
            At Adventure Learning, our Data Science course teaches you the practical skills you need to work with data, analyze it, and derive meaningful insights. Through hands-on projects, you'll learn to work with tools and techniques used by professionals in the field — whether you're new to the subject or looking to expand your knowledge.
          </p>

          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          {/* Online / Offline */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">Best Data Science Courses Online and Offline</h2>
          <p className="mb-12">
            We offer the best Data Science courses — available both online and offline — designed to suit your learning style. Whether you prefer the flexibility of online learning or the hands-on experience of classroom sessions, this course will equip you with the skills to become a data science expert.
          </p>

          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          {/* Why Choose Us */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">Why Choose Adventure Learning for the Data Science Course</h2>
          <p className="mb-12">
            We focus on a hands-on, practical approach to learning Data Science. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the data science industry.
          </p>

          {/* Why Choose Us Grid */}
          <h2 className="text-3xl font-semibold text-[#0057D3] mb-6">Why Choose Us?</h2>
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
              {[
                {
                  text: "Master data analysis, machine learning, and advanced statistical techniques.",
                  icon: <CodeBracketIcon className="h-12 w-12 text-blue-600 mb-4" />,
                },
                {
                  text: "Learn from experienced mentors with industry insights.",
                  icon: <UserGroupIcon className="h-12 w-12 text-green-600 mb-4" />,
                },
                {
                  text: "Gain hands-on experience with real-world projects.",
                  icon: <BriefcaseIcon className="h-12 w-12 text-purple-600 mb-4" />,
                },
                {
                  text: "Access career guidance, resume building, and job placement assistance.",
                  icon: <AcademicCapIcon className="h-12 w-12 text-orange-600 mb-4" />,
                },
                {
                  text: "Develop expertise in cloud-based data storage, scalable analytics solutions, and deploying machine learning models.",
                  icon: <CloudIcon className="h-12 w-12 text-blue-600 mb-4" />,
                },
                {
                  text: "Work on collaborative team-based coding exercises.",
                  icon: <LightBulbIcon className="h-12 w-12 text-yellow-600 mb-4" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  {item.icon}
                  <span className="text-md text-gray-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Career Opportunities After Completing the Data Science Course</h2>
          <p className="mb-6">
            Upon completing your training, you’ll be ready for a wide range of exciting roles in the fast-growing field of data. The demand for data scientists is booming, and your new skills will open doors to high-growth opportunities.
          </p>

          <h3 className="text-2xl font-semibold text-[#0057D3] mb-6">Where You Can Go:</h3>
          <div className="overflow-x-auto px-4 mb-12">
            <table className="min-w-full table-auto border border-gray-300 bg-white text-left">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="px-4 py-2 text-base">Role</th>
                  <th className="px-4 py-2 text-base">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["Data Scientist", "Analyze and interpret complex data to help organizations make informed decisions."],
                  ["Data Analyst", "Use statistical methods to collect, organize, and analyze data."],
                  ["Machine Learning Engineer", "Design and implement machine learning models to predict trends and behaviors."],
                  ["Business Intelligence Analyst", "Turn data into actionable insights to drive business decisions."],
                  ["Data Engineer", "Build systems and architecture to collect, store, and process data efficiently."],
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
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Data Science Training Learning Path</h3>
          <p className="mb-6">This course is perfect for anyone interested in data science, whether you're a beginner or looking to advance your skills.</p>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full table-auto border border-gray-300 bg-white text-left">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="px-6 py-3 text-lg font-semibold">Who is it for?</th>
                  <th className="px-6 py-3 text-lg font-semibold">Why it's great for you</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Beginners", "No prior experience? We’ll guide you step by step."],
                  ["Aspiring Data Scientists", "Want to become a data scientist? This course is for you."],
                  ["Career Changers", "Switching to data science? Get started with the basics and build your way up."],
                  ["Students/Graduates", "Boost your job prospects with solid data science skills."],
                  ["Tech Enthusiasts/Entrepreneurs", "Build personal projects or offer data science services to clients."],
                ].map(([who, why], index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="px-6 py-4 font-medium">{who}</td>
                    <td className="px-6 py-4">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What You Get */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">What You Will Get in the Data Science Course</h3>
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full table-auto border border-gray-300 bg-white text-left">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="px-6 py-3 text-lg font-semibold">Feature</th>
                  <th className="px-6 py-3 text-lg font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {[
                  ["Comprehensive Curriculum", "Learn key data science concepts, from data analysis to machine learning."],
                  ["Hands-On Projects", "Work on real-world projects to apply your learning."],
                  ["Expert Guidance", "Get insights from experienced instructors in the data science field."],
                  ["Career Support", "Receive job placement assistance and interview preparation."],
                  ["Certification", "Earn a certification recognized by the industry upon completion."],
                  ["Lifetime Access", "Enjoy access to course materials even after graduation."],
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
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Live Projects in the Data Science Course</h3>
          <p>
            You’ll work on real-world projects covering data analysis, machine learning, and data visualization. These projects will help you build a strong portfolio while learning how to analyze and interpret complex datasets.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
