import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <>
      <motion.header 
        className="navbar"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1>Sajjan Kumar</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      <motion.section 
        className="hero"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <h2>Hello, I’m Sajjan 👋</h2>
        <p>Frontend Developer | React Enthusiast</p>
      </motion.section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m passionate about building clean UI and interactive websites using React.
        </p>
      </section>

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

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 Sajjan Kumar. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Portfolio;
