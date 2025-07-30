import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaDatabase, FaWrench, FaGitAlt, FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill, RiBlenderFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icons: TbBrandJavascript, color: "from-blue-500 to-cyan-500" },
        { name: "React", icons: FaReact, color: "from-blue-500 to-cyan-500" },
        { name: "Tailwind CSS", icons: RiTailwindCssFill, color: "from-teal-500 to-cyan-500" },
        { name: "SCSS", icons: RiTailwindCssFill, color: "from-teal-500 to-cyan-500" },
      ],
    },
    {
      title: "Backend",
      icon: FaDatabase,
      skills: [
        { name: "Node.js", icons: FaNodeJs, color: "from-green-600 to-green-400" },
        { name: "Express.js", icons: FaNodeJs, color: "from-green-600 to-green-400" },
        { name: "MongoDB", icons: SiMongodb, color: "from-green-600 to-green-400" },
      ],
    },
    {
      title: "Tools",
      icon: FaWrench,
      skills: [
        { name: "Git", icons: FaGitAlt, color: "from-orange-600 to-orange-400" },
        { name: "Figma", icons: FaFigma, color: "from-blue-600 to-blue-400" },
        { name: "Blender", icons: RiBlenderFill, color: "from-yellow-600 to-yellow-400" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <div className="text-white/70">
                        <skill.icons size={20} className={`bg-gradient-to-r ${skill.color} rounded-full p-1`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Vite", "Bootstrap"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Skills;