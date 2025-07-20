import React from 'react';
import { motion } from 'framer-motion';
import './styles/Hero.css';

const Hero = () => (
  <motion.section
    className="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>Hello, I’m Sajjan 👋</h2>
    <p>Frontend Developer | React Enthusiast</p>
  </motion.section>
);

export default Hero;
