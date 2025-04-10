function TestimonialReview() {
    const reviews = [
        {
            img: "https://via.placeholder.com/100",
            name: "Mouriya",
            review: "I had a positive experience with the course. The content was well-structured and relevant."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Alex",
            review: "The course was good, but I felt it lacked depth in some areas. More practical examples would be helpful."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Sophia",
            review: "I absolutely loved this course! The material was thorough and easy to follow. Highly recommend it!"
        },
        {
            img: "https://via.placeholder.com/100",
            name: "John",
            review: "An average experience. Some parts of the course were helpful, but others felt rushed."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Emily",
            review: "Fantastic course! The content was clear and comprehensive. I loved the hands-on projects!"
        }
    ];

    return (
        <>
            <div className="w-full bg-gray-100 overflow-hidden py-10 ">
                <div className="flex w-max animate-marquee space-x-20 ">
                    {/* Duplicating reviews to make smooth infinite animation */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div key={index} className="text-center w-60 p-3 bg-white shadow-2xl rounded-lg transition-transform transform hover:scale-105">
                           
                                <i class="bi bi-person-circle text-6xl lg:text-6xl text-[#0057D3] "></i>
                                
                       
                            <h3 className="text-lg font-semibold mt-3">{review.name}</h3>
                            <div className="text-yellow-500 text-xl mt-1">
                                ★★★★★
                            </div>
                            <p className="text-sm text-gray-600 mt-3">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TestimonialReview;