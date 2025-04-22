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
      question: 'Do I need a coding background to join this course?',
      answer:
        'No, the course at Adventure Learning starts from the basics and builds up, so anyone can join, even without prior coding knowledge.',
    },
    {
      question: 'Will I learn both manual and automation testing?',
      answer:
   'Yes. The course is designed to teach you end-to-end QA including manual, automation, API, mobile, and performance testing'
    },
    {
      question: 'What tools will I work with during the course?',
      answer:
  'You’ll learn 20+ tools including Selenium, JUnit, Postman, Appium, JMeter, Cypress, Playwright, Jenkins, Git, and more'
    },
    {
      question: 'How long does the course take to complete?',
      answer:
    'It typically takes 3 to 6 months depending on your learning pace and whether you choose full-time or part-time study.'
    },
    {
      question: 'Will I get job support after completing the course?',
      answer:
   'Yes. We provide resume guidance, interview prep, mock tests, and help connect you with hiring companies'
    },
    {
      question: 'Is the course available online and offline?',
      answer:
   'Yes. You can attend online from anywhere or join offline classes at our learning centers.'
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
      <div className="flex flex-col items-center justify-center gap-6 mt-6">
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 w-full lg:max-w-5xl"
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
          {/* Second card content here */}
        </motion.div>
      </div>

    </section>
  );
};

export default Faq;