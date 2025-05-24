// import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Spotify Clone',
      description: 'Description of project one.',
      link: '#'
    },
    {
      title: 'M2 Connect',
      description: 'Description of project two.',
      link: '#'
    },
    {
      title: 'To-Do List',
      description: 'Description of project three.',
      link: '#'
    }
  ];

  return (
    <section className="py-10 max-h-[80vh]">
      <h2 className="text-3xl font-bold text-white bg-blue-950 border-b-1 p-4 ">Projects</h2>
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 m-10 hover:p-5 duration-300">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.technology}</p>
            <a href={project.link} className="text-blue-500 hover:underline mt-4 block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;