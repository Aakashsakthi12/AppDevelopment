

import React from 'react';
import './contact.css';
import Navbar from './Navbar';

const ContactPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="contact-page">
   
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please feel free to contact us using the form below.</p>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
   
  );
};

export default ContactPage;
