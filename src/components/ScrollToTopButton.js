import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing the upward arrow icon
import '../styles/ScrollToTopButton.css'; // Create a CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show the button when scrolling down
    } else {
      setIsVisible(false); // Hide the button when at the top
    }

    // Handle scrolling state
    setIsScrolling(true);
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 150); // Set a timeout to detect scroll stop
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolling) {
      setOpacity(0.4); // Decrease opacity while scrolling
    } else {
      setOpacity(0.8); // Reset opacity when scrolling stops
    }
  }, [isScrolling]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  if (!isVisible) return null; // Don't render button if not visible

  return (
    <div 
      className="scroll-to-top" 
      style={{ opacity }} 
      onClick={scrollToTop}
    >
      <FaArrowUp size={30} /> {/* Upward facing arrow */}
    </div>
  );
};

export default ScrollToTopButton;