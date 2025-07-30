import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "White Cinette",
      location: "Jaipur Rajasthan",
      duration: "Jun-2025 to Present",
      technologies: ["React", "Node.js", "Express", "Git control"],
      description: ["Developed responsive web applications"], // Updated to empty array or add actual descriptions
    },
    {
      id: 2,
      title: "Software Developer Intern",
      company: "Deeporion Technology Pvt.Ltd",
      location: "Jawahar Circle Jaipur Rajasthan",
      duration: "Feb-2025 to May-2025",
      technologies: ["React", "Tailwind CSS", "Git control"],
      description: ["Developed responsive web applications", "Collaborated with senior developers"], 
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute left-2 sm:left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900" />

              <div className="ml-12 sm:ml-20">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-purple-300 mb-2">
                        <FaExternalLinkAlt size={16} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-2">
                      <div className="flex items-center text-white/70">
                        <FaCalendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-white/70">
                        <FiMapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Render descriptions only if they exist and are non-empty */}
                  {exp.description && exp.description.length > 0 && exp.description.some((desc) => desc.trim() !== "") ? (
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((desc, i) => (
                        desc.trim() !== "" && (
                          <li key={i} className="text-white/80 flex items-start">
                            <span className="text-purple-400 mr-2 mt-2">•</span>
                            <span>{desc}</span>
                          </li>
                        )
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/80 mb-6">No description available</p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-sm rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;