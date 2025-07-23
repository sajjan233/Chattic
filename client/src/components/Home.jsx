import React from 'react';

function Home() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="fw-bold display-5">👋 Hello, I'm a Node.js Developer</h1>
        <p className="text-muted mt-3">
          Building fast, scalable server-side applications with JavaScript and Express.js.
        </p>
        <button className="btn btn-success mt-4">View Backend Projects</button>
      </div>

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
    </section>
  );
}

export default Home;
