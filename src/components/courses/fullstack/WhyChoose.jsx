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
import Overview from "./Overview";
import Overview1 from "./Overview1";
import Overview2 from "./Overview2";
import LiveCourse from "./LiveCourse";
import LearningPath from "./LearningPath";



const WhyChoose = () => {
  return (
    <>
     

      <div className="container-fluid mx-auto  lg:px-4 lg:py-4 bg-white">
        <div className="p-3 flex flex-col items-center text-center mx-auto">
          <Overview />
          <div className="mt-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4 tracking-tight leading-snug">
              Career Opportunities After Completing the Full Stack Development Training
            </h2>
            </div>
            <p className="text-base text-justify lg:text-center px-8 lg:text-lg max-w-4xl text-gray-700 leading-relaxed mb-8">
              After completing your Full Stack Developer training with us, you’ll be ready to dive into a range of exciting roles in the tech world. The demand for full-stack developers is booming, and your skills will open doors to opportunities that offer great career growth and stability.
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


          {/* <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
            Career Opportunities After Completing the Full Stack Developer
            Training
          </h2>
          <p className="mb-6">
            After completing your Full Stack Developer training with us, you’ll
            be ready to dive into a range of exciting roles in the tech world.
            The demand for full-stack developers is booming, and your skills
            will open doors to opportunities that offer great career growth and
            stability.
          </p> */}

          {/* <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
            Where You Can Go:
          </h2>
          <div className="overflow-x-auto px-4">
            <table className="min-w-full table-auto border border-gray-300 text-left">
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="px-4 py-3 text-base font-semibold">Role</th>
                  <th className="px-4 py-3 text-base font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3 font-medium">Full Stack Developer</td>
                  <td className="px-4 py-3">
                    Build both the front-end and back-end of applications from start to
                    finish.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3 font-medium">Front-End Developer</td>
                  <td className="px-4 py-3">
                    Create visually appealing, user-friendly websites and apps.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3 font-medium">Back-End Developer</td>
                  <td className="px-4 py-3">
                    Handle the server-side, working with databases and application logic.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3 font-medium">Web Application Developer</td>
                  <td className="px-4 py-3">
                    Build dynamic, interactive apps that solve real-world problems.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3 font-medium">Software Engineer</td>
                  <td className="px-4 py-3">
                    Design and maintain software systems that drive businesses forward.
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}



          {/* <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
            Who Should Enroll in the Full Stack Web Development Course
          </h3>
          <div className="overflow-x-auto px-4 py-6">
            <p className="text-center max-w-4xl mx-auto mb-6 text-base text-gray-700">
              This course is perfect if you want to dive into web development, whether
              you're just starting out or looking to level up your skills.
            </p>
            <table
              className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden text-left"
            >
              <thead className="bg-[#0057D3] text-white">
                <tr>
                  <th className="px-3 py-2 text-lg font-semibold ">Who is it for?</th>
                  <th className="px-3 py-2 text-lg font-semibold">
                    Why it's great for you
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-800 ">
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2 font-medium align-top">Beginners</td>
                  <td className="px-3 py-2 align-top">
                    If you have no coding experience, we’ll guide you step by step.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2 font-medium align-top">Aspiring Developers</td>
                  <td className="px-3 py-2 align-top">
                    Want to become a full-stack developer? This is your roadmap.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2 font-medium align-top">Career Changers</td>
                  <td className="px-3 py-2 align-top">
                    Looking to switch to tech? Full-stack development is the way in.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2 font-medium align-top">Students/Graduates</td>
                  <td className="px-3 py-2 align-top">
                    Ready to stand out in the job market? Sharpen your skills here.
                  </td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="px-3 py-2 font-medium align-top">
                    Freelancers/Entrepreneurs
                  </td>
                  <td className="px-3 py-2 align-top">
                    Build your own projects or offer full-stack services to clients.
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          {/* <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
            What You Get in the Full Stack Development Course
          </h3>
          <div className="overflow-x-auto px-4 py-6">
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
                  <td className="px-6 py-4 align-top">Learn from experienced instructors with industry insights.</td>
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
          </div> */}

        </div>
      </div>
    </>
  );
};

export default WhyChoose;
