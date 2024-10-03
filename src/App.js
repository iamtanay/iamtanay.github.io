import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar'; // Import the sidebar

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SocialSidebar /> {/* Include the social sidebar */}
    </div>
  );
}

export default App;
