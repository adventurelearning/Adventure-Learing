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
  'No prior experience in cloud computing is required. We start from the fundamentals and guide you through real-world tools and practices'
    },
    {
      question: 'What cloud platforms will I learn?',
      answer:
  'You’ll learn Amazon Web Services (AWS), Microsoft Azure, and get an introduction to Google Cloud Platform (GCP).'
    },
    {
      question: ' What tools and software will I use during the course?',
      answer:
    'You’ll work with Jenkins, Terraform, Docker, Kubernetes, GitHub, CloudFormation, and monitoring tools like CloudWatch and Azure Monitor'
    },
    {
      question: 'Is the course suitable for beginners?',
      answer:
 'Yes. The course starts with basic concepts and gradually moves into intermediate and advanced topics, making it ideal for beginners and IT professionals.'
    },
    {
      question: 'Will I work on real-world projects?',
      answer:
 'Yes. You’ll deploy live apps, automate infrastructure, and create full cloud solutions using actual cloud accounts and tools.'
    },
    {
      question: 'How will this course help me in my career?',
      answer:
   'By the end of the course, you’ll be equipped for roles like Cloud Engineer, DevOps Engineer, and Solutions Architect. We also provide job assistance and certification guidance.'
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