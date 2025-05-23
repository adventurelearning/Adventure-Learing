import React from 'react';
import logo from "../assets/logo-dark.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="bg-gradient-to-b from-[#0057D3]  to-[#0A1D39] text-white py-4 mt-10 sm:mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {/* Explore Section */}
                <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-4">Explore</h4>
                    <ul className="space-y-1 sm:space-y-2 text-sm">
                        <li><Link smooth to="/#home" className="hover:text-gray-300">Home</Link></li>
                        <li><Link smooth to="/#courses" className="hover:text-gray-300">Courses</Link></li>
                        <li><RouterLink to="/onlinetraining" className="hover:text-gray-300">Online Training</RouterLink></li>
                        <li><RouterLink to="/corporate" className="hover:text-gray-300">Corporate</RouterLink></li>
                        <li><RouterLink to="/blogs" className="hover:text-gray-300">Resources</RouterLink></li>
                        <li><RouterLink to="/contact" className="hover:text-gray-300">Contact</RouterLink></li>
                    </ul>
                </div>

                {/* Trending Courses Section */}
                <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-4">Trending Courses</h4>
                    <ul className="space-y-1 sm:space-y-2 text-sm">
                        <li><RouterLink to="/course/full-stack-development" className="hover:text-gray-300">Full-Stack Development</RouterLink></li>
                        <li><RouterLink to="/course/embedded-system" className="hover:text-gray-300">Embedded System</RouterLink></li>
                        <li><RouterLink to="/course/data-science" className="hover:text-gray-300">Data Science</RouterLink></li>
                        <li><RouterLink to="/course/cloud-computing" className="hover:text-gray-300">Cloud Computing</RouterLink></li>
                        <li><RouterLink to="/course/software-testing" className="hover:text-gray-300">Software Testing</RouterLink></li>
                        <li><RouterLink to="/course/data-analytics" className="hover:text-gray-300">Data Analytics</RouterLink></li>
                    </ul>
                </div>

                {/* All Categories Section */}
                <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-4">All Categories</h4>
                    <ul className="space-y-1 sm:space-y-2 text-sm">
                        <li><Link smooth to="/#techcard" className="hover:text-gray-300">Our Technology</Link></li>
                        <li><Link smooth to="/#courses" className="hover:text-gray-300">Our Top Class Courses</Link></li>
                        <li><Link smooth to="/#whyAvd" className="hover:text-gray-300">Why Adventure</Link></li>
                        <li><Link smooth to="/#companies" className="hover:text-gray-300">Our Hiring Companies</Link></li>
                        <li><Link smooth to="/#new&blogs" className="hover:text-gray-300">News & Blogs</Link></li>
                        <li><Link smooth to="/#review" className="hover:text-gray-300">Our Testimonials</Link></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-2 sm:mb-4">Contact Us</h4>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <i className="bi bi-telephone text-xl sm:text-2xl"></i>
                            <div className="ml-3 sm:ml-5 text-sm">
                                <p className='pt-1'>Coimbatore: +91-9884445571</p>
                                <p className='pt-1'>Chennai: +91-8111005300</p>
                                <p className='pt-1'>Hire from us: +91-9884220600</p>
                            </div>
                        </div>

                        <div className="flex items-start text-sm">
                            <i className="bi bi-geo-alt text-xl sm:text-2xl mt-1 mr-3 sm:mr-5"></i>
                            <div className="space-y-4">
                                <a
                                    href="https://www.google.com/maps?q=No:121/4,7th+Street,Tatabad,Gandhipuram,Coimbatore,Tamil+Nadu-641012"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-gray-300"
                                >
                                    <p>
                                        No:121/4, 7th Street,
                                        <span className="block">Tatabad, Gandhipuram,</span>
                                        Coimbatore, Tamil Nadu - 641012.
                                    </p>
                                </a>
                                <a
                                    href="https://www.google.com/maps?q=First+floor,No.14,Kamarajar+Street,West+Tambaram,Chennai,Tamil+Nadu+600045"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-gray-300"
                                >
                                    <p>
                                        First floor, No.14,
                                        <span className="block">Kamarajar Street, West Tambaram,</span>
                                        Chennai, Tamil Nadu - 600045.
                                    </p>
                                </a>
                            </div>
                        </div>



                        <div className="flex items-center text-sm">
                            <i className="bi bi-envelope text-xl sm:text-2xl"></i>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@adventurelearning.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 sm:ml-5 flex items-center gap-1 hover:text-gray-300"
                            >
                                info@adventurelearning.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-48 sm:w-32 lg:w-48 h-auto object-contain logo-footer"
                        />
                        <h4 className="text-xs sm:text-sm mt-2">
                           Adventure Learning is one of India’s leading educational technology companies, pioneering <span className='sm:block'>a 100% hands-on, 
                           experience-based learning model that truly prepares learners for the real world.</span></h4>
                    </div>
                    <div>
                        <h4 className="font-bold text-base sm:text-lg text-white mb-2">Follow us</h4>
                        <div className="flex items-center space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61570475203188&mibextid=ZbWKwL" className="bg-[#3275fc] text-white rounded-full p-2" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://www.instagram.com/adventure_learning_kovai/" className="bg-gradient-to-r from-purple-500 to-yellow-700 text-white rounded-full p-2" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.youtube.com/@Adventure_Learning" className="bg-[#FF0000] text-white rounded-full p-2" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 border-t mt-6 sm:mt-10 border-white"></div>

            <div className="flex flex-col sm:flex-row mt-3 sm:mt-4 text-xs sm:text-sm justify-between w-full px-4">
                <h5 className="mb-2 sm:mb-0">©2025 Adventure Technology Solutions Pvt Ltd.</h5>
                <div className='flex space-x-3 sm:space-x-4'>
                    <h5>
                        <button onClick={() => navigate('/TandC')} className="hover:text-gray-300 underline">Terms & Conditions</button>
                        <span> | </span>
                        <Link to="/PrivacyPolicy" className="hover:text-gray-300 underline">Privacy Policy</Link>
                    </h5>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
