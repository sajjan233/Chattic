import React from 'react';
import './styles/About.css'; // Custom styles for scrolling

export default function About() {
  return (
    <section id="about" className="bg-dark text-light py-5 overflow-hidden">
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          Hi, I'm Sajjan Kumar — a passionate Node.js Backend Developer who loves building fast, scalable, and secure server-side applications using Express.js, MongoDB, JWT, and RESTful APIs. Clean code, real-world impact, and continuous learning drive me every day.
        </div>
      </div>
    </section>
  );
}
