import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '@fontsource/poppins';
import Home from "./pages/Home/Home";
// import Course from "./pages/Courses/Course";
import ContactAll from "./pages/Contactus/ContactAll";
import AllBlogs from "./pages/Resources/AllBlogs";
import OnlineTrain from "./pages/OnlineTraining/OnlineTrain";
import Corporate from "./pages/CorporateTrain/Corporate";
import { SiConcourse } from "react-icons/si";
import Fullstack from "./components/courses/fullstack/Fullstack";
import Embeddedsystem from "./components/courses/EmbeddedSystem/Embeddedsystem";
import CloudComputing from "./components/courses/CloudComputing/CloudComputing";
import Datascience from "./components/courses/DataScience/Datascience ";
import Dataanalytics from "./components/courses/DataAnalytics/Dataanalytics ";
import Software_Testing from "./components/courses/SoftwareTesting/Software_Testing";
import ArticlePage1 from "./components/ArticlePage1";
import ArticlePage2 from "./components/ArticlePage2";
import ArticlePage3 from "./components/ArticlePage3";
import Register from "./components/Register";
import ScrollToTop from "./components/ScrolltoTop";
import Placement from "./pages/Placement/Placement";

function App() {


  return (
    <>
      <ScrollToTop/>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="course">  
            <Route path="full-stack" element={<Fullstack/>}/>
            <Route path="software-testing" element={<Software_Testing/>}/>
            <Route path="embedded-system" element={<Embeddedsystem/>}/>
            <Route path="data-science" element={<Datascience/>}/>
            <Route path="data-analytics" element={<Dataanalytics/>}/>
            <Route path="cloud-computing" element={<CloudComputing/>}/>              
          </Route>
          <Route path="/contact" element={<ContactAll/>}/>
          <Route path="/placement" element={<Placement/>}/>
          <Route path="/blogs" element={<AllBlogs/>}/>
          <Route path="/onlinetraining" element={<OnlineTrain/>}/>
          <Route path="/corporate" element={<Corporate/>}/>
          <Route path="/article1" element={<ArticlePage1 />} />
          <Route path="/Article2" element={<ArticlePage2/>}/>   
          <Route path="/Article3" element={<ArticlePage3/>}/>
          <Route path="/Register" element={<Register/>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
