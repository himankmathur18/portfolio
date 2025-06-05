const Project = () => {
  const projectList = [
    {
      title: "Spotify Clone",
      image: "p2.jpg",
      link: "#",
    },
    {
      title: "M2 Connect",
      image: "p3.jpg",
      link: "https://github.com/himankmathur18/M2-Connect",
    },
    {
      title: "To-Do List",
      image: "p4.jpg",
      link: "#",
    },
  ];

  return (
    <section id="project" className="py-10 ">
      <h2 className="text-3xl font-bold text-white mt-11 bg-blue-950 border-b-1 p-4 ">
        Projects
      </h2>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
  {projectList.map((project, idx) => (
    <div
      key={idx}
      className="rounded-lg bg-white/10 p-4 flex flex-col items-center shadow-md"
    >
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">{project.title}</h3>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 md:h-64 object-cover rounded-2xl mb-4"
      />
      <a
        href={project.link}
        className="text-blue-500 hover:underline border-2 p-2 rounded-2xl w-full text-center"
      >
        View Project
      </a>
    </div>
  ))}
</div>

    </section>
  );
};

export default Project;
