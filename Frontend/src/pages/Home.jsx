import React, { useState } from "react";
import todo from "../assets/todo.png";
import profileImage from "../assets/pro.jpg";
import Footer from "../components/Footer";
import { Contact } from "../components/Contact";
import Navbar from "../components/Navbar";

const Home = () => {
  const [contact, setContact] = useState(false);
  const showContact = () => {
    setContact(!contact);
  };

  return (
    <div id="main" className="min-w-full min-h-screen bg-blue-950">
      {/* //navbar */}
      <Navbar showContact={showContact} />
      {/* //home */}
      <div
        id="home"
        className="md:p-20 p-5 pt-20 w-full min-h-screen flex flex-col flex-wrap md:flex-row items-center justify-around"
      >
        <div className="">
          <h1 className="text-6xl font-bold text-white">Hello,</h1>
          <h1 className="text-6xl my-4 font-bold text-white">
            My name is <span className="text-red-500">Aman Kumar Gupta</span>
          </h1>
          <h1 className="text-6xl font-bold text-white">
            I'm a <span className="text-green-600">Software Engineer</span>.
          </h1>
          <div className="my-6 flex flex-wrap justify-start gap-3 items-center">
            <a
              href="https://github.com/amankkgupta"
              target="_blank"
              className="px-6 py-2 text-center bg-emerald-500 rounded-lg font-bold"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/amankkgupta"
              target="_blank"
              className="px-6 py-2 text-center bg-emerald-500 rounded-lg font-bold"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1WOa7ZEXQj_ug2A0YpijqmxkdAFOvCJbU/view?usp=sharing"
              target="_blank"
              className="px-6 py-2 text-center bg-emerald-500 rounded-lg font-bold"
            >
              Resume
            </a>
          </div>
        </div>
        <div>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-96 h-auto"
          />
        </div>
      </div>

      <div id="aboutme" className="bg-blue-950 p-5 pt-20 md:px-20 md:py-10">
        <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
          About me
        </h1>
        <div className="p-5 rounded-3xl bg-blue-900">
          <h2 className="text-white text-left font-semibold">
            I'm Aman Kumar Gupta from Bihar, a Software Engineer specialized in
            Full Stack Development, Skilled in both frontend and backend, I
            focus on building user-friendly, responsive websites and ensure
            efficient database management, server-side logic, and API
            integration for seamless performance. Proficient in Data Structures
            & Algorithms, I write optimized and clean code. I enjoy
            problem-solving and continuously seek to grow and improve my skills
            and follow best practices to ensure writing maintainable code.
            Throughout my Journey till now, I have gained experience in Full
            Stack Development and Data Structures & Algorithms, which provide
            the foundation for efficient coding and problem-solving. I also
            sharpened my presentation and time management skills through various
            projects. I always eager to learn and innovate.
          </h2>
        </div>
      </div>

      <div id="experience" className="bg-blue-950 p-5 pt-20 md:px-20 md:py-10">
        <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
          Experience
        </h1>
        <div className="flex gap-5">
          <div className="text-white md:w-1/2 bg-blue-900 rounded-2xl p-5">
            <div className="flex justify-between my-4 items-center">
              <h1 className="font-extrabold text-2xl text-red-500">
                Project Intern @Infosys Springboard
              </h1>
              <h1 className="font-medium">Nov 2024 - Dec 2024</h1>
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
          <div className="text-white md:w-80 bg-blue-900 rounded-2xl p-4">
            <img src={todo} alt="Profile" className="rounded-xl" />
            <div className="my-4">
              <h1 className="font-extrabold text-red-500 text-2xl">
                Todo List App
              </h1>
              <h1 className="">Technologies: Html, Css, Javascript.</h1>
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
      {contact && <Contact showContact={showContact} />}
      <Footer />
    </div>
  );
};

export default Home;
