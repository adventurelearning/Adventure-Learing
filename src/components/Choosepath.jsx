function Choosepath() {
    return (
        <div className="bg-gray-50 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div>
                    <h1 data-aos="fade-down" className="font-semibold text-2xl sm:text-3xl lg:text-3xl text-[#0057D3]">
                        Unlock Your Potential with Our Flexible Classes!
                    </h1>
                </div>

                <div className="mt-4 mb-8 sm:mb-12">
                    <h4 className="font-normal text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose Between Individual Mentoring or Live Online Training
                    </h4>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 cursor-pointer">
                    {/* One-on-One Training Card */}
                    <div className="w-full sm:w-96 md:w-80 lg:w-96 relative rounded-lg shadow-none lg:shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300">
                        <div className="card w-full h-full">
                           <a href="/Register"> <img 
                                src='https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg' 
                                className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                                alt="One-on-One Training"
                            /></a>
                            <div className="p-4 sm:p-5 bg-white">
                                <p className="text-lg font-semibold text-black flex items-center justify-center">
                                    One-on-One Training
                                    <span className="ml-2 text-[#0057D3]">
                                        <i className="bi bi-arrow-up-right-square"></i> 
                                    </span>
                                </p>
                            </div>
                            
                            <div className="content absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0057D3] to-blue-600 text-gray-200 p-6 flex flex-col justify-center rounded-lg pointer-events-none transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"> 
                                <h3 className="text-xl font-bold text-white mb-3">Virtual Class</h3>
                                <p className="text-sm sm:text-base mb-6">
                                    Get personalized, flexible 1:1 online training tailored to your goals, pace, and learning style!
                                </p>
                                <button                                   
                                    className="bg-white text-[#0057D3] border font-semibold py-2 px-6 rounded-md text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mx-auto"
                                >
                                 <a href="/contact"> Enroll Now</a>  
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Online-Live Training Card */}
                    <div className="w-full sm:w-96 md:w-80 lg:w-96 relative rounded-lg shadow-none lg:shadow-xl lg:hover:shadow-2xl overflow-hidden group transition-all duration-300">
                        <div className="card w-full h-full">
                        <a href="/Register"> <img 
                                src='https://img.freepik.com/premium-vector/elearning-banner-online-education-home-schooling_572614-400.jpg' 
                                className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
                                alt="Online Live Training"
                            />
                            </a>
                            <div className="p-4 sm:p-5 bg-white">
                                <p className="text-lg font-semibold text-black flex items-center justify-center">
                                    Online-Live 
                                    <span className="ml-2 text-[#0057D3]">
                                        <i className="bi bi-arrow-up-right-square"></i>
                                    </span>
                                </p>
                            </div>
                            
                            <div className="content absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0057D3] to-blue-600 text-gray-200 p-6 flex flex-col justify-center rounded-lg pointer-events-none transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out"> 
                                <h3 className="text-xl font-bold text-white mb-3">Online Class</h3>
                                <p className="text-sm sm:text-base mb-6">
                                    Achieve your goals with flexible, personalized online training for your pace and learning style!
                                </p>
                                <button                                    
                                    className="bg-white text-[#0057D3] border font-semibold py-2 px-6 rounded-md text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mx-auto">
                                    <a href="/contact"> Enroll Now</a>  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Choosepath;