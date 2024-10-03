import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-content">
        
        <div className="job">
          <h3>NuAIg, Indore</h3>
          <p><strong>Software Engineer</strong> - September 2024 - Present</p>
          <ul>
            <li>Developed solutions using advanced Python for AI-driven projects.</li>
            <li>Focused on optimization and scaling for high-performance applications.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Shourya Packaging, Indore</h3>
          <p><strong>Director</strong> - April 2020 - April 2024</p>
          <ul>
            <li>Led a family-owned packaging company serving pharmaceutical industries.</li>
            <li>Optimized production workflows, increasing efficiency by 20%.</li>
            <li>Introduced modern production techniques, improving product quality and customer satisfaction.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Alepo Technologies, Mumbai</h3>
          <p><strong>Software Engineer</strong> - June 2018 - March 2020</p>
          <ul>
            <li>Worked on 4G/5G telecom projects, developing components with C++.</li>
            <li>Developed C++ libraries for JSON parsing, Couchbase DB interactions, and YAML-based server generation.</li>
            <li>Collaborated with telecom giants like Etisalat and ACT, contributing to mission-critical applications.</li>
          </ul>
        </div>


      </div>
    </section>
  );
};

export default Experience;
