import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-5 bg-white text-dark">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4"><div className="card p-3 shadow">Project 1</div></div>
          <div className="col-md-4"><div className="card p-3 shadow">Project 2</div></div>
          <div className="col-md-4"><div className="card p-3 shadow">Project 3</div></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;