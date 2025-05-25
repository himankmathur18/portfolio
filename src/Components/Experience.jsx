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
    <section className="py-10 min-h-[50vh]">
        <h2 className="text-3xl font-bold text-white bg-blue-950 border-b-1 p-4">Experience</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 m-10 hover:p-5 duration-300">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <h4 className="text-lg text-gray-600">{exp.company}</h4>
              <p className="text-gray-500 mb-2">{exp.duration}</p>
            
            </div>
          ))}
        </div>
      
    </section>
  );
}

export default Experience;