import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaRobot, FaMobile } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const projects = [
    {
      title: 'STORM',
      description: 'A distributed file storage system in C++ focusing on multi-threading, concurrency, and socket programming. It allows multiple clients to store, retrieve, and replicate files across servers.',
      tech: ['C++', 'Multi-threading', 'Socket Programming', 'Distributed Systems'],
      github: 'https://github.com/iamtanay/storm-server',
      demo: '',
      icon: FaServer,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'RAVEN',
      description: 'A Go-based licensing server for React websites that verifies license files before rendering React components. Multithreaded and built with efficient API design.',
      tech: ['Go', 'React', 'API Design', 'Licensing'],
      github: 'https://github.com/iamtanay/raven-licensing-server',
      demo: '',
      icon: FaCode,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'AURORA',
      description: 'A chatbot designed for emotional support, featuring mood detection, personalization, and emotionally adaptive responses. Built using Python and various NLP libraries.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Chatbot'],
      github: '',
      demo: '',
      icon: FaRobot,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'NEXPRO',
      description: 'A mobile-first business website template using React, integrated with Google Sheets for data management. Tailored for small businesses to maintain an online presence.',
      tech: ['React', 'Google Sheets API', 'Mobile-First', 'Business'],
      github: '',
      demo: '',
      icon: FaMobile,
      color: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

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
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
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
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20 mr-4`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <project.icon className="text-2xl text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-600/50 transition-all duration-300"
                        >
                          <FaGithub size={20} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-600/50 transition-all duration-300"
                        >
                          <FaExternalLinkAlt size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-sm bg-gradient-to-r ${project.color} bg-opacity-20 text-white rounded-full border border-gray-600/50 hover:border-primary-400/50 transition-all duration-300 cursor-default`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/iamtanay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-purple-600 rounded-full hover:from-primary-500 hover:to-purple-500 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub className="mr-2" />
              </motion.div>
              View More Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects