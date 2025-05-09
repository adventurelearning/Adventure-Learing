import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryForm from '../EnquiryForm';

// FAQ Data (static, reusable)
const FAQ_ITEMS = [
    {
        question: 'Unlock Your Potential with Our Software Testing Course',
        answer:
            'Join our industry-leading Software Testing program and gain hands-on experience with cutting-edge technologies.',
    },
    {
        question: 'Overview of the Software Testing Course',
        answer:
            " At Adventure Learning, our Software Testing course is built for learners who want real, job-ready skills. You'll learn to test software across various environments, from web and mobile to APIs and enterprise systems. Whether you're new to QA or want to sharpen your automation and performance testing skills, this course walks you through everything — with real-world projects and tools used in top companies.",
    },
    {
        question: 'Best Software Testing Courses Online and Offline',
        answer:
            "We offer the best Software Testing training, available both online and offline. Learn at your pace or attend live sessions, and gain practical exposure to industry-standard tools. Whether you’re learning from home or in a classroom, this course will prepare you for a successful QA career.",
    },
    {
        question:'Why Choose Adventure Learning for the Software Testing Programming Course',
        answer:
            "Our experienced instructors take a practical, hands-on approach with real-world projects to equip you with in-demand Software Testing skills.",
    },
];

// Individual FAQ Item (with accessibility improvements)
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <div className="border border-blue-200 rounded-lg overflow-hidden transition-all duration-300 mb-4">
            <div
                className="flex items-center justify-between p-4 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                role="button"
            >
                <span className="font-medium text-start text-[#0057D3]">{question}</span>
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
                        id={`faq-content-${index}`}
                        className="px-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: 'auto',
                            transition: { duration: 0.3, ease: "easeInOut" }
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="py-4">
                            <p className="text-gray-800 text-start text-base font-medium">{answer}</p>
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
        <div className="space-y-2">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openItem === index}
                    onClick={() => toggleItem(index)}
                    index={index}
                />
            ))}
        </div>
    );
};

// Full Section Component
const Overview = () => {
    return (
        <section className="w-full mx-auto px-4 sm:px-6 py-8 bg-blue-100 rounded-xl">
           
            <div className="flex flex-col lg:flex-row items-start justify-end gap-2">
            
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 w-full lg:max-w-2xl "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-2">Advanced Software Testing Certification Course</h2>
            <h4 className="font-normal text-lg text-gray-600 text-center pb-8">
                Kickstart your tech career with our Complete Advanced Software Testing
            </h4>
                    <FAQ faqs={FAQ_ITEMS} />
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

export default Overview;