// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Sajjan Kumar | Backend Developer</p>
        <p className="mb-0">
          Built with ❤️ using React | Hosted on AWS
        </p>
      </div>
    </footer>
  );
}
