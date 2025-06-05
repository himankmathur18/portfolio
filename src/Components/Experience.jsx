// import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Deeporion Technology Pvt. Ltd.',
      duration: '2025',
    },

  ];

  return (
    <section
      id="experience"
      className="py-6 min-h-[60vh] sm:py-10 sm:min-h-screen"
    >
      <h2 className="text-3xl font-bold text-white bg-blue-950 border-b-1 p-4 mt-[1.5em]">
        Experience
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-3 xs:p-4 m-4 xs:m-6 sm:m-10 hover:p-4 xs:hover:p-5 duration-300"
          >
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-sm xs:text-base sm:text-lg text-gray-600">{exp.company}</h4>
            <p className="text-xs xs:text-sm sm:text-base text-gray-500 mb-2">{exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;