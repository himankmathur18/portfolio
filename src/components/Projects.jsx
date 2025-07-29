import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegStar, FaEye, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Spotify Clone",
      description:
        "Developed a front-end clone of spotify replicating the layout, design, and user interface of the original application. Built with React, Tailwind CSS with API fetching.",
      image:
        "/spotify-clone.png",
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/himankmathur18/Latest-Spotify",
      featured: false,
      category: "Frontend",
    },
    {
      id: 2,
      title: "M2 Connect",
      description:
        "M2 Connect is an innovative and user-centric web application built to enhance the digital music experience by simplifying the song downloading process. The core functionality of the platform revolves around enabling users to download individual songs or multiple songs at once, providing flexibility and efficiency based on user needs. ",
      image:
        "/M2-Connect.png",
      technologies: ["React", "Tailwind CSS", "Jio saavan API"],
      githubUrl: "https://github.com/himankmathur18/M2-Connect",
      featured: false,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, Courant time fetch acceding to the location, and weather analytics.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "Java Script"],
      githubUrl: "https://github.com/himankmathur18/Weather-Forecast",
      featured: false,
      category: "Frontend",
    },
    {
      id: 4,
      title: "Apple-Clone",
      description:
        "I recreated the official Apple homepage as functional clone using React.js for the component-based structure and Tailwind CSS for modern, utility-first styling. This project replicates the sleek, minimalistic Apple design and focuses on visual precision.",
      image:
        "/apple clone.png",
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/himankmathur18/Apple-Clone",
      featured: false,
      category: "Frontend",
    },
    {
      id: 5,
      title: "Food Blog",
      description:
        "I developed a full-stack Food Recipe web application using React.js, SCSS, Node.js, and MongoDB, where users can securely sign up, log in, and manage their own collection of custom recipes. The app features a modern, responsive UI with smooth navigation and interactive elements like personalized dashboards. Backed by RESTful APIs, it supports full CRUD operations, allowing dynamic user-specific content and real-time updates.",
      image:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "SCSS", "Node.js", "Mongo.db"],
      githubUrl: "https://github.com/himankmathur18/Food-Blog",
      featured: false,
      category: "Full Stack",
    },
    {
      id: 6,
      title: "Face 3D Model ",
      description:
        "Designed and sculpted a realistic 3D human face model using Blender, focusing on detailed facial anatomy, proportions, and texture mapping. Applied lighting, shading, and material effects to enhance realism and rendered high-quality outputs suitable for use in animations or games.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Blender"],
      githubUrl: "#",
      featured: false,
      category: "3D Model",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and creativity
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 ${
                project.featured ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white text-sm font-medium">
                    <FaRegStar size={14} />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <FaGithub size={20} className="text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={16} className="mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-8">
            Want to see more of my work? Check out my GitHub profile for
            additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/himankmathur18"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <FaGithub size={20} className="mr-2" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
