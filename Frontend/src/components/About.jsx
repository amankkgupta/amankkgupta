import React from "react";

const About = () => {
  return (
    <div id="aboutme" className="bg-blue-950 p-5 pt-20 md:px-20 md:py-10">
      <h1 className="text-4xl text-emerald-500 font-bold text-center rounded-full py-10">
        About me
      </h1>

      <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
        <div className="md:w-1/2 p-5 rounded-3xl bg-blue-900 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl text-emerald-500 font-bold mb-2">
            Who am I ?
          </h3>
          <h2 className="text-white text-left font-semibold">
            I'm Aman Kumar Gupta from Bihar, a Software Engineer specialized in
            Full Stack Development. Skilled in both frontend and backend, I
            focus on building user-friendly, responsive websites and ensuring
            efficient database management, server-side logic, and API
            integration for seamless performance. Proficient in Data Structures
            & Algorithms, I write optimized and clean code. I enjoy
            problem-solving and continuously seek to grow and improve my skills.
            I follow best practices to write maintainable code. Throughout my
            journey, I have gained experience in Full Stack Development and Data
            Structures & Algorithms, which provide a strong foundation for
            efficient coding and problem-solving. Additionally, I have sharpen my
            presentation and time management skills through various projects.
            I'm always eager to learn and innovate.
          </h2>
        </div>

        <div className="flex md:w-1/2 flex-col gap-5">
          <div className="p-5 rounded-3xl bg-blue-900 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-emerald-500 font-bold mb-2">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-2 text-center">
              <p className="font-bold text-blue-900 p-2 bg-blue-200 rounded-lg shadow">
                HTML
              </p>

              <p className="font-bold text-green-900 p-2 bg-green-200 rounded-lg shadow">
                CSS
              </p>

              <p className="font-bold text-yellow-900 p-2 bg-yellow-200 rounded-lg shadow">
                JavaScript
              </p>

              <p className="font-bold text-purple-900 p-2 bg-purple-200 rounded-lg shadow">
                React
              </p>

              <p className="font-bold text-red-900 p-2 bg-red-200 rounded-lg shadow">
                Node.js
              </p>

              <p className="font-bold text-indigo-900 p-2 bg-indigo-200 rounded-lg shadow">
                Express.js
              </p>

              <p className="font-bold text-pink-900 p-2 bg-pink-200 rounded-lg shadow">
                MongoDB
              </p>

              <p className="font-bold text-teal-900 p-2 bg-teal-200 rounded-lg shadow">
                MySQL
              </p>

              <p className="font-bold text-orange-900 p-2 bg-orange-200 rounded-lg shadow">
                Git
              </p>

              <p className="font-bold text-lime-900 p-2 bg-lime-200 rounded-lg shadow">
                Tailwind CSS
              </p>

              <p className="font-bold text-amber-900 p-2 bg-amber-200 rounded-lg shadow">
                C++
              </p>
            </div>
          </div>
          <div className="p-5 rounded-3xl bg-blue-900 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl text-emerald-500 font-bold">
              Education
            </h3>
            <div className="text-white">
              <h1 className="text-lg font-semibold text-red-500">Bachelor of Engineering (CSE)</h1>
              <h1>Chitkara University, Himachal Pradesh</h1>
              <h1>Year: 2022 - 2026</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
