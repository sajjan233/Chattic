import React from 'react';
import './styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
