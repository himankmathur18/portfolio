// import React from 'react'

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications",
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
    <section id="education" className="py-6 min-h-screen ">
      <h2 className="text-3xl font-bold text-white bg-blue-950 border-b-1 p-4 mt-[1.5em]">
        Education
      </h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-4 px-2 xs:px-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-3 xs:p-4 m-3 xs:m-5 hover:p-4 xs:hover:p-5 duration-300"
          >
            <h3 className="text-base xs:text-lg sm:text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 text-sm xs:text-base">{edu.institution}</p>
            <p className="text-gray-500 text-xs xs:text-sm">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education