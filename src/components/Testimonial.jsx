function Testimonial() {
    return (
        <>
            <div className="bg-gray-100 items-center pt-5" id="review">
                <div className="flex justify-center items-center ">
                    <h3 data-aos="fade-down"
                        className="font-bold inline-flex items-center justify-center rounded-full text-center p-2 lg:px-4  text-sm sm:text-base"
                        style={{ backgroundColor: '#CDD9FF', color: "#0057D3" }} // Apply custom background color using inline styles
                    >OUR TESTIMONIALS
                    </h3>
                </div>
                <div data-aos="fade-down" className="items-cente ">
                    <h1 className="pt-4 font-semibold text-2xl lg:text-3xl  text-center text-[#0057D3]">
                      What Our Students Says About Us
                    </h1>
                </div>
            </div>

        </>
    )
}
export default Testimonial;