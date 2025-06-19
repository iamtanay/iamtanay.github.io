import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaCloud, FaDatabase, FaMobile } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: FaServer,
      color: 'from-green-500 to-teal-500',
      skills: ['Node.js', 'Express.js', 'Python', 'C++', 'Go', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: FaDatabase,
      color: 'from-purple-500 to-pink-500',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Couchbase'],
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      color: 'from-orange-500 to-red-500',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    },
    {
      title: 'Tools & Others',
      icon: FaMobile,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Agile'],
    },
  ];

  const mainSkills = [
    {
      name: 'C++',
      description: 'Advanced level with experience in multi-threading, concurrency, and systems programming.',
      level: 90,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Python',
      description: 'Proficient in Python for data analysis, ML, and API development using Flask/Django.',
      level: 85,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'MERN Stack',
      description: 'Full stack development with MongoDB, Express.js, React, and Node.js for scalable web applications.',
      level: 88,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'AWS & Docker',
      description: 'Experience in cloud deployment and containerization for scalable apps.',
      level: 80,
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Go',
      description: 'Proficient in developing robust applications with Go.',
      level: 75,
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Main Skills with Progress Bars */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mainSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  className="glass rounded-2xl p-6 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                    <span className="text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 mr-4`}>
                      <category.icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05, duration: 0.5 }}
                        className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-primary-400/50 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;