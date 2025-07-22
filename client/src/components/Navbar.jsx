import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className="navbar navbar-expand-lg px-4 py-2">
      <a className="navbar-brand text-decoration-none" href="#">My Portfolio</a>
      <div className="ms-auto">
        <motion.button
          whileTap={{ scale: 0.85 }}
          whileHover={{ rotate: 10 }}
          onClick={toggleTheme}
          className="btn btn-outline-secondary"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </motion.button>
      </div>
    </nav>
  );
}
