import React from "react";
import { ReactTyped } from "react-typed";
import profileImage from "../assets/pro.jpg";
import { FaGithub, FaLinkedin, FaFileLines } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className="md:p-20 p-5 pt-20 w-full min-h-screen flex flex-col flex-wrap md:flex-row items-center justify-evenly"
    >
      <div className="">
        <h1 className="md:text-6xl text-4xl font-bold text-white">Hello,</h1>
        <h1 className="md:text-6xl text-4xl my-4 font-bold text-white">
          My name is{" "}
          <ReactTyped
            className="text-red-500"
            strings={["Aman Kumar Gupta."]}
            typeSpeed={75}
            startDelay={500}
          />
        </h1>
        <h1 className="md:text-6xl text-4xl font-bold text-white">
          I'm a{" "}
          <ReactTyped
            className="text-emerald-500"
            strings={["Software Engineer.", "Full Stack Developer."]}
            typeSpeed={75}
            backSpeed={75}
            startDelay={3000}
          />
        </h1>
        <div className="my-7 flex flex-wrap justify-start gap-3 items-center">
          <a
            href="https://github.com/amankkgupta"
            target="_blank"
            className="p-3 hover:scale-105 transition-transform duration-300 md:px-6 flex gap-2 text-center bg-emerald-500 hover:bg-emerald-600 rounded-lg font-bold"
          >
            <FaGithub size={25} />
            Github
          </a>
          <a
            href="https://linkedin.com/in/amankkgupta"
            target="_blank"
            className="p-3 hover:scale-105 transition-transform duration-300 md:px-6 flex gap-2 text-center bg-emerald-500 hover:bg-emerald-600 rounded-lg font-bold"
          >
            <FaLinkedin size={25} />
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1WOa7ZEXQj_ug2A0YpijqmxkdAFOvCJbU/view?usp=sharing"
            target="_blank"
            className="p-3 hover:scale-105 transition-transform duration-300 md:px-6 flex gap-2 text-center bg-emerald-500 hover:bg-emerald-600 rounded-lg font-bold"
          >
            <FaFileLines size={25} />
            Resume
          </a>
        </div>
      </div>
      <div>
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-80 h-auto hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
