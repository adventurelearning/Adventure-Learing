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
        This course covers the essentials of Data Analytics, equipping you with the skills to analyze and 
        interpret complex data from start to finish. You'll learn key techniques in data collection, cleaning, exploration, statistical analysis, and visualization, 
        along with tools for working with databases, data manipulation, and deploying analytics solutions.
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
            Data Manipulation & Cleaning: Using tools like Python (Pandas, NumPy) to
             clean and manipulate datasets for analysis.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Data Visualization: Creating meaningful visualizations using tools like Tableau, 
            Power BI, or libraries like Matplotlib and Seaborn in Python.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Statistical Analysis: Applying statistical techniques with Python (SciPy, StatsModels) to analyze datasets and derive insights.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Data APIs: Extracting data through APIs and working with JSON and RESTful APIs for data fetching and integration.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Version Control: Using Git and GitHub for managing data analysis projects and collaborating with teams.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Data Deployment: Deploying data models and analytics dashboards on platforms like AWS, Heroku, or using Docker for containerization.
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
            Best Practices: Ensuring data integrity, security, effective data visualization, and proper documentation.
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
          Aspiring data analysts, business analysts, or anyone interested in learning how to analyze data, uncover trends, and generate insights for better decision-making.
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
          By the end of the course, you'll be able to collect, clean, and analyze data, visualize findings, and apply statistical techniques to draw meaningful conclusions and support business decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
