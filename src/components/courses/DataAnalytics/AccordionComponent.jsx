import React, { useState } from 'react';
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon, CloudIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import img1 from '../../../assets/Course/Coding.gif';
const AccordionList = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-md shadow-sm">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </div>
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-200 ${openItem === index ? 'transform rotate-180' : ''}`}
            />
          </div>
          {openItem === index && (
            <div className="p-4 border-t text-gray-700">
              <ol className="list-decimal list-inside space-y-2">
                {item.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionComponent = () => {
  const accordionItems = [
    {
      title: 'Introduction to Data Analytics',
      steps: [
        'Understand the role of a Data Analyst.',
        'Learn the key components of data analytics: Data Collection, Cleaning, Analysis, and Visualization.',
        'Overview of tools and technologies used in the course.',
        'Set up your data analytics environment with tools like Python, Jupyter, and relevant libraries.',
        'Learn best practices for clean and reproducible data analysis.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Core Data Analytics Concepts',
      steps: [
        'Learn about data types, variables, and operators in Python.',
        'Understand control flow and how to manipulate data.',
        'Explore data structures like lists, dictionaries, and dataframes.',
        'Learn data cleaning techniques, such as handling missing data and outliers.',
        'Explore basic statistics and probability concepts for data analysis.',
      ],
      icon: <CpuChipIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Advanced Data Analysis Techniques',
      steps: [
        'Explore advanced statistics and hypothesis testing.',
        'Learn about correlation, regression, and other advanced analysis methods.',
        'Understand multivariate analysis and feature engineering.',
        'Explore time-series analysis and forecasting.',
        'Learn to interpret and present statistical results effectively.',
      ],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Data Visualization',
      steps: [
        'Learn how to create insightful data visualizations using libraries like Matplotlib and Seaborn.',
        'Understand the principles of effective data visualization.',
        'Explore advanced visualization techniques, including interactive plots with Plotly.',
        'Visualize different types of data: categorical, time-series, geographical.',
        'Learn how to present findings visually to communicate data insights effectively.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Data Analytics with Python',
      steps: [
        'Learn to manipulate and analyze data using Python libraries like Pandas and NumPy.',
        'Understand how to perform data aggregation, filtering, and transformation.',
        'Apply data analysis techniques to clean and analyze large datasets.',
        'Learn how to implement and evaluate machine learning models.',
        'Use libraries like scikit-learn for predictive analytics and model evaluation.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Statistical Analysis & Hypothesis Testing',
      steps: [
        'Learn the fundamentals of statistical analysis: descriptive statistics, inferential statistics.',
        'Understand how to perform hypothesis testing and p-value analysis.',
        'Learn how to apply statistical tests like T-tests, ANOVA, Chi-Square tests.',
        'Explore Bayesian statistics and their applications in data analytics.',
        'Understand the significance of confidence intervals and statistical inference.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Version Control & Data Analytics Collaboration',
      steps: [
        'Master version control with Git for data analysis projects.',
        'Learn Git workflows, branching, and collaboration using GitHub.',
        'Understand the importance of reproducibility in data science and analytics.',
        'Collaborate on data projects with version-controlled code and data sharing.',
        'Learn to maintain clean, well-documented code for team collaboration.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-gray-500" />,
    },
    {
      title: 'Final Capstone Project & Deployment',
      steps: [
        'Plan and design a real-world data analytics project.',
        'Clean, preprocess, and analyze a large dataset.',
        'Apply statistical and machine learning techniques to gain insights.',
        'Deploy data visualizations and models to cloud platforms.',
        'Showcase your data analytics capabilities in a professional presentation.',
      ],
      icon: <CloudIcon className="h-6 w-6 text-teal-500" />,
    },
  ];
  

  return (
    <div className="container-fluid mx-auto my-10">
       <div className={`grid grid-cols-1 md:grid-cols-0 gap-4  p-10 rounded-md `}>
         <div className='bg-white rounded-md '>
                <AccordionList items={accordionItems} />
         </div>
         {/* <div className=' bg-inherit   flex items-center justify-center'>
             <img src={img1} alt="" className='w-96 h-96' />
         </div>
      */}
       </div>
    </div>
  );
};

export default AccordionComponent;