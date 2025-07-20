import React from 'react';
import { motion } from 'framer-motion';
import './styles/Projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <h3>Chat App</h3>
      <p>Real-time chat app using React & Socket.io</p>
    </motion.div>
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.05 }}
    >
      <h3>Portfolio Website</h3>
      <p>Responsive portfolio built with React and hosted on GitHub Pages</p>
    </motion.div>
  </section>
);

export default Projects;
