import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryForm from '../EnquiryForm';

// FAQ Data (static, reusable)
const FAQ_ITEMS = [
    {
        question: 'Unlock Your Potential with Our Full Stack Course',
        answer:
            'Join our industry-leading full stack development program and gain hands-on experience with cutting-edge technologies.',
    },
    {
        question: 'Overview of Full Stack Web Development Course',
        answer:
            "At Adventure Learning, this course is built for real-world results, not just theory. You’ll learn how websites and web apps are actually built, from the front-end interfaces to back-end logic and databases. No fluff, just hands-on skills taught in a way that actually sticks. Whether you're new to coding or switching careers, we’ll help you build like a pro, step by step.",
    },
    {
        question: 'Best Fullstack development course available in online and offline',
        answer:
            "At Adventure Learning, we offer the best Full Stack Development course, available both online and offline, tailored to suit different learning preferences. Whether you prefer the convenience of online learning or the interactive experience of classroom sessions, our course ensures you gain the skills needed to become a proficient full-stack developer.",
    },
    {
        question: 'Why Choose Adventure Learning for Full Stack Web Development Training',
        answer:
            "At Adventure Learning, we believe in a practical, hands-on approach to learning Full Stack Web Development. Our experienced instructors not only teach the theory but guide you through real-world projects to ensure you’re ready for the job market.",
    },
];

// Individual FAQ Item (with accessibility improvements)
const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <div className="border border-blue-200 rounded-lg overflow-hidden transition-all duration-300 mb-4">
            <div
                className="flex items-center text-start justify-between p-4 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                role="button"
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
                            <p className="text-gray-800 text-base text-justify font-medium">{answer}</p>
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
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-2">Full Stack Development Certification Course</h2>
            <h4 className="font-normal text-lg text-gray-600 text-center pb-8">
                Kickstart your tech career with our Complete Web Development Program
            </h4>
                    <FAQ faqs={FAQ_ITEMS} />
                </motion.div>
                <motion.div
                    className="w-full lg:max-w-lg "
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