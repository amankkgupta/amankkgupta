import React from "react";
import {
  LuHome,
  LuUserCircle2,
  LuBriefcase,
  LuFolderClosed,
  LuContact2,
} from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className="navbarmd hidden sticky top-2 md:flex justify-center items-center z-10">
        <div className="rounded-full bg-blue-500 flex py-3 px-10 justify-center items-center">
          <div>
            <ul className="flex gap-14 text-black font-extrabold">
              <li className="inline hover:text-white ">
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
                <a href="#contactme">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbarsm md:hidden fixed top-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
        <div className="rounded-full bg-blue-500 flex px-6 py-4 gap-10 justify-center items-center">
          <a href="#home" className="hover:text-white">
            <LuHome size={28} />
          </a>
          <a href="#aboutme" className="hover:text-white">
            <LuUserCircle2 size={28} />
          </a>
          <a href="#experience" className="hover:text-white">
            {" "}
            <LuBriefcase size={28} />
          </a>
          <a href="#projects" className="hover:text-white">
            <LuFolderClosed size={28} />
          </a>
          <a href="#contactme" className="hover:text-white">
            <LuContact2 size={28} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
