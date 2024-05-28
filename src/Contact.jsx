import React from 'react';
import emailIcon from './assets/email.png';

const Contact = () => {
  return (
    
    <section id="contact">
        
      <form action="#" method="POST">
        <div className="titles2">
          <h2>Contact</h2>
        </div>
        <p className="contact-text">
          Submit this form here or email me at: {' '}
          <a href="mailto:jvarg122@ucr.edu.com">jvarg122@ucr.edu</a>.
        </p>
        <input type="email" id="email" name="email" placeholder="Email" required />
        <textarea id="message" name="message" placeholder="Your message here" required></textarea>
        <div className="email-button">
          <button type="submit">
            Send
            
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
