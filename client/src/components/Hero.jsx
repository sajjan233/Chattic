import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RainEffect from './RainEffect';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="home"
      className="hero-section"
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        color: '#fff',
        zIndex: 1,
      }}
    >
      <RainEffect />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          padding: '2rem',
        }}
      >
        <h1
          className="fw-bold display-4"
          data-aos="fade-down"
          style={{ color: '#3cfa7e' }}
        >
          👋 Hi, I'm a Node.js Developer
        </h1>

        <p
          className="lead mt-3"
          data-aos="fade-up"
          style={{ maxWidth: '600px', color: '#ddd' }}
        >
          I build scalable backend services using Node.js, Express, MongoDB and RESTful APIs.
        </p>

        <a
          href="#projects"
          className="btn btn-outline-light mt-4"
          data-aos="zoom-in"
        >
          🔧 View My Work
        </a>
      </div>
    </section>
  );
}
