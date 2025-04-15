import { useState, lazy, Suspense , useEffect } from "react";
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
      <ScrollToTop />
      <Whatsapp />
      <Header />
      {/* <Loading /> */}
      <Navbar />
      <Suspense fallback={<Loading />}>
        {" "}
        {/* Wrap Routes with Suspense */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course">
            <Route path="full-stack" element={<Fullstack />} />
            <Route path="software-testing" element={<Software_Testing />} />
            <Route path="embedded-system" element={<Embeddedsystem />} />
            <Route path="data-science" element={<Datascience />} />
            <Route path="data-analytics" element={<Dataanalytics />} />
            <Route path="cloud-computing" element={<CloudComputing />} />
          </Route>

          <Route path="/contact" element={<ContactAll/>}/>
          <Route path="/blogs" element={<AllBlogs/>}/>
          <Route path="/Blogs/subblogs/:id" element={<SubBlogs/>}/>
          <Route path="/onlinetraining" element={<OnlineTrain/>}/>
          <Route path="/corporate" element={<Corporate/>}/>
          <Route path="/article1" element={<ArticlePage1 />} />

          <Route path="/Article2" element={<ArticlePage2/>}/>   
          <Route path="/Article3" element={<ArticlePage3/>}/>
          <Route path="/Register" element={<Register/>} />
          <Route path="/TandC" element={<TandC/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
