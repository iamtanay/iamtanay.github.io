import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [name, setName] = useState('');
  const fullName = 'Tanay Kashyap';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setName((prev) => prev + fullName[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Typing speed
    return () => clearInterval(typingInterval);
  }, []);
  
  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>
          Hi, I'm <span>{name}</span>
        </h1>
        <p>MERN | C++ | Python | Go</p>
        <Link to="contact" smooth={true} duration={500} className="cta-button">Let's Connect</Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
