import React from "react";
import CarouselPage from "../../components/CarouselPage";
import LookingFor from "../../components/LookingFor";
import Trendingtech from "../../components/Trendingtech";
import TrendingtechCards from "../../components/TrendingtechCards";
import Logos from "../../components/Logos";
import SelectCourse from "../../components/SelectCourse";
// import { Form } from "react-router-dom";
import Courses from "../../components/Courses";
import Course_Link from "../../components/Course_Link";
import Coursecard from "../../components/Coursecard";
import WhyAdventure from "../../components/WhyAdventure";
import Enroll from "../../components/Enroll";
import HiringCompanies from "../../components/HiringCompanies";
import WebinarEvents from "../../components/WebinarEvents";
import WebinarImages from "../../components/WebinarImages";
import Achievements from "../../components/Achievement";
import Testimonial from "../../components/Testimonial";
import TestimonialReview from "../../components/TestimonialReview";
import Subscription from "../../components/Subscription";
import Form from "../../components/Form";
import Youtubehead from "../../components/Youtubehead";
import Youtubevdo from "../../components/Youtubevdo";
import NewsandBlog from "../../components/NewsandBlog";
import Bloghead from "../../components/BlogHead";
import Whatwedo from "../../components/Whatwedo";
// import Softwares from "../../components/Softwares";


const Home = () => {
  return (
    <div>
      <CarouselPage />
      {/* <LookingFor /> */}
      <Whatwedo />
      <Trendingtech />
      <TrendingtechCards />
      {/* <Softwares/> */}
      <Logos />
      <SelectCourse />
      {/* <Form /> */}
      <Courses />      
      {/* <Course_Link />      */}
      <Coursecard />      
      <WhyAdventure />
      <Enroll />
      <HiringCompanies />
      {/* <WebinarEvents />
      <WebinarImages />      */}
      {/* <NewsandBlogs/> */}
      <Bloghead/>
      <NewsandBlog/>
      <Achievements />
      <Youtubehead/>
      <Youtubevdo/>
      <Testimonial />
      <TestimonialReview />
      <Subscription />      
    </div>
  );
};

export default Home;
