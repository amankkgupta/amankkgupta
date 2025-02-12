import React from "react";
import todo from "../assets/todo.png";
import knoweather from "../assets/knoweather.png";
import opinionpoll from "../assets/opinionpoll.png";
import hisabkitab from "../assets/hisabkitab.png";
const Projects = () => {
  return (
    <div id="projects" className="bg-blue-950 md:px-20 p-5 pt-20 md:py-10">
      <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
        Projects
      </h1>
      <div className="flex flex-wrap gap-10 justify-evenly items-center">
        
        {/* opinionpoll */}
        <div className="text-white w-80 h-[32rem] bg-blue-900 rounded-2xl p-4 flex flex-col hover:scale-105 transition-transform duration-300">
          <img src={opinionpoll} alt="Profile" className="rounded-xl h-40 w-full object-cover" />
          <div className="my-4">
            <h1 className="font-bold text-red-500 text-2xl">OpinionPoll</h1>
            <h1 className="text-emerald-500 font-bold">
              Tech Stack : React.js, Tailwind CSS, Node.js, Express.js, MongoDB.
            </h1>
            <h1 className="text-emerald-500 font-bold">Year: Dec 2024</h1>
          </div>
          <h1 className="text-sm">
            OpinionPoll is a MERN stack application where users can create debates, vote on different options, and leave comments. Admins have control over managing both users and debates, ensuring smooth operation and moderation of the platform.
          </h1>
          <div className="mt-auto flex justify-evenly items-center py-4">
            <a
              href="https://opinionpoll.pages.dev/"
              target="_blank"
              className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/amankkgupta/opinionpoll"
              target="_blank"
              className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Github
            </a>
          </div>
        </div>
        {/* hisabkitab */}
        <div className="text-white w-80 h-[32rem] bg-blue-900 rounded-2xl p-4 flex flex-col hover:scale-105 transition-transform duration-300">
          <img src={hisabkitab} alt="Profile" className="rounded-xl h-40 w-full object-cover" />
          <div className="my-4">
            <h1 className="font-bold text-red-500 text-2xl">HisabKitab</h1>
            <h1 className="text-emerald-500 font-bold">
              Tech Stack: React.js, Tailwind CSS, Node.js, Express.js, MongoDB.
            </h1>
            <h1 className="text-emerald-500 font-bold">Year: Nov 2024</h1>
          </div>
          <h1 className="text-sm">
            HisabKitab is a web app for tracking dues between two parties, allowing both to view transaction history, send payment reminders, and manage payments efficiently.
          </h1>
          <div className="mt-auto flex justify-evenly items-center py-4">
            <a
              href="https://hisabkitab.pages.dev/"
              target="_blank"
              className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/amankkgupta/hisabkitab"
              target="_blank"
              className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Github
            </a>
          </div>
        </div>
        {/* knoweather */}
        <div className="text-white w-80 h-[32rem] bg-blue-900 rounded-2xl p-4 flex flex-col hover:scale-105 transition-transform duration-300">
          <img src={knoweather} alt="Profile" className="rounded-xl h-40 w-full object-cover" />
          <div className="my-4">
            <h1 className="font-bold text-red-500 text-2xl">Knoweather</h1>
            <h1 className="text-emerald-500 font-bold">
              Tech Stack : React.js, Tailwind CSS.
            </h1>
            <h1 className="text-emerald-500 font-bold">Year: Jun 2024</h1>
          </div>
          <h1 className="text-sm">
            Built using React.js and Tailwind CSS. It allows users to check current weather conditions and forecasts for different locations using data fetched from the OpenWeatherAPI.
          </h1>
          <div className="mt-auto flex justify-evenly items-center py-4">
            <a
              href="https://weather-api-three-vert.vercel.app/"
              target="_blank"
              className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/amankkgupta/knoweather"
              target="_blank"
              className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Github
            </a>
          </div>
        </div>
        {/* todoes */}
        <div className="text-white w-80 h-[32rem] bg-blue-900 rounded-2xl p-4 flex flex-col hover:scale-105 transition-transform duration-300">
          <img src={todo} alt="Profile" className="rounded-xl h-40 w-full object-cover" />
          <div className="my-4">
            <h1 className="font-bold text-red-500 text-2xl">Todoes</h1>
            <h1 className="text-emerald-500 font-bold">
              Tech Stack : Html, Css, Javascript.
            </h1>
            <h1 className="text-emerald-500 font-bold">Year: Nov 2023</h1>
          </div>
          <h1 className="text-sm">
            A simple and intuitive Todo List application built with HTML, CSS, and JavaScript. The app allows users to add tasks, edit them, delete them, and mark them as completed using a checkbox.
          </h1>
          <div className="mt-auto flex justify-evenly items-center py-4">
            <a
              href="https://todo-app-ccjp.vercel.app/"
              target="_blank"
              className="px-6 text-center py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/amankkgupta/todoes"
              target="_blank"
              className="px-6 py-2 bg-emerald-500 rounded-lg font-bold"
            >
              Github
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
