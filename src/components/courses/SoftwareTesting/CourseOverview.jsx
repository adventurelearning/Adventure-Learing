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
        This course covers the essentials of Software Testing, equipping you with the skills to ensure the quality and 
        reliability of software applications. You'll learn various testing techniques, including unit, integration, and
         end-to-end testing, 
        along with tools for automation, test-driven development (TDD), and continuous integration practices.
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          WHAT YOU'LL LEARN:
        </h2>
        <ul className="space-y-4 list-inside text-gray-700 text-md">
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-[#0057D3] mr-3 flex-shrink-0" />
            Software Testing Techniques: Unit Testing, Integration Testing, End-to-End Testing
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Testing Frameworks: JUnit, Selenium, Mocha, Jest
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Test Automation: Automating test cases, CI/CD integration
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            APIs: Building and consuming RESTful APIs and GraphQL.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Bug Tracking: Identifying, reporting, and managing defects
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Version Control: Using Git and GitHub for test code management
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Best Practices: Test-driven development (TDD), behavior-driven development (BDD), and continuous testing
          </li>
        </ul>
      </div>

      {/* Who Should Enroll */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          WHO SHOULD ENROLL:
        </h2>
        <div className="flex items-start mb-4">
          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-mg text-gray-700">
          Aspiring QA engineers, software developers, or anyone interested in mastering the art of ensuring software quality through testing methodologies.
          </p>
        </div>
      </div>

      {/* Outcome */}
      <div>
        <h2 className="text-xl font-semibold text-[#0057D3] mb-4">
          OUTCOME:
        </h2>
        <div className="flex items-start mb-4">
          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
          <p className="text-md text-gray-700">
          By the end of the course, you'll be equipped with the skills to design, implement, and manage various software testing strategies, including manual and automated testing, ensuring the reliability and robustness of applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
