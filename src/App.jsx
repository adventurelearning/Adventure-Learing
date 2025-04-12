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
import Embedded_system from "./components/Courses/EmbeddedSystem/Embedded_system";
import Cloud_Computing from "./components/Courses/CloudComputing/Cloud_Computing";
import Data_science from "./components/Courses/DataScience/Data_science";
import Data_analytics from "./components/Courses/DataAnalytics/Data_analytics";
import SoftwareTesting from "./components/Courses/SoftwareTesting/SoftwareTesting";
import ArticlePage1 from "./components/ArticlePage1";
import ArticlePage2 from "./components/ArticlePage2";
import ArticlePage3 from "./components/ArticlePage3";
import Register from "./components/Register";

function App() {


  return (
    <>
      
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="course">  
            <Route path="full-stack" element={<Fullstack/>}/>
            <Route path="software-testing" element={<SoftwareTesting/>}/>
            <Route path="embedded-system" element={<Embedded_system/>}/>
            <Route path="data-science" element={<Data_science/>}/>
            <Route path="data-analytics" element={<Data_analytics/>}/>
            <Route path="cloud-computing" element={<Cloud_Computing/>}/>              
          </Route>
          <Route path="/contact" element={<ContactAll/>}/>
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
