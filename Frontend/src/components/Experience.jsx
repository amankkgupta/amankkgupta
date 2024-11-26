import React from "react";

const Experience = () => {
  return (
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
            I am currently leading my team in my Infosys Springboard internship,
            where I am working as a backend developer. My responsibilities
            include designing and preparing the database model for our project.
            I am also ensuring efficient data management and smooth integration
            with other parts of the application. In addition to technical tasks,
            I guide my team in making key backend architecture decisions. This
            role is enhancing my leadership and technical skills.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
