// import React from 'react'

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Poornima University",
      year: "2022-2025",
    },
    {
      degree: "Senior Secondary School",
      institution: "National Institute of Open schooling",
      year: "2022",
    },
    {
      degree: "Senior School",
      institution: "Blue Heaven Vidyalaya",
      year: "2020",
    }
  ];

  return (
    <section className="py-10 max-h-[70vh]">
      <h2 className="text-3xl font-bold text-white bg-blue-950 border-b-1 p-4">Education</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 m-10 hover:p-5 duration-300">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education