import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="p-5 bg-secondary text-white">
      <div className="container">
        <h2>Skills</h2>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-light text-dark">React</span>
          <span className="badge bg-light text-dark">Bootstrap</span>
          <span className="badge bg-light text-dark">Node.js</span>
          <span className="badge bg-light text-dark">MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;