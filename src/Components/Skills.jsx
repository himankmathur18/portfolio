// import React from 'react';

const Skills = () => {
  const skills = {
    Frontend: ['JavaScript', 'React', 'CSS', 'Tailwind CSS', 'HTML'],
    Tools: ['Git Control'],
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-white bg-blue-950 border-b-1 p-4">Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="m-10">
          <h3 className="text-2xl font-semibold text-center mb-4">{category}</h3>
          <div className="flex flex-wrap justify-center">
            {skillList.map((skill, index) => (
              <div key={index} className="m-4 p-4 border rounded shadow-lg">
                <h4 className="text-xl font-semibold">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;