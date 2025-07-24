import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true); // manually manage collapse

  // Scroll Hide/Show Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Toggle collapse menu
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Close on link click
  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3 transition-navbar ${
        showNavbar ? 'show' : 'hide'
      }`}
    >
      <a className="navbar-brand" href="#">MyPortfolio</a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#home" onClick={closeNavbar}>Home</a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#projects" onClick={closeNavbar}>Projects</a>
          </li>
            <li className="nav-item">
            <a className="nav-link" href="#skills" onClick={closeNavbar}>Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={closeNavbar}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
