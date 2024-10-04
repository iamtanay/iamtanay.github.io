import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-content">

        <div className="degree">
          <h3>SVKM's Narsee Monjee Institute of Management Studies (NMIMS)</h3>
          <p><strong>B.Tech in Computer Science</strong> - 2014 - 2018</p>
          <ul>
            <li>Graduated with a solid foundation in computer science principles.</li>
            <li>Participated in various tech workshops and hackathons.</li>
          </ul>
        </div>

        <div className="degree">
          <h3>The Daly College, Indore</h3>
          <p><strong>Higher Secondary Certificate</strong> - 2008 - 2013</p>
          <ul>
            <li>Completed schooling with a strong emphasis on science and mathematics.</li>
            <li>Involved in extracurricular activities, including music, choreography and quizzing competitions.</li>
          </ul>
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            <li>STAR Labs Satellite Masterclass</li>
            <li>CFA(Chartered Financial Analyst USA) Level 1</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;