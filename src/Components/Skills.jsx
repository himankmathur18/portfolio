// import React from 'react';

const Skills = () => {
  const skills = {
    Frontend: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'],
    Tools: ['Git Control'],
  };

  return (
    <section id="skills" className="py-6 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-white bg-blue-950 border-b-1 p-3 sm:p-4 mt-4 sm:mt-[1.5em] text-center">
        Skills
      </h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div
          key={category}
          className="mx-2 sm:mx-8 my-6 sm:my-[4em]"
        >
          <h3 className="text-lg sm:text-2xl font-semibold text-center mb-3 sm:mb-4">
            {category}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skillList.map((skill, index) => (
              <div
                key={index}
                className="w-full xs:w-40 sm:w-48 m-0 p-3 sm:p-4 border rounded shadow-lg text-center bg-white"
              >
                <h4 className="text-base sm:text-xl font-semibold text-gray-800">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;