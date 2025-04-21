import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryForm from '../EnquiryForm';

// Individual FAQ Item
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg  overflow-hidden transition-all duration-300 mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-blue-50  border-blue-200 transition-colors duration-200"
        onClick={onClick}
      >
        <span className="font-medium text-[#0057D3]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="h-5 w-5 text-black" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-4 "
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: { duration: 0.2 }
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.2 }
            }}
          >
            <div className="py-4">
              <p className="text-gray-800 text-base font-medium">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ List Container
const FAQ = ({ faqs }) => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="space-y-2 ">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItem === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

// Full Section Component
const Faq = () => {
  const faqItems = [
    {
      question: 'What background do I need to join this course?',
      answer:
    'No prior experience in data science is required. We start from the basics, and anyone with an interest in data can join, whether you\'re from a technical or non-technical background.'
    },
    {
      question: 'What technologies will I learn?',
      answer:
   'You will primarily learn Python and R, which are widely used in data science for data manipulation, analysis, and machine learning tasks.'
    },
    {
      question: 'What tools and software will I use during the course?',
      answer:
 'You will work with tools like Jupyter Notebooks, Pandas, NumPy, Matplotlib, Seaborn, SQL, and TensorFlow to work with data and build machine learning models.'
    },
    {
      question: 'Is the course suitable for beginners?',
      answer:
        'Yes, the course is designed to take you from basic concepts to advanced techniques, making it perfect for beginners. No prior experience in data science or programming is required.'
    },
    {
      question: 'Will I be working on real-world projects?',
      answer:
    "Yes, the course includes hands-on projects that simulate real-world data science challenges. You'll work on data analysis, machine learning models, and data visualization projects to build your portfolio."
    },
    {
      question: ' How will this course help me in my career?',
      answer:
   'By the end of the course, you’ll be job-ready with a solid understanding of data analysis, machine learning, and data visualization. Our course also includes career support with job placement assistance and interview prep.'
    },
    {
        question: 'Will I receive a certificate upon completion',
        answer:
    'Yes, upon successfully completing the course, you will receive a certification from Adventure Learning, which will demonstrate your expertise in data science'
    },
  ];

  return (
    <section className="w-full mx-auto px-4 sm:px-6 py-16 bg-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-[#0057D3] tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Find answers to common questions about our courses.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-end gap-2 ">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 w-full lg:max-w-2xl  mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <FAQ faqs={faqItems} />
        </motion.div>
        <motion.div
          className="w-full lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;