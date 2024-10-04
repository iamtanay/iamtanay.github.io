import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State to check if the screen is mobile

  // Check screen size and set mobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMenuOpen(false); // Ensure menu is closed on larger screens
    }
  };

  // Attach resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle menu only if on mobile
  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Tanay Kashyap</h1>
      
      {/* Hamburger Icon only for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Change icon based on menu state */}
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen && isMobile ? "nav-links mobile" : "nav-links"}>
        <li><Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
        <li><Link to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</Link></li>
        <li><Link to="education" smooth={true} duration={500} onClick={toggleMenu}>Education</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;