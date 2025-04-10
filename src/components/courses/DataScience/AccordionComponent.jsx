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
      title: 'Introduction to Data Science',
      steps: [
        'Understand the role of a Data Scientist.',
        'Learn about the key components of Data Science: Data Collection, Analysis, and Visualization.',
        'Overview of technologies and tools used in the course.',
        'Set up your data science environment with tools like Python, Jupyter Notebooks, and libraries like Pandas and NumPy.',
        'Learn best practices for clean, efficient, and reproducible data analysis.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Core Python for Data Science',
      steps: [
        'Learn Python programming basics for data analysis.',
        'Understand data types, variables, and operators in Python.',
        'Explore Python libraries like Pandas for data manipulation.',
        'Learn how to handle missing data, filter, and manipulate datasets.',
        'Work with data structures and perform operations on datasets.',
      ],
      icon: <CpuChipIcon className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Advanced Data Science Concepts',
      steps: [
        'Explore multivariate analysis and feature engineering.',
        'Learn about advanced statistical methods and hypothesis testing.',
        'Understand machine learning algorithms (Supervised and Unsupervised).',
        'Explore deep learning techniques and neural networks.',
        'Learn how to evaluate model performance and interpret results.',
      ],
      icon: <CodeBracketIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Data Visualization',
      steps: [
        'Learn the basics of data visualization using libraries like Matplotlib and Seaborn.',
        'Explore interactive data visualizations with Plotly and Dash.',
        'Understand best practices for creating meaningful, impactful charts.',
        'Visualize different data types: time series, categorical, geographical.',
        'Learn how to present your data insights effectively to stakeholders.',
      ],
      icon: <GlobeAltIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Machine Learning with Python',
      steps: [
        'Understand the fundamentals of machine learning: classification, regression, clustering.',
        'Learn how to implement machine learning models using scikit-learn.',
        'Perform data preprocessing, model training, and evaluation.',
        'Understand model selection, cross-validation, and hyperparameter tuning.',
        'Build and deploy machine learning models for real-world applications.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Deep Learning & Neural Networks',
      steps: [
        'Learn about neural networks and the architecture behind deep learning.',
        'Understand different types of deep learning models: CNNs, RNNs, GANs.',
        'Implement deep learning models using TensorFlow and Keras.',
        'Train models for tasks like image recognition and natural language processing.',
        'Evaluate model performance and optimize deep learning systems.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-pink-500" />,
    },
    {
      title: 'Version Control & Collaboration',
      steps: [
        'Master version control with Git and GitHub for data science projects.',
        'Learn Git workflows, branching, and merging.',
        'Collaborate on data science projects using GitHub repositories.',
        'Understand the importance of documentation and reproducibility in data science.',
        'Learn best practices for working in teams and managing projects.',
      ],
      icon: <RocketLaunchIcon className="h-6 w-6 text-gray-500" />,
    },
    {
      title: 'Final Capstone Project & Deployment',
      steps: [
        'Plan and design a real-world data science project.',
        'Clean, preprocess, and analyze a large dataset.',
        'Build machine learning models and evaluate them.',
        'Deploy your model as an API using tools like Flask or FastAPI.',
        'Showcase your data science skills and present your findings.',
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
         </div> */}
     
       </div>
    </div>
  );
};

export default AccordionComponent;