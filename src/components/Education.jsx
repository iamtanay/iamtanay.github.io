import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const education = [
    {
      institution: "SVKM's Narsee Monjee Institute of Management Studies (NMIMS)",
      degree: 'B.Tech in Computer Science',
      period: '2014 - 2018',
      description: [
        'Graduated with a solid foundation in computer science principles.',
        'Participated in various tech workshops and hackathons.',
      ],
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      institution: 'The Daly College, Indore',
      degree: 'Higher Secondary Certificate',
      period: '2008 - 2013',
      description: [
        'Completed schooling with a strong emphasis on science and mathematics.',
        'Involved in extracurricular activities, including music, choreography and quizzing competitions.',
      ],
      icon: FaGraduationCap,
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const certifications = [
    'STAR Labs Satellite Masterclass',
    'CFA(Chartered Financial Analyst USA) Level 1',
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
    <section id="education" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Education
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-5`}></div>
                
                <div className="relative z-10">
                  {/* Icon and period */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} bg-opacity-20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <edu.icon className="text-2xl text-white" />
                    </motion.div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Institution */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.institution}
                  </h3>

                  {/* Degree */}
                  <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-4`}>
                    {edu.degree}
                  </p>

                  {/* Description */}
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start text-sm">
                        <span className="text-primary-400 mr-2 mt-2 w-1 h-1 bg-primary-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-5"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center mb-6">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 bg-opacity-20 mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCertificate className="text-2xl text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold gradient-text">Certifications</h3>
              </div>

              {/* Certifications list */}
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center p-4 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                  >
                    <span className="text-green-400 mr-3 w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education