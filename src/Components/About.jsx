// import React from 'react';
import { TiArrowDownThick } from "react-icons/ti";
const About = () => {
  const openResume = () => {
    window.open("/Himank Mathur Resume.pdf", "_blank");
  };

  return (
    <section className="py-20 bg-no-repeat bg-cover h-[37em]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col items-center md:items-start w-[60rem]">
            <h2 className="text-3xl md:text-4xl font-bold md:mb-0 ">
              About Me
            </h2>
            <div className="md:hidden flex justify-center mb-4">
              <img
                src="/public/p1.jpg"
                alt=""
                className="w-[10rem] rounded-xl"
              />
            </div>
            <p className="text-lg md:text-xl md:w-[50rem] text-justify m-6 md:m-4">
              Hi, I am Himank Mathur a Software Developer at Deeporion
              Technology Pvt. Ltd. I hold a Bachelor degree in Computer
              Applications (BCA – Artificial Intelligence & Data Science) from
              Poornima University. I am passionate about building dynamic,
              user-friendly web applications and enjoy bringing creative ideas
              to life through clean and efficient code. My technical expertise
              includes JavaScript, React, Git, and various modern web
              development frameworks. I am always eager to learn and contribute
              to innovative projects that make a real impact.
            </p>
            <div className="border p-3 rounded-xl cursor-pointer bg-blue-800 font-bold text-white hover:text-black ml-[25rem] mt-[1rem]">
              <button onClick={openResume}>My Resume</button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/public/p1.jpg"
              alt=""
              className="w-[15rem] h-[20rem] rounded-xl"
            />
          </div>
        </div>
        <div className="absolute text-4xl border-2 w-10 cursor-pointer top-[16em] rounded-lg ani">
          <TiArrowDownThick/>
        </div>
      </div>
    </section>
  );
};

export default About;
