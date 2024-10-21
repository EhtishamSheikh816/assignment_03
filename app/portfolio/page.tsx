import React from "react";

const Portofolio = () => {
  return (
    <div id="portfolio" className="py-20">
      <h1 className="text-4xl font-extrabold text-purple-950 text-center pb-8 ">
        Portfolio
      </h1>
      <p className="text-center text-gray-900 font-semibold pb-10 ">
        I made many projects in my journey. These projects reflects the skills
        and i hope, i will being best Full-Stack Developer.
      </p>
      <div className="flex flex-wrap justify-center mx-20 gap-12">
        <div className="text-center p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-bold text-purple-950 pb-3">
            Project 01
          </h2>
          <p className="text-gray-800 font-semibold">
            I made the calculator using HTML, CSS and Typescript with the help
            of DOM.
          </p>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-2xl ">
          <h2 className="text-2xl font-bold text-purple-950 pb-3">
            Project 02
          </h2>
          <p className="text-gray-800 font-semibold">
            A React & Typescript powered wibsite to track time with an
            interactive countdown feature.
          </p>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-2xl ">
          <h2 className="text-2xl font-bold text-purple-950 pb-3">
            Project 03
          </h2>
          <p className="text-gray-800 font-semibold">
            I created the calculator using HTML, CSS and Typescript with the
            help of DOM.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Portofolio;
