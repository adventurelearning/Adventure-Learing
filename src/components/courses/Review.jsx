import { CgProfile } from "react-icons/cg";
function TestimonialReview() {
  const reviews = [
    {
      img: "https://via.placeholder.com/100",
      name: "Mouriya",
      position: "UX/UI Specialist",
      review:
        "I had a positive experience with the course. The content was well-structured and relevant.",
    },
    {
      img: "https://via.placeholder.com/100",
      name: "Alex",
      position: "Software Developer",
      review:
        "The course was good, but I felt it lacked depth in some areas. More practical examples would be helpful.",
    },
    {
      img: "https://via.placeholder.com/100",
      name: "Sophia",
      position: "Web Developer",
      review:
        "I absolutely loved this course! The material was thorough and easy to follow. Highly recommend it!",
    },
    {
      img: "https://via.placeholder.com/100",
      name: "John",
      position: "Web Developer",
      review:
        "An average experience. Some parts of the course were helpful, but others felt rushed.",
    },
    {
      img: "https://via.placeholder.com/100",
      name: "Emily",
      position: "Web Developer",
      review:
        "Fantastic course! The content was clear and comprehensive. I loved the hands-on projects!",
    },
  ];

  return (
    <>
      <div className="w-full overflow-hidden py-10">
        <div className="flex w-max animate-marquee space-x-20 ">
          {/* Duplicating reviews to make smooth infinite animation */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="text-center w-72 p-6 bg-white shadow-2xl rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center  gap-2 ">
                <CgProfile className="w-10 h-10  text-[#0057D3]" />
                <div className="text-left mt-2">
                  <h2 className="font-semibold text-base">{review.name}</h2>
                   <p className="text-gray-600 text-xs">{review.position}</p>
                   <div className="text-yellow-500 text-sm  text-left">★★★★★</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3 text-left">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TestimonialReview;
