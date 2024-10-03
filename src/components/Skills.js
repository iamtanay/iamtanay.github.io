import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="skill-item">
          <h3>C++</h3>
          <p>Advanced level with experience in multi-threading, concurrency, and systems programming.</p>
        </div>
        <div className="skill-item">
          <h3>Python</h3>
          <p>Proficient in Python for data analysis, ML, and API development using Flask/Django.</p>
        </div>
        <div className="skill-item">
          <h3>MERN Stack</h3>
          <p>Full stack development with MongoDB, Express.js, React, and Node.js for scalable web applications.</p>
        </div>
        <div className="skill-item">
          <h3>AWS & Docker</h3>
          <p>Experience in cloud deployment and containerization for scalable apps.</p>
        </div>
        <div className="skill-item">
          <h3>Go</h3>
          <p>Proficient in developing robust applications with Go.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;