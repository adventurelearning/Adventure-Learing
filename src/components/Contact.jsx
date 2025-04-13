function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-4 md:py-12">
                <h1 
                    data-aos="fade-down" 
                    className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#0057D3] mb-4"
                >
                    Contact Us
                </h1>
                <div className="max-w-2xl mx-auto">
                    <h3 
                        className="font-normal text-base sm:text-lg text-gray-600"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        Have a question about your course? Reach out, and our team will be happy to assist you every step of the way!
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-8 py-8 md:py-12">
                {/* Email Address */}
                <div 
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                        <i className="bi bi-envelope text-3xl text-[#0057D3]"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Email Address</h3>
                    <p className="text-sm text-gray-600 text-center">info@adventurelearning.in</p>
                </div>

                {/* Phone Number */}
                <div 
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                        <i className="bi bi-telephone text-3xl text-[#0057D3]"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone Number</h3>
                    <p className="text-sm text-gray-600 text-center">+91 98844 45571</p>
                    <p className="text-sm text-gray-600 text-center">+91 81110 05300</p>
                </div>

                {/* Office Location */}
                <div 
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                        <i className="bi bi-geo-alt text-3xl text-[#0057D3]"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Office Location</h3>
                    <p className="text-sm text-gray-600 text-center">Gandhipuram, Coimbatore</p>
                    <p className="text-sm text-gray-600 text-center">Tambaram, Chennai</p>
                </div>

                {/* Work Day */}
                <div 
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <div className="rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4">
                        <i className="bi bi-alarm text-3xl text-[#0057D3]"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Work Day</h3>
                    <p className="text-sm text-gray-600 text-center">Mon - Fri: 09:00AM - 7:00PM</p>
                    <p className="text-sm text-gray-600 text-center">Sat - Sun: 09:00AM - 5:00PM</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;