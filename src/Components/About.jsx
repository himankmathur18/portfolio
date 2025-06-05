// import React from 'react';
const About = () => {
  const openResume = () => {
    window.open("/Himank Mathur Resume.pdf", "_blank");
  };

 return (
  <section id="about" className="py-10 md:py-20 h-auto">
    <div className="container mx-auto px-2 sm:px-4 my-8 sm:my-[6rem]">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col mt-4 md:items-start w-full md:w-[60rem] md:ml-[5em]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            About Me
          </h2>
          <div className="md:hidden flex justify-center my-4">
            <img
              src="/p1.jpg"
              alt=""
              className="w-32 h-32 object-cover rounded-xl"
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl md:w-10/12 text-justify mx-2 sm:mx-6 md:mx-4 my-4">
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
          <div className="border p-2 sm:p-3 rounded-xl cursor-pointer bg-blue-800 font-bold text-white hover:text-black mt-4 w-full sm:w-auto text-center">
            <button onClick={openResume}>My Resume</button>
          </div>
        </div>
        <div className="hidden md:block ml-8">
          <img
            src="/p1.jpg"
            alt=""
            className="w-48 h-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  </section>
);
};

export default About;
