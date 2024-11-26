import React, { useState } from "react";
import todo from "./assets/todo.png";
import Home from "./components/Home";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contact, setContact] = useState(false);
  const showContact = () => {
    setContact(!contact);
  };

  return (
    <div id="main" className="min-w-full min-h-screen bg-blue-950">
      <Navbar showContact={showContact} />
      <Home />
      <About />

      <div id="experience" className="bg-blue-950 p-5 pt-20 md:px-20 md:py-10">
        <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
          Experience
        </h1>
        <div className="flex gap-5">
          <div className="text-white md:w-1/2 bg-blue-900 rounded-2xl p-5 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between my-4 items-center">
              <h1 className="font-bold text-2xl text-red-500">
                Project Intern{" "}
                <span className="text-emerald-500">@Infosys Springboard</span>
              </h1>
              <h1 className="font-medium">Nov 2024 - Present</h1>
            </div>
            <h1 className="">
              I am currently leading my team in my Infosys Springboard
              internship, where I am working as a backend developer. My
              responsibilities include designing and preparing the database
              model for our project. I am also ensuring efficient data
              management and smooth integration with other parts of the
              application. In addition to technical tasks, I guide my team in
              making key backend architecture decisions. This role is enhancing
              my leadership and technical skills.
            </h1>
          </div>
        </div>
      </div>

      <div id="projects" className="bg-blue-950 md:px-20 p-5 pt-20 md:py-10">
        <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
          Projects
        </h1>
        <div className="flex flex-wrap gap-10 justify-evenly items-center">
          <div className="text-white md:w-80 bg-blue-900 rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
            <img src={todo} alt="Profile" className="rounded-xl" />
            <div className="my-4">
              <h1 className="font-bold text-red-500 text-2xl">Todo List App</h1>
              <h1 className="text-emerald-500 font-bold">
                Technologies: Html, Css, Javascript.
              </h1>
              <h1 className="text-emerald-500 font-bold">Year: Jun 2024</h1>
            </div>
            <h1 className="">
              This to-do app allows users to manage tasks efficiently by adding,
              editing, deleting, and marking them as completed, with completed
              tasks crossed out for clarity. It is built using HTML5 for
              structure, CSS3 for styling, and JavaScript for functionality. The
              interface is clean and user-friendly, providing a seamless task
              management experience. Users can easily interact with the app to
              stay organized and productive.
            </h1>
            <div className="flex justify-evenly flex-wrap items-center py-4">
              <a
                href="https://todo-app-ccjp.vercel.app/"
                target="_blank"
                className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/amankkgupta/Todo-App"
                target="_blank"
                className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactForm/>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default App;
