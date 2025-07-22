import React from 'react';
import RainEffect from './RainEffect';


export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'black',
        color: 'white',
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
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1>Hi, I'm Sajjan</h1>
        <p>Web Developer | Creative Coder | 3D Enthusiast</p>
      </div>
    </section>
  );
}
