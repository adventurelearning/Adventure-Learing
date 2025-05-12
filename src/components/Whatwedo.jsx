import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import API from "../service/API";
import group1 from '../assets/img/Group1.svg';
import group2 from '../assets/img/Group2.svg';
import group3 from '../assets/img/Group3.svg';
import group4 from '../assets/img/Group4.svg';
import group5 from '../assets/img/Group5.svg';
import group6 from '../assets/img/Group6.svg';

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
                        <h2 className="text-3xl font-semibold text-blue-600">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed"><span className='text-black text-bold'>Adventure Learning</span> is one of India's leading educational
                            technology companies, pioneering a <span className='text-black text-bold'> 100% hands-on, experience-based learning model </span>that
                            truly prepares learners for the real world.</p>
                        <p className="text-gray-600 leading-relaxed">With a strong presence in both  <span className='text-black text-bold'>classroom
                            and online environments,  </span>  we bridge the gap between academia and industry by
                            aligning our programs with real-time market needs. Every course is designed
                            to equip learners with  <span className='text-black text-bold'> practical, job-ready skills </span>that employers value.</p>
                        <p className="text-gray-600 leading-relaxed">At Adventure Learning, we don't just
                            teach—we  <span className='text-black text-bold'>transform education into meaningful careers.</span>
                            We're crafting  <span className='text-black text-bold'>intelligent
                                learning ecosystems </span>that adapt, evolve, and inspire, empowering learners
                            to thrive in today's dynamic world.</p>
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
                        <h2 className="text-3xl font-semibold text-blue-600">What We Do</h2>
                        <p className="text-gray-600 leading-relaxed">We provide comprehensive training and educational solutions tailored to meet industry demands. Our programs focus on practical skills development and real-world applications.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-sm"
                            >
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">Industry-Aligned Curriculum</h3>
                                <p className="text-gray-600">Courses designed with direct input from industry experts to ensure relevance.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-sm"
                            >
                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">Hands-On Learning</h3>
                                <p className="text-gray-600">Practical projects and real-world scenarios to build job-ready skills.</p>
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
                        className="space-y-6 px-4 sm:px-0" // Added horizontal padding for mobile
                    >
                        <div className="flex flex-col gap-4 sm:gap-4"> {/* Smaller gap on mobile */}
                            {[
                                { image: group1 },
                                { image: group2 },
                                { image: group3 },
                                { image: group4 },
                                { image: group5 },
                                { image: group6 }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:border-blue-300 transition-all"
                                >
                                    <div className="md:w-[60%] lg:w-[60%] sm:w-[60%] sm:h-10 md:h-12 lg:h-14  overflow-hidden"> {/* Full width on mobile, 60% on larger screens */}
                                        <img
                                            src={item.image}
                                            alt={`group${index + 1}`}
                                            className="w-full h-full" // Fixed className typo and made full width
                                        />
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
                        <svg
                            className="w-20 h-20 mx-auto text-green-500"
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
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
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
                        <nav className="flex flex-col sm:flex-row gap-1 mb-8 bg-gray-100 p-1 rounded-lg">
                            {[
                                { id: 'whoweare', label: 'Who We Are' },
                                { id: 'whatwedo', label: 'What We Do' },
                                { id: 'whocanconnect', label: 'Who Can Connect' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`px-4 py-3 rounded-md text-left sm:text-center transition-all ${activeSection === tab.id
                                            ? 'bg-white shadow-sm text-blue-600 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveSection(tab.id)}
                                >
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
                                <div className="flex items-center mb-2">
                                    <div className="w-2 h-6 bg-blue-600 rounded-full mr-3"></div>
                                    <p className="text-blue-600 text-xl font-bold">
                                        Unlock more info - submit your details
                                    </p>
                                </div>
                                <p className="text-gray-500 text-sm mb-6">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
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
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                                placeholder="Enter your full name"
                                            />
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
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                                placeholder="Enter your email"
                                            />
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
                                            <select
                                                id="courses"
                                                name="courses"
                                                value={formData.courses}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-2 border ${errors.courses ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiYjMzk7IzZCN0I4OSYjMzk7IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5rem] transition-all`}
                                            >
                                                <option value="">-- Select a course --</option>
                                                {courses.map((course) => (
                                                    <option key={course.id} value={course.id}>
                                                        {course.name}
                                                    </option>
                                                ))}
                                            </select>
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
                                </motion.div>

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
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Any specific requirements or questions?"
                                        />
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
                                            "Enroll Now"
                                        )}
                                    </motion.button>
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