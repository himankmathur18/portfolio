import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaCalendar, FaAward } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      id: 1,
      degree: "Bachelor in Computer Application",
      institution: "Poornima University",
      location: "Sitapura, Jaipur, Rajasthan, India",
      duration: "2022 - 2025",
      // gpa: "",
      honors: ["AIDS"],
      coursework: [
        "Artificial Intelligence ",
        "Machine Learning",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      degree: "Senior Secondary School",
      institution: "National Institute of Open Schooling",
      location: "Jaipur Rajasthan India",
      duration: "2021 - 2022",
      // gpa: "",
      // honors: ["Cum Laude", "IEEE Honor Society"],
      coursework: [
        "Accounts",
        "Business Studies",
        "Economic",
        "Information Practices",
      ],
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "Blue Heaven Vidyalaya",
      location: "Jaipur Rajasthan India",
      duration: "2019 - 2020",
      // gpa: "",
      // honors: ["Cum Laude", "IEEE Honor Society"],
    },
  ];

  const certifications = [
    "Web Developing - Great Learning",
    "My SQL - Great Learning",
    "RSCIT - Vardhman Mahaveer Open University",
    "Right To Information And Good Governance - NPTEL",
    "Completion of Internship - Deeporion Tecknology Pvt.Ltd",
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Academic Education */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FaGraduationCap className="mr-3 text-purple-400" size={28} />
              Academic Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={item}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-300 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white/70 text-sm">
                      <div className="flex items-center mb-1 sm:mb-0">
                        <FaCalendar size={14} className="mr-1" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin size={14} className="mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="mb-4">
                      <span className="text-sm font-medium text-white/80">
                        GPA: <span className="text-purple-300">{edu.gpa}</span>
                      </span>
                    </div>
                  )}

                  {edu.honors && (
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-white/80 mb-2">
                        Honors:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-xs rounded-full border border-purple-500/30"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.coursework && (
                    <div>
                      <h5 className="text-sm font-medium text-white/80 mb-2">
                        Relevant Coursework:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FaAward className="mr-3 text-blue-400" size={28} />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3" />
                    <span className="text-white font-medium">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={item}
              className="mt-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30"
            >
              <h4 className="text-lg font-bold text-white mb-3">
                Continuous Learning
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                I believe in lifelong learning and staying up-to-date with the
                latest technologies. I regularly take online courses, attend
                workshops, and participate in coding challenges to enhance my
                skills and knowledge.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;
