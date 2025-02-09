import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./components/Projects";

const App = () => {
  
  return (
    <div id="main" className="min-w-full min-h-screen bg-blue-950">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
