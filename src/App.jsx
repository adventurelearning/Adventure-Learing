import { useState, lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "@fontsource/poppins";
import Home from "./pages/Home/Home";
import { SiConcourse } from "react-icons/si";
// Static imports remain
import ScrollToTop from "./components/ScrolltoTop";
import TandC from "./components/TandC";
import PrivacyPolicy from "./components/PrivacyPolicy";

import SubBlogs from "./components/SubBlogs";

import Loading from "./components/Loading/Loading"; // Create a simple Loading component
import Whatsapp from "./components/whatsapp/Whatsapp";
import InitialLoader from "./components/Initialloader";
import PopupForm from "./components/PopupForm";
import PopupOffers from "./components/PopupOffers";
import ChatBox from "./components/chatbot/ChatBox";
import ChatWidget from "./components/chatbot/ChatWidget";
import SocialLinks from "./components/SocialLinks";
import { Helmet } from "react-helmet-async";



// Lazy load components
const ContactAll = lazy(() => import("./pages/Contactus/ContactAll"));
const AllBlogs = lazy(() => import("./pages/Resources/AllBlogs"));
const OnlineTrain = lazy(() => import("./pages/OnlineTraining/OnlineTrain"));
const Corporate = lazy(() => import("./pages/CorporateTrain/Corporate"));
const Fullstack = lazy(() =>
  import("./components/courses/fullstack/Fullstack")
);
const Embeddedsystem = lazy(() =>
  import("./components/courses/EmbeddedSystem/Embeddedsystem")
);
const CloudComputing = lazy(() =>
  import("./components/courses/CloudComputing/CloudComputing")
);
const Datascience = lazy(() =>
  import("./components/courses/DataScience/Datascience ")
);
const Dataanalytics = lazy(() =>
  import("./components/courses/DataAnalytics/Dataanalytics ")
);
const Software_Testing = lazy(() =>
  import("./components/courses/SoftwareTesting/Software_Testing")
);
const ArticlePage1 = lazy(() => import("./components/ArticlePage1"));
const ArticlePage2 = lazy(() => import("./components/ArticlePage2"));
const ArticlePage3 = lazy(() => import("./components/ArticlePage3"));
const Register = lazy(() => import("./components/Register"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load delay or wait for real asset load if needed
    const timer = setTimeout(() => setLoading(false), 1500); // adjust time here
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    window.addEventListener("load", () => setLoading(false));
  }, []);

  if (loading) return <Loading />; // ✅ Show this before the app
  return (
    <>
      <Helmet>
        <title>
          Adventure Learning
        </title>
        <meta
          name="title"
          content="Adventure Learning | Best IT Training in Coimbatore, Tamil Nadu"
        />
        <meta
          name="description"
          content="Adventure Learning offers top IT training in Coimbatore, Tamil Nadu. Learn Full Stack Development, Data Science, Cloud Computing, and more."
        />


        <meta
          name="keywords"
          content="Adventure Learning, IT Training Coimbatore, Software Courses Tamil Nadu, Full Stack Development, Data Science Training, Cloud Computing Courses, Embedded Systems Coimbatore, Best IT Institute, Corporate Training Coimbatore, Software Testing Course, Data Analytics Tamil Nadu"
        />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adventurelearning.in/" />
        <meta
          property="og:title"
          content="Adventure Learning | Best IT Training in Coimbatore, Tamil Nadu"
        />
        <meta
          property="og:description"
          content="Join Adventure Learning in Coimbatore for expert-led IT training in Full Stack Development, Data Science, and more. Learn. Upskill. Succeed."
        />
        <meta
          property="og:image"
          content="https://www.adventurelearning.in/assets/images/adventure-learning-og-image.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.adventurelearning.in/" />
        <meta
          property="twitter:title"
          content="Adventure Learning | Best IT Training in Coimbatore, Tamil Nadu"
        />
        <meta
          property="twitter:description"
          content="Top-rated IT training in Coimbatore, Tamil Nadu. Master Full Stack, Data Science, and more with Adventure Learning."
        />
        <meta
          property="twitter:image"
          content="https://www.adventurelearning.in/assets/images/adventure-learning-og-image.jpg"
        />
      </Helmet>

      <ScrollToTop />
      {/* <Whatsapp /> */}
      {/* <ChatWidget /> */}
      <Header />
      {/* <Loading /> */}
      <Navbar />
      <Suspense fallback={<Loading />}>
        {" "}
        {/* Wrap Routes with Suspense */}
        <PopupOffers />
        <PopupForm />
        <SocialLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course">
            <Route path="full-stack-development" element={<Fullstack />} />
            <Route path="software-testing" element={<Software_Testing />} />
            <Route path="embedded-system" element={<Embeddedsystem />} />
            <Route path="data-science" element={<Datascience />} />
            <Route path="data-analytics" element={<Dataanalytics />} />
            <Route path="cloud-computing" element={<CloudComputing />} />
          </Route>
          <Route path="/contact" element={<ContactAll />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/Blogs/subblogs/:id" element={<SubBlogs />} />
          <Route path="/onlinetraining" element={<OnlineTrain />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/article1" element={<ArticlePage1 />} />
          <Route path="/Article2" element={<ArticlePage2 />} />
          <Route path="/Article3" element={<ArticlePage3 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/TandC" element={<TandC />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
