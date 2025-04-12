function Connect() {
    return (
        <>
           <div className="bg-gradient-to-b from-blue-200 to-white py-8 md:py-16 rounded-md text-center px-4">
    <h1 
        data-aos="fade-down" 
        data-aos-delay="100"
        className="text-3xl font-semibold text-[#0057D3] mb-4"
    >
        Have Any Questions or Doubts? <br className="hidden md:block" /> We're Here to Help!
    </h1>
    <h4 
        data-aos="fade-down" 
        data-aos-delay="200"
        className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8"
    >
        Whether it's about our courses, schedules, or instructors — 
        <br className="hidden md:block" />
        feel free to reach out and get the clarity you need.
    </h4>
    <button
        data-aos="fade-up"
        data-aos-delay="300"
        className="bg-[#0057D3] hover:bg-white text-white hover:text-[#0057D3] border hover:border-[#0057D3] font-semibold py-2 px-6 md:py-3 md:px-8 rounded-md text-sm transition-all duration-300 transform hover:scale-105"
    >
        <a href="#contact">CONTACT US</a></button>
</div>

        </>
    )
}

export default Connect;