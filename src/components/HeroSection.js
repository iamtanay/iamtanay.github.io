import React from 'react';
import { Link } from 'react-scroll';
import { ReactTyped as Typed } from 'react-typed';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>
          Hi, I'm <span><Typed strings={['Tanay Kashyap']} typeSpeed={100} backSpeed={0} backDelay={0} loop={false} /></span>
        </h1>
        <p>MERN | C++ | Python | Go</p>
        <Link to="contact" smooth={true} duration={500} className="cta-button">Let's Connect</Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;