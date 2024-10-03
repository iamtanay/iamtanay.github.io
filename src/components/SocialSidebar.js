import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons
import '../styles/SocialSidebar.css'; // Import the CSS file for styling

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/tanay-kashyap/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </li>
        <li>
          <a href="https://github.com/iamtanay" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href="https://x.com/iamtanay31" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;