import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import EnquiryForm from '../EnquiryForm';

// FAQ Data (static, reusable)
const FAQ_ITEMS = [
    {
        question: 'Unlock Your Potential with Our Cloud Computing Course',
        answer:
            ' Join our industry-leading Cloud Computing program and gain hands-on experience with cutting-edge technologies.',
    },
    {
        question: 'Overview of the Cloud Computing Course',
        answer:
            "At Adventure Learning, our Cloud Computing course teaches you real-world cloud skills from the ground up. You will learn to build, manage, and deploy scalable systems on platforms like AWS, Azure, and Google Cloud. Through hands-on labs and real projects, you will gain the confidence to design secure cloud architectures and prepare for globally recognized certifications.",
    },
    {
        question: 'Best Cloud Computing Courses Online and Offline',
        answer:
            " At Adventure Learning, we offer the best Cloud Computing courses, available both online and offline, designed to suit your learning style. Whether you prefer the flexibility of online learning or the hands-on experience of classroom sessions, our course will equip you with the skills to become a Cloud Computing expert",
    },
    {
        question:'Why Choose Adventure Learning for the Cloud Computing Training',
        answer:
            "At Adventure Learning, we focus on a hands-on, practical approach to learning Cloud Computing. Our experienced instructors guide you through real-world projects, ensuring you're equipped with the skills needed to succeed in the Cloud Computing industry.",
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
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#0057D3] mb-2">Advanced Cloud Computing Certification Course</h2>
            <h4 className="font-normal text-lg text-gray-600 text-center pb-8">
                Kickstart your tech career with our Complete Advanced Cloud Computing
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