function Bloghead() {

    return (
        <>
            <div className="text-center py-8 sm:py-5 ">
                {/* Title */}
                <h3 data-aos="fade-up"
                    className="font-bold inline-flex items-center justify-center rounded-full text-center p-2 px-4 sm:px-5 text-sm sm:text-base"
                    style={{ backgroundColor: '#CDD9FF', color: "#0057D3" }}
                >
                    NEWS & BLOGS
                </h3>
                <h1 data-aos="fade-up" className="pt-4 px-3 font-semibold text-2xl lg:text-3xl   text-center text-[#0057D3]">
                Insightful Tips, Guides, and Articles
                </h1>
                <h4 className=" pt-4  px-10 font-normal text-lg  text-gray-600 text-center">
                Explore expert content with valuable insights, advice, and in-depth guides.
                </h4>
            </div>

        </>
    )
}
export default Bloghead;