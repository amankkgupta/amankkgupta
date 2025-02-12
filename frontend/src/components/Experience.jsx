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
            <h1 className="font-medium">Oct 2024 - Dec 2024</h1>
          </div>

          <h1 className="">
            As the team leader of three interns during my Infosys Springboard
            internship, I gained valuable industry experience. I worked as a
            backend developer, designing and developing the database model for
            our project, ensuring efficient data management, and enabling smooth
            integration with the rest of the application. I also played a
            crucial role in guiding my team through key backend architecture
            decisions. This experience significantly enhanced my technical
            expertise and leadership abilities.
          </h1>
          <a
            target="_blank"
            className="underline font-bold"
            href="https://drive.google.com/file/d/122Y7yva5Oe_72XJ9fyc-10MV9wpniDHv/view?usp=sharing"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
