import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }}>
      <div className="text-center py-3">© {new Date().getFullYear()} Sajjan. All rights reserved.</div>
    </motion.footer>
  );
}
