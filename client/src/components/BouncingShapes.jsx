import React from 'react';
import { motion } from 'framer-motion';
import './styles/BouncingShapes.css';

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut"
  }
};

function BouncingShapes() {
  return (
    <div className="bouncing-container">
      <motion.div
        className="shape ball"
        animate={{ y: ["0%", "-100%"] }}
        transition={bounceTransition}
      />
      <motion.div
        className="shape box"
        animate={{ y: ["0%", "-80%"] }}
        transition={{ ...bounceTransition, y: { ...bounceTransition.y, duration: 0.8 } }}
      />
      <motion.div
        className="shape dot"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ ...bounceTransition, y: { ...bounceTransition.y, duration: 0.4 } }}
      />
    </div>
  );
}

export default BouncingShapes;
