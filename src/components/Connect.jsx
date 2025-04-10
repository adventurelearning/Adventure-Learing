function Connect() {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-200 to-white py-8 md:py-16 rounded-md text-center px-4">
                <h1 
                    data-aos="fade-down" 
                    data-aos-delay="100"
                    className="text-3xl  font-semibold text-[#0057D3] mb-4"
                >
                    Get Your Free Demo Class for Our Online Courses. <br className="hidden md:block" /> Let's Connect!
                </h1>
                <h4 
                    data-aos="fade-down" 
                    data-aos-delay="200"
                    className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8"
                >
                    Discover our expert instructors, interactive learning environment,
                    <br className="hidden md:block" />
                    and flexible schedules designed to fit your needs.
                </h4>
                <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="bg-[#0057D3] hover:bg-white text-white hover:text-[#0057D3] border hover:border-[#0057D3] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md text-sm transition-all duration-300 transform hover:scale-105"
                >
                    CONNECT WITH US
                </button>
            </div>
        </>
    )
}

export default Connect;