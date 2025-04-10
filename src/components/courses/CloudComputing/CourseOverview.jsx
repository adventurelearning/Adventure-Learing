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
       Aspiring cloud engineers, IT professionals, or anyone interested in mastering cloud infrastructure, deployment, and management of scalable systems.
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
            Cloud Platforms: AWS, Azure, Google Cloud
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Cloud Architecture: Designing scalable, reliable systems
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Infrastructure Management: Virtual machines, containers, Kubernetes
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Storage Solutions: Cloud storage, databases (SQL/NoSQL)
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Networking: VPCs, load balancing, security groups
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            DSecurity: Encryption, identity management, firewalls
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Monitoring & Scaling: Auto-scaling, logging, performance monitoring
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
          Aspiring cloud engineers, IT professionals, or anyone interested in mastering cloud infrastructure, deployment, and management of scalable systems.
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
          By the end of the course, you'll be able to design, deploy, and manage applications on cloud platforms, ensuring scalability, reliability, and security while utilizing cloud services and resources efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
