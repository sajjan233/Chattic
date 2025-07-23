import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaNodeJs, FaServer, FaDatabase } from 'react-icons/fa';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-md-4" data-aos="flip-left">
          <div className="p-4 border rounded shadow-sm bg-white h-100">
            <h5 className="fw-bold text-success">Express.js APIs</h5>
            <p className="text-muted">
              I create RESTful APIs using Express.js, with clean routing and middleware.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4" data-aos="flip-up">
          <div className="p-4 border rounded shadow-sm bg-white h-100">
            <h5 className="fw-bold text-success">MongoDB Integration</h5>
            <p className="text-muted">
              Seamless integration of MongoDB using Mongoose for data modeling and querying.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4" data-aos="flip-right">
          <div className="p-4 border rounded shadow-sm bg-white h-100">
            <h5 className="fw-bold text-success">Authentication</h5>
            <p className="text-muted">
              JWT-based secure authentication system with hashed passwords and role-based access.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-5">
        <div className="col-md-4" data-aos="fade-up">
          <div className="p-4 bg-white shadow rounded text-center">
            <FaNodeJs size={40} color="green" className="mb-3" />
            <h5 className="fw-bold">Node.js API</h5>
            <p className="text-muted">
              Built a RESTful API using Express.js, JWT auth, and MongoDB.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="fade-down">
          <div className="p-4 bg-white shadow rounded text-center">
            <FaServer size={40} color="#0d6efd" className="mb-3" />
            <h5 className="fw-bold">Backend System</h5>
            <p className="text-muted">
              Designed scalable backend architecture for real-time apps.
            </p>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in">
          <div className="p-4 bg-white shadow rounded text-center">
            <FaDatabase size={40} color="#6f42c1" className="mb-3" />
            <h5 className="fw-bold">Database Design</h5>
            <p className="text-muted">
              Optimized database schema for high-performance querying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
