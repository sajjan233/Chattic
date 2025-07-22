import React from 'react';
import ThreeModel from './ThreeModel';

export default function About() {
  return (
    <section id="about" style={{ background: '#111', color: '#fff' }}>
      <h2 className="text-center pt-4">About Me</h2>
      <p className="text-center px-3 pb-3">
        I love working with interactive 3D and creative web experiences.
      </p>
      <ThreeModel />
    </section>
  );
}
