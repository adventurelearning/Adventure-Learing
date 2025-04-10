
import React, { useState } from "react";
import {
  BookOpenIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  ServerIcon,
//   DatabaseIcon, // This should now work
  CloudIcon,
} from "@heroicons/react/24/outline";

const CourseSyllabus = () => {
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (module) => {
    setActiveModule(activeModule === module ? null : module);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-200 to-indigo-300 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
              Become a Job-Ready Full Stack Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Master front-end and back-end technologies, build robust
              applications, and launch your tech career.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
              Enroll Now & Start Coding
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-indigo-200/30 blur-3xl"></div>
      </section>

      {/* Course Highlights */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-12">
          Why This Full Stack Course?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            {
              title: "Full Stack Mastery",
              description: "Learn React, Node.js, Express, MongoDB, and more.",
              icon: (
                <CodeBracketIcon className="h-10 w-10 text-blue-600 mb-4" />
              ),
            },
            {
              title: "Backend Expertise",
              description: "Build scalable APIs and server-side applications.",
              icon: <ServerIcon className="h-10 w-10 text-green-600 mb-4" />,
            },
            {
              title: "Database Proficiency",
              description: "Work with relational and non-relational databases.",
              
            },
            {
              title: "Cloud Deployment",
              description: "Deploy your applications on cloud platforms.",
              icon: <CloudIcon className="h-10 w-10 text-yellow-600 mb-4" />,
            },
            {
              title: "Hands-on Projects",
              description:
                "Build real-world applications to solidify your skills.",
              icon: <BookOpenIcon className="h-10 w-10 text-orange-600 mb-4" />,
            },
            {
              title: "Expert Mentorship",
              description:
                "Learn from industry professionals with years of experience.",
              icon: (
                <UserGroupIcon className="h-10 w-10 text-indigo-600 mb-4" />
              ),
            },
            {
              title: "Career Guidance",
              description:
                "Get personalized support for resume building and job placement.",
              icon: (
                <PresentationChartLineIcon className="h-10 w-10 text-pink-600 mb-4" />
              ),
            },
            {
              title: "Community Support",
              description: "Connect with fellow learners and grow together.",
              icon: (
                <ChatBubbleLeftRightIcon className="h-10 w-10 text-teal-600 mb-4" />
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Breakdown (Interactive Accordion) */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-12">
          Course Curriculum
        </h2>
        {[
          {
            title: "Module 1: Front-End Development with React",
            content:
              "Learn React fundamentals, component architecture, state management, and build dynamic user interfaces.",
          },
          {
            title: "Module 2: Back-End Development with Node.js & Express",
            content:
              "Master server-side development using Node.js and Express, build RESTful APIs, and handle server logic.",
          },
          {
            title: "Module 3: Database Management with MongoDB",
            content:
              "Explore NoSQL databases with MongoDB, learn data modeling, querying, and integration with Node.js.",
          },
          {
            title: "Module 4: Full Stack Projects & Deployment",
            content:
              "Combine front-end and back-end skills to build full stack applications and deploy them to cloud platforms.",
          },
        ].map((module) => (
          <div
            key={module.title}
            className="bg-white rounded-xl shadow-md p-6 mb-4"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleModule(module.title)}
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {module.title}
              </h3>
              <span>{activeModule === module.title ? "-" : "+"}</span>
            </div>
            {activeModule === module.title && (
              <div className="mt-4 text-gray-600">
                <p>{module.content}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Instructor Profiles */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-12">
          Meet Your Expert Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alice Johnson",
              title: "React Specialist",
              image:
                "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              name: "Bob Williams",
              title: "Node.js & Backend Expert",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
            },
            {
              name: "Charlie Davis",
              title: "Database Architect & Cloud Engineer",
              image:
                "https://images.unsplash.com/photo-1587628622765-5d18224a926e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
          ].map((instructor) => (
            <div
              key={instructor.name}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {instructor.name}
              </h3>
              <p className="text-gray-600">{instructor.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 text-center mb-12">
          Success Stories From Our Graduates
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-gray-600 italic">
            "This full stack course gave me the skills and confidence to land my
            dream job as a web developer!"
          </p>
          <p className="mt-4">- Sarah M., Software Engineer</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-100 py-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-8">
          Ready to Build Your Future?
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
          Enroll Now & Start Coding
        </button>
      </section>
    </div>
  );
};

export default CourseSyllabus;
