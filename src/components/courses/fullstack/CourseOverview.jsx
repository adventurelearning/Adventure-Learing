import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const CourseOverview = () => {
  return (
    <div className=" rounded-lg shadow-lg p-6  mx-auto">
      {/* Course Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          COURSE DESCRIPTION
        </h2>
        <p className="text-md text-gray-700 leading-relaxed">
          This course covers the essentials of Full-Stack Development, equipping you with the skills to build dynamic,
          responsive web applications from start to finish. You'll learn both frontend and backend technologies, including
          databases, APIs, and deployment strategies.
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          WHAT YOU'LL LEARN
        </h2>
        <ul className="space-y-4 list-inside text-gray-700 text-md">
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-[#0057D3] mr-3 flex-shrink-0" />
            Frontend Development: HTML, CSS, JavaScript, and frameworks like React or Angular.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Backend Development: Node.js, Express, Python (Django/Flask), or Java (Spring Boot).
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Databases: SQL (MySQL, PostgreSQL) and NoSQL (MongoDB).
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            APIs: Building and consuming RESTful APIs and GraphQL.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Version Control: Git and GitHub for code management.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Deployment: Hosting applications on cloud platforms (AWS, Heroku) and using Docker.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Best Practices: Authentication, security, debugging, and testing.
          </li>
        </ul>
      </div>

      {/* Who Should Enroll */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          WHO SHOULD ENROLL
        </h2>
        <div className="flex items-start mb-4">
          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-mg text-gray-700">
            Aspiring web developers, software engineers, or anyone interested in mastering both the client and server sides of web
            development.
          </p>
        </div>
      </div>

      {/* Outcome */}
      <div>
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          OUTCOME
        </h2>
        <div className="flex items-start mb-4">
          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-md text-gray-700">
            By the end of the course, you'll be able to design, develop, and deploy full-stack web applications independently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
