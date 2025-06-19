import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'tanay@example.com',
      link: 'mailto:tanay@example.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXX',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Indore, India',
      link: '',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tanay-kashyap/',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/iamtanay',
      color: 'hover:text-gray-400',
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://x.com/iamtanay31',
      color: 'hover:text-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's discuss your next project or just say hello!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-4 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="text-xl text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg bg-gray-700/50 text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Google Form Embed) */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-8 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="relative h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://forms.gle/SxkKSNYAbdaKhUo77"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="Contact Form"
                  className="rounded-xl"
                >
                  Loading…
                </iframe>
                
                {/* Overlay for better integration */}
                <div className="absolute inset-0 pointer-events-none border border-primary-500/20 rounded-xl"></div>
              </div>
              
              <p className="text-gray-400 text-sm mt-4 text-center">
                Or reach out directly via email or social media
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;