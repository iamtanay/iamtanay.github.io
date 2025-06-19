import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/tanay-kashyap/',
      color: 'hover:text-blue-400',
      name: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/iamtanay',
      color: 'hover:text-gray-400',
      name: 'GitHub',
    },
    {
      icon: FaTwitter,
      url: 'https://x.com/iamtanay31',
      color: 'hover:text-cyan-400',
      name: 'Twitter',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="glass rounded-2xl p-4 border border-primary-500/20">
        <div className="flex flex-col space-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl bg-gray-700/30 text-gray-400 ${social.color} transition-all duration-300 group relative`}
              title={social.name}
            >
              <social.icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {social.name}
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Vertical line */}
        <div className="w-px h-16 bg-gradient-to-b from-primary-500 to-transparent mx-auto mt-4"></div>
      </div>
    </motion.div>
  );
};

export default SocialSidebar;