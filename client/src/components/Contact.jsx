import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:1 }}>
      <div className="p-4 text-center">
        <h2>Contact Me</h2>
        <p>Email me at <a href="mailto:you@example.com">you@example.com</a></p>
      </div>
    </motion.section>
  );
}
