import React, { useState } from "react";
import todo from "../assets/todo.png";
import profileImage from "../assets/pro.jpg";
import Footer from "../components/Footer";
import { Contact } from "../components/Contact";
import {
  Home as HomeIcon,
  Briefcase,
  FolderClosed,
  CircleUserRound,
  ContactRound,
} from "lucide-react";

const Home = () => {
  const [contact, setContact] = useState(false);
  const showContact = () => {
    setContact(!contact);
  };

  return (
    <div id="main" className="min-w-full min-h-screen bg-blue-950">
      {/* //navbar */}
      <div
        id="navbar"
        className="hidden sticky top-2 md:flex justify-center items-center"
      >
        <div className="rounded-full bg-blue-500 flex py-3 px-10 justify-center items-center">
          <div>
            <ul className="flex gap-14 text-black font-extrabold">
              <li className="inline hover:text-white">
                <a href="#home">Home</a>
              </li>
              <li className="inline hover:text-white">
                <a href="#aboutme">About</a>
              </li>
              <li className="inline hover:text-white">
                <a href="#experience">Experience</a>
              </li>
              <li className="inline hover:text-white">
                <a href="#projects">Projects</a>
              </li>
              <li className="inline hover:text-white">
                <button onClick={showContact}>Contact me</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:hidden sticky top-2 flex justify-center items-center">
        <div className="rounded-full bg-blue-500 flex px-6 py-4 gap-12 justify-center items-center">
          <HomeIcon />
          <CircleUserRound />
          <Briefcase />
          <FolderClosed />
          <ContactRound />
        </div>
      </div>

      {/* //home */}
      <div
        id="home"
        className="md:p-20 p-5 w-full min-h-screen flex flex-col md:flex-row items-center justify-around"
      >
        <div>
          <h1 className="text-6xl font-bold text-white">Hello,</h1>
          <h1 className="text-6xl my-4 font-bold text-white">
            My name is <span className="text-red-500">Aman Kumar Gupta</span>
          </h1>
          <h1 className="text-6xl font-bold text-white">
            I'm a <span className="text-green-600">FullStack Developer</span>.
          </h1>
          <div className="my-6 flex gap-5">
            <a
              href="https://github.com/amankkgupta"
              target="_blank"
              className="px-8 py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/amankkgupta"
              target="_blank"
              className="px-8 py-2 bg-emerald-500 rounded-lg font-bold"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1WOa7ZEXQj_ug2A0YpijqmxkdAFOvCJbU/view?usp=sharing"
              target="_blank"
              className="px-8 py-2 bg-emerald-500 rounded-lg font-bold"
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

      <div id="aboutme" className="bg-blue-950 md:px-20 md:py-10">
        <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
          About me
        </h1>
        <div className="p-10 rounded-3xl bg-blue-900">
          <h2 className="text-white text-left text-lg font-semibold">
            I am Aman Kumar Gupta, a computer science student from Bihar with a
            passion for web development. With a strong foundation in both
            front-end and back-end technologies, I consider myself a skilled
            full-stack developer capable of building and maintaining scalable,
            user-friendly web applications. I'm always eager to learn and keep
            up with the latest industry trends, ensuring I can deliver
            cutting-edge solutions. Currently, I am interning at Infosys
            Springboard, gaining valuable industry experience and working on a
            project called "DebateVerse: Engage, discuss and grow with
            interactive debates". This experience has allowed me to apply agile
            methodologies and further develop my skills. As a proactive problem
            solver, I thrive in collaborative environments and enjoy tackling
            new challenges. My goal is to continue growing as a developer while
            staying at the forefront of technological advancements to create
            innovative and impactful solutions.
          </h2>
        </div>
      </div>

      <div id="experience" className="bg-blue-950 md:px-20 md:py-10">
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

      <div id="projects" className="bg-blue-950 md:px-20 md:py-10">
        <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
          Projects
        </h1>
        <div className="flex flex-wrap gap-10 justify-evenly items-center">
          <div className="text-white md:w-1/4 bg-blue-900 rounded-2xl p-4">
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
                href="github.com/amankkgupta"
                className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Live Demo
              </a>
              <a
                href="github.com/amankkgupta"
                className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Github
              </a>
            </div>
          </div>
          <div className="text-white md:w-1/4 bg-blue-900 rounded-2xl p-4">
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
                href="github.com/amankkgupta"
                className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Live Demo
              </a>
              <a
                href="github.com/amankkgupta"
                className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Github
              </a>
            </div>
          </div>
          <div className="text-white md:w-1/4 bg-blue-900 rounded-2xl p-4">
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
                href="github.com/amankkgupta"
                className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Live Demo
              </a>
              <a
                href="github.com/amankkgupta"
                className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Github
              </a>
            </div>
          </div>
          <div className="text-white md:w-1/4 bg-blue-900 rounded-2xl p-4">
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
                href="github.com/amankkgupta"
                className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Live Demo
              </a>
              <a
                href="github.com/amankkgupta"
                className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Github
              </a>
            </div>
          </div>
          <div className="text-white md:w-1/4 bg-blue-900 rounded-2xl p-4">
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
                href="github.com/amankkgupta"
                className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
              >
                Live Demo
              </a>
              <a
                href="github.com/amankkgupta"
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
