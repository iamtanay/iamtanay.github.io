import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">

        <div className="project-card">
          <h3>STORM</h3>
          <p>
            A distributed file storage system in C++ focusing on multi-threading, concurrency, and socket programming. It allows multiple clients to store, retrieve, and replicate files across servers.
          </p>
          <a href="https://github.com/iamtanay/storm-server" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>RAVEN</h3>
          <p>
            A Go-based licensing server for React websites that verifies license files before rendering React components. Multithreaded and built with efficient API design.
          </p>
          <a href="https://github.com/iamtanay/raven-licensing-server" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>AURORA</h3>
          <p>
            A chatbot designed for emotional support, featuring mood detection, personalization, and emotionally adaptive responses. Built using Python and various NLP libraries.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>NEXPRO</h3>
          <p>
            A mobile-first business website template using React, integrated with Google Sheets for data management. Tailored for small businesses to maintain an online presence.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;