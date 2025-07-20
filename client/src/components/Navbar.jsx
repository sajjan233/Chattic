import React from 'react';
import { motion } from 'framer-motion';
import './styles/Navbar.css';

const Navbar = () => (
  <motion.header 
    className="navbar"
    initial={{ y: -60, opacity: 0 }}
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
);

export default Navbar;
