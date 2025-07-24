import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import Skills from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      {/* <About /> */}
      <Hero />
      <Projects />
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
