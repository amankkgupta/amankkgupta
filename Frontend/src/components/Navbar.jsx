import React from "react";
import {
  Home as HomeIcon,
  Briefcase,
  FolderClosed,
  CircleUserRound,
  ContactRound,
} from "lucide-react";

const Navbar = ({ showContact }) => {
  return (
    <>
      <div className="navbarmd hidden sticky top-2 md:flex justify-center items-center">
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

      <div className="navbarsm md:hidden fixed top-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <div className="rounded-full bg-blue-500 flex px-6 py-4 gap-10 justify-center items-center">
          <a href="#home">
            <HomeIcon />
          </a>
          <a href="#aboutme">
            <CircleUserRound />
          </a>
          <a href="#experience">
            {" "}
            <Briefcase />
          </a>
          <a href="#projects">
            <FolderClosed />
          </a>
          <ContactRound onClick={showContact} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
