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
            Overview of Full Stack Web Development Course
          </h2>
          <p>
            At Adventure Learning, this course is built for real-world results,
            not just theory. You’ll learn how websites and web apps are actually
            built, from the front-end interfaces to back-end logic and
            databases. No fluff, just hands-on skills taught in a way that
            actually sticks. Whether you're new to coding or switching careers,
            we’ll help you build like a pro, step by step.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
            Best Fullstack development course available in online and offline
          </h2>

          <p>
            At Adventure Learning, we offer the best Full Stack Development
            course, available both online and offline, tailored to suit
            different learning preferences. Whether you prefer the convenience
            of online learning or the interactive experience of classroom
            sessions, our course ensures you gain the skills needed to become a
            proficient full-stack developer.
          </p>
          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-4">
            Why Choose Adventure Learning for Full Stack Web Development
            Training
          </h2>
          <p className="mb-6">
            At Adventure Learning, we believe in a practical, hands-on approach
            to learning Full Stack Web Development. Our experienced instructors
            not only teach the theory but guide you through real-world projects
            to ensure you’re ready for the job market.
          </p>

          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-6">
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
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
            Career Opportunities After Completing the Full Stack Developer
            Training
          </h2>
          <p className="mb-6">
            After completing your Full Stack Developer training with us, you’ll
            be ready to dive into a range of exciting roles in the tech world.
            The demand for full-stack developers is booming, and your skills
            will open doors to opportunities that offer great career growth and
            stability.
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
        <td className="px-4 py-2 font-semibold">Full Stack Developer</td>
        <td className="px-4 py-2">
          Build both the front-end and back-end of applications from start to finish.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Front-End Developer</td>
        <td className="px-4 py-2">
          Create visually appealing, user-friendly websites and apps.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Back-End Developer</td>
        <td className="px-4 py-2">
          Handle the server-side, working with databases and application logic.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Web Application Developer</td>
        <td className="px-4 py-2">
          Build dynamic, interactive apps that solve real-world problems.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-4 py-2 font-semibold">Software Engineer</td>
        <td className="px-4 py-2">
          Design and maintain software systems that drive businesses forward.
        </td>
      </tr>
    </tbody>
  </table>
</div>


          <hr className="border-t border-blue-300 w-3/5 mx-auto my-12" />

          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
            Who Should Enroll in the Full Stack Web Development Course
          </h3>
          <div className="overflow-x-auto px-4 py-6">
  <p className="text-center max-w-4xl mx-auto mb-6 text-base text-gray-700">
    This course is perfect if you want to dive into web development, whether you're just starting out or looking to level up your skills.
  </p>

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
          Want to become a full-stack developer? This is your roadmap.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Career Changers</td>
        <td className="px-6 py-4 align-top">
          Looking to switch to tech? Full-stack development is the way in.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Students/Graduates</td>
        <td className="px-6 py-4 align-top">
          Ready to stand out in the job market? Sharpen your skills here.
        </td>
      </tr>
      <tr className="border-t border-gray-300">
        <td className="px-6 py-4 font-medium align-top">Freelancers/Entrepreneurs</td>
        <td className="px-6 py-4 align-top">
          Build your own projects or offer full-stack services to clients.
        </td>
      </tr>
    </tbody>
  </table>
</div>

          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">
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
</div>

        <h3 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] my-6">Full Stack Web Development Course Live Projects</h3>
        <p className="text-center" > 
 	
   In this course, you'll work on real-world projects that teach both front-end and back-end skills. These projects help you build a strong portfolio and gain hands-on experience. You'll also learn to collaborate and manage projects effectively, just like in the industry.
   </p>


        </div>
      </div>
    </>
  );
};

export default WhyChoose;
