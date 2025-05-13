import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import API from "../service/API";
import { FiBook, FiCode, FiUser, FiCheckCircle, FiAward, FiBriefcase, FiLayers, FiSettings, FiMonitor } from 'react-icons/fi';
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';

const Whatwedo = () => {
    const [activeSection, setActiveSection] = useState('whoweare');

    const renderContent = () => {
        switch (activeSection) {
            case 'whoweare':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                                <FiAward className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Who We Are</h2>
                        </div>
                        <div className="space-y-5">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    <span className='font-semibold text-gray-900'>Adventure Learning</span> is one of India's leading educational
                                    technology companies, pioneering a <span className='font-semibold text-gray-900'> 100% hands-on, experience-based learning model </span>that
                                    truly prepares learners for the real world.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    With a strong presence in both  <span className='font-semibold text-gray-900'>classroom
                                        and online environments,</span> we bridge the gap between academia and industry by
                                    aligning our programs with real-time market needs. Every course is designed
                                    to equip learners with  <span className='font-semibold text-gray-900'> practical, job-ready skills </span>that employers value.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    At Adventure Learning, we don't just
                                    teach—we  <span className='font-semibold text-gray-900'>transform education into meaningful careers.</span>
                                    We're crafting  <span className='font-semibold text-gray-900'>intelligent
                                        learning ecosystems </span>that adapt, evolve, and inspire, empowering learners
                                    to thrive in today's dynamic world.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            case 'whatwedo':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                                <FiLayers className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">What We Do</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            We provide comprehensive training and educational solutions tailored to meet industry demands.
                            Our programs focus on practical skills development and real-world applications.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                                    <FiBook className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Industry-Aligned Curriculum</h3>
                                <p className="text-gray-600">Courses designed with direct input from industry experts to ensure relevance and up-to-date content.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                                    <FiCode className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Hands-On Learning</h3>
                                <p className="text-gray-600">Practical projects and real-world scenarios to build job-ready skills with immediate applicability.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                                    <FaChalkboardTeacher className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Mentors</h3>
                                <p className="text-gray-600">Learn from industry professionals with years of practical experience in their fields.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="bg-gradient-to-r from-blue-100 to-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                                    <FiBriefcase className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Career Support</h3>
                                <p className="text-gray-600">Resume building, interview preparation, and job placement assistance to launch your career.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            case 'whocanconnect':
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                                <FiUser className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Who Can Attend This Course</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Upskilling Professionals",
                                    icon: <FiSettings className="w-5 h-5 text-blue-600" />,
                                    desc: "Looking to advance in your current career path"
                                },
                                {
                                    title: "Non-IT to IT Transition",
                                    icon: <FaLaptopCode className="w-5 h-5 text-blue-600" />,
                                    desc: "Wanting to switch to tech from other industries"
                                },
                                {
                                    title: "Overcome Career Gap",
                                    icon: <FiCheckCircle className="w-5 h-5 text-blue-600" />,
                                    desc: "Returning to workforce after a break"
                                },
                                {
                                    title: "Pursuing College Students",
                                    icon: <FaGraduationCap className="w-5 h-5 text-blue-600" />,
                                    desc: "Wanting to gain practical skills alongside studies"
                                },
                                {
                                    title: "Recent Graduates",
                                    icon: <FiMonitor className="w-5 h-5 text-blue-600" />,
                                    desc: "Seeking to enhance employability after graduation"
                                },
                                {
                                    title: "Freelancers",
                                    icon: <FiBriefcase className="w-5 h-5 text-blue-600" />,
                                    desc: "Looking to expand your service offerings"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                                >
                                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        email: "",
        courses: "",
        training_mode: "",
        message: "",
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const successVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
        exit: { scale: 0.8, opacity: 0 },
    };

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const courses = [
        { id: "Full_Stack", name: "Full Stack Development" },
        { id: "data_science", name: "Data Science" },
        { id: "Embedded_system", name: "Embedded System" },
        { id: "data_analytics", name: "Data Analytics" },
        { id: "cloud_computing", name: "Cloud Computing" },
        { id: "software_testing", name: "Software Testing" },
    ];

    const trainingModes = [
        { id: "online", name: "Online Training", icon: <FiMonitor className="w-5 h-5" /> },
        { id: "offline", name: "Offline Training", icon: <FiBriefcase className="w-5 h-5" /> },
        // { id: "hybrid", name: "Hybrid Mode", icon: <FiSettings className="w-5 h-5" /> }
    ];

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanedPhone = formData.phone_number.replace(/\D/g, "");
        if (!formData.phone_number.trim()) {
            newErrors.phone_number = "Phone number is required";
            isValid = false;
        } else if (!phoneRegex.test(cleanedPhone)) {
            newErrors.phone_number = "Invalid mobile number (Indian format)";
            isValid = false;
        }

        if (!formData.courses) {
            newErrors.courses = "Please select a course";
            isValid = false;
        }

        if (!formData.training_mode) {
            newErrors.training_mode = "Please select training mode";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);

        try {
            await toast.promise(API.post("register/", formData), {
                loading: "Submitting registration...",
                success: <b>Registration successful!</b>,
                error: <b>Registration failed. Please try again.</b>,
            });

            setSubmitted(true);
            setFormData({
                name: "",
                phone_number: "",
                email: "",
                courses: "",
                training_mode: "",
                message: "",
            });
            
        } catch (error) {
            console.error("Registration error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={successVariants}
                    className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-4 border border-blue-100"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg
                                className="w-16 h-16 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Thank You for Registering!
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We've received your registration for{" "}
                        <span className="font-semibold">
                            {courses.find((c) => c.id === formData.courses)?.name ||
                                "the course"}
                        </span>
                        . Our team will contact you shortly with more information.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-blue-600 text-sm">What's next?</p>
                        <ul className="text-left text-sm text-gray-600 mt-2 space-y-1">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                                You'll receive a confirmation email
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                                Our counselor will contact you within 24 hours
                            </li>
                        </ul>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-colors shadow-md w-full"
                    >
                        Register Another
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-12 lg:py-16 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Content Section */}
                    <div className="lg:flex-1 bg-white rounded-xl shadow-sm p-6 lg:p-8 border border-gray-100">
                        <nav className="flex flex-col sm:flex-row gap-1 mb-8 bg-gray-100 p-1 rounded-xl">
                            {[
                                { id: 'whoweare', label: 'Who We Are', icon: <FiAward className="w-5 h-5" /> },
                                { id: 'whatwedo', label: 'What We Do', icon: <FiLayers className="w-5 h-5" /> },
                                { id: 'whocanconnect', label: 'Who Can Attend This Course', icon: <FiUser className="w-5 h-5" /> }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`flex items-center px-4 py-3 rounded-lg text-left sm:text-center transition-all ${activeSection === tab.id
                                        ? 'bg-white shadow-sm text-blue-600 font-semibold'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveSection(tab.id)}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                        <div className="p-2 sm:p-4">
                            <AnimatePresence mode="wait">
                                {renderContent()}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="flex flex-col items-center justify-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="bg-white w-full max-w-lg rounded-xl shadow-sm p-6 lg:p-8 border border-gray-100"
                        >
                            <motion.div variants={itemVariants}>
                                <div className="flex items-center mb-4">
                                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full mr-3"></div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">
                                            Get Started Today
                                        </h2>
                                        <p className="text-blue-600 text-sm font-medium">
                                            Unlock more info - submit your details
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div variants={itemVariants}>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            whileFocus={{ scale: 1.01 }}
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiUser className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full pl-10 pr-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={itemVariants}>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            whileFocus={{ scale: 1.01 }}
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full pl-10 pr-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                      <motion.div variants={itemVariants}>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div
                                            className="relative"
                                            whileHover={{ scale: 1.01 }}
                                            whileFocus={{ scale: 1.01 }}
                                        >
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <span className="text-gray-500">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone_number"
                                                name="phone_number"
                                                value={formData.phone_number}
                                                onChange={(e) => {
                                                    if (e.target.value.length <= 10) {
                                                        handleChange(e);
                                                    }
                                                }}
                                                className={`w-full pl-11 pr-4 py-2 border ${errors.phone_number ? "border-red-500" : "border-gray-300"
                                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                                                placeholder="Enter your number"
                                            />
                                        </motion.div>
                                        {errors.phone_number && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.phone_number}
                                            </p>
                                        )}
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label
                                            htmlFor="courses"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Select Course <span className="text-red-500">*</span>
                                        </label>
                                        <motion.div whileHover={{ scale: 1.01 }}>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiBook className="text-gray-400" />
                                                </div>
                                                <select
                                                    id="courses"
                                                    name="courses"
                                                    value={formData.courses}
                                                    onChange={handleChange}
                                                    required
                                                    className={`w-full pl-10 pr-4 py-2 border ${errors.courses ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiYjMzk7IzZCN0I4OSYjMzk7IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem] transition-all`}
                                                >
                                                    <option value="">-- Select a course --</option>
                                                    {courses.map((course) => (
                                                        <option key={course.id} value={course.id}>
                                                            {course.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {errors.courses && (
                                                <p className="text-red-500 text-xs mt-1">{errors.courses}</p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants}>
                                    <span className="block text-sm font-medium text-gray-700 mb-2">
                                        Training Mode <span className="text-red-500">*</span>
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {trainingModes.map((mode) => (
                                            <motion.label
                                                key={mode.id}
                                                whileHover={{ scale: 1.02 }}
                                                className={`flex flex-col items-center p-3 rounded-lg transition-all cursor-pointer border ${formData.training_mode === mode.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="training_mode"
                                                    value={mode.id}
                                                    checked={formData.training_mode === mode.id}
                                                    onChange={handleChange}
                                                    required
                                                    className="hidden"
                                                />
                                                <div className={`p-2 rounded-full mb-2 ${formData.training_mode === mode.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                                                    {mode.icon}
                                                </div>
                                                <span className={`text-sm font-medium ${formData.training_mode === mode.id ? 'text-blue-600' : 'text-gray-700'}`}>{mode.name}</span>
                                            </motion.label>
                                        ))}
                                    </div>
                                    {errors.training_mode && (
                                        <p className="text-red-500 text-xs mt-1">{errors.training_mode}</p>
                                    )}
                                </motion.div>
                                  {/* <motion.div variants={itemVariants}>
                                    <span className="block text-sm font-medium text-gray-700 mb-2">
                                        Training Mode <span className="text-red-500">*</span>
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <motion.label
                                            whileHover={{ scale: 1.02 }}
                                            className={`flex items-center p-3 rounded-lg transition-colors cursor-pointer border ${formData.training_mode === "online" ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                                        >
                                            <input
                                                type="radio"
                                                name="training_mode"
                                                value="online"
                                                checked={formData.training_mode === "online"}
                                                onChange={handleChange}
                                                required
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            />
                                            <div className="ml-3">
                                                <span className="block text-gray-700 font-medium">Online Training</span>
                                            </div>
                                        </motion.label>
                                        <motion.label
                                            whileHover={{ scale: 1.02 }}
                                            className={`flex items-center p-3 rounded-lg transition-colors cursor-pointer border ${formData.training_mode === "offline" ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                                        >
                                            <input
                                                type="radio"
                                                name="training_mode"
                                                value="offline"
                                                checked={formData.training_mode === "offline"}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                            />
                                            <div className="ml-3">
                                                <span className="block text-gray-700 font-medium">Offline Training</span>
                                            </div>
                                        </motion.label>
                                    </div>
                                    {errors.training_mode && (
                                        <p className="text-red-500 text-xs mt-1">{errors.training_mode}</p>
                                    )}
                                </motion.div> */}


                                <motion.div variants={itemVariants}>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Additional Comments
                                    </label>
                                    <motion.div
                                        whileHover={{ scale: 1.01 }}
                                        whileFocus={{ scale: 1.01 }}
                                    >
                                        <div className="relative">
                                            <div className="absolute top-3 left-3">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                                </svg>
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="Any specific requirements or questions?"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="pt-2">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={isLoading}
                                        className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all flex items-center justify-center ${isLoading ? "bg-blue-600" : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md"
                                            }`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg>
                                                Enroll Now
                                            </>
                                        )}
                                    </motion.button>
                                </motion.div>
                                <motion.div variants={itemVariants} className="text-center pt-2">
                                    <p className="text-xs text-gray-500">
                                        By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                    </p>
                                </motion.div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whatwedo;