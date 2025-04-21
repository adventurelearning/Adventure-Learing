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
                <title>No.1 Cloud Computing Certification Course – Online & Offline</title>
                <meta name="description" content="Learn cloud computing with hands-on projects, expert instructors, and real-world deployments. Start your cloud career journey today – enroll now!" />
                <meta property="og:title" content="Become a Cloud Computing Expert | Adventure" />
                <meta property="og:description" content="Master cloud computing with real projects and expert guidance. Learn AWS, Azure, and DevOps to build scalable, secure systems" />
               
              </Helmet>
    <div className="container-fluid mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="p-3 mx-auto">
        <h1 className="text-3xl font-semibold text-[#0057D3] text-center mb-6 capitalize">
        Advanced Cloud Computing Certification Course
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our industry-leading Cloud Computing program and gain
          hands-on experience with cutting-edge technologies.
        </p>
        <hr className="border-t border-blue-300 w-3/5 mx-auto mb-12" />

        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
        Overview of the Cloud Computing Course
          </h2>

          <p>
          At Adventure Learning, our Cloud Computing course teaches you real-world cloud skills from the ground up. You will learn to build, manage, and deploy scalable systems on platforms like AWS, Azure, and Google Cloud. Through hands-on labs and real projects, you will gain the confidence to design secure cloud architectures and prepare for globally recognized certifications.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
          Best Cloud Computing Courses Online and Offline
          </h2>

          <p>
          At Adventure Learning, we offer the best Cloud Computing courses, available both online and offline, designed to suit your learning style. Whether you prefer the flexibility of online learning or the hands-on experience of classroom sessions, our course will equip you with the skills to become a Cloud Computing expert.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6"> Why Choose Adventure Learning for the Cloud Computing Training
      </h2>

    <p>At Adventure Learning, we focus on a hands-on, practical approach to learning Cloud Computing. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the Cloud Computing industry.
    </p>
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
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
        Career Opportunities After Completing the Cloud Computing Course
          </h2>
          <p className="mb-6">
          Upon completing your Cloud Computing training, you’ll be ready to enter a wide range of exciting roles in the fast-growing field of data. The demand for data analysts is booming, and your new skills will open doors to career opportunities with great potential for growth.
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
        <td className="px-4 py-2 font-semibold">Cloud Engineer:</td>
        <td className="px-4 py-2">
        Build and manage cloud infrastructure on AWS, Azure, or GCP.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">DevOps Engineer</td>
        <td className="px-4 py-2">
        Automate deployment pipelines using Jenkins, Docker, Git, and Terraform.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">
        Cloud Administrator</td>
        <td className="px-4 py-2">
        Manage cloud services, monitor performance, and ensure uptime
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Site Reliability Engineer (SRE)</td>
        <td className="px-4 py-2">
        Ensure system stability using automation and performance monitoring tools
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Cloud Security Analyst</td>
        <td className="px-4 py-2">
        Secure cloud environments with access controls, monitoring, and compliance.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
Cloud Computing Training Learning Path
</h3>
<p> 
 	
   This course is perfect for anyone interested in Cloud Computing, whether you're a beginner or looking to advance your skills.</p>
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
        <td className="px-6 py-4 font-medium align-top">IT Professionals</td>
        <td className="px-6 py-4 align-top">
        Move from traditional roles to modern cloud-based positions.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">System Administrators</td>
        <td className="px-6 py-4 align-top">
        Learn how to automate and manage cloud environments.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Developers</td>
        <td className="px-6 py-4 align-top">
        Deploy and scale applications using AWS, Azure, and GCP.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Students/Graduates</td>
        <td className="px-6 py-4 align-top">
        Build a career in one of the fastest-growing tech domains
        </td>
      </tr>
    </tbody>
  </table>

<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">What You Will Get in the Cloud Computing Course</h3>
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
        <td className="px-6 py-4 align-top">Learn key Cloud Computing concepts, from data analysis to machine learning.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Hands-On Projects</td>
        <td className="px-6 py-4 align-top"> Work on real AWS, Azure, and GCP projects.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Expert Guidance</td>
        <td className="px-6 py-4 align-top">Learn from professionals with live deployment experience.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Support</td>
        <td className="px-6 py-4 align-top"> Get help with resumes, interviews, and job placement.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Certification</td>
        <td className="px-6 py-4 align-top"> Earn a certificate from Adventure Learning on course completion.</td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Lifetime Access</td>
        <td className="px-6 py-4 align-top">Revisit lessons and tools even after you finish the course.</td>
      </tr>
    </tbody>
  </table>
<h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Live Projects in the Cloud Computing Course</h3>
<p>
You’ll build real-world cloud solutions including application deployments, serverless systems, automation with Terraform, and monitoring using tools like CloudWatch and Azure Monitor. These projects will enhance your portfolio and job readiness.
</p>
      </div>
    </div>
    </>
  );
};

export default WhyChoose;
