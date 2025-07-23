import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiVisualstudiocode } from 'react-icons/si';
import './styles/skill.css';

export default function Skills() {
  const skills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-success" /> },
    { name: 'Express.js', icon: <SiExpress className="text-light" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-success" /> },
    { name: 'React', icon: <FaReact className="text-info" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-danger" /> },
    { name: 'Postman', icon: <SiPostman className="text-warning" /> },
    { name: 'VS Code', icon: <SiVisualstudiocode className="text-primary" /> },
    { name: 'Docker', icon: <FaDocker className="text-info" /> },
    { name: 'AWS', icon: <FaAws className="text-warning" /> },
  ];

  return (
    <section id="skills" className="container py-5">
      <div data-aos="fade-up" className="text-center mb-4">
        <h2 className="fw-bold">🧠 My Skills</h2>
        <p className="text-muted">Technologies I work with regularly</p>
      </div>

      <div className="row g-4 justify-content-center" data-aos="fade-up">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-3 text-center skill-card">
            <div className="icon-box">
              {skill.icon}
            </div>
            <p className="mt-2 fw-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
