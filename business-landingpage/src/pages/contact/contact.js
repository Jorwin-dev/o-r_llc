import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
      {/* Darkened Background */}
      <div className='contact-bg'></div>

      {/* Content Section */}
      <div className='contact-content'>
          {/* Left Side: Contact Form */}
          <div className='contact-form'>
            <h2>Contact Us</h2>
            <p>We'd love to hear from you. Send us a message!</p>
            <form>
              <input type='text' placeholder='Name' required />
              <input type='email' placeholder='Email Address' required />
              <input type='text' placeholder='Subject' required />
              <textarea placeholder='Message' rows='4' required></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>

          {/* Right Side: Google Map */}
          <div className='contact-map'>
          <iframe 
            title='Company Location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.038654749189!2d-71.24145112362154!3d42.36301547119261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382e03d922629%3A0xabb83e3cd2b32de!2s777%20Moody%20St%2C%20Waltham%2C%20MA%2002453!5e0!3m2!1sen!2sus!4v1739822331736!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
          ></iframe>
          </div>
      </div>
    </div>
  );
};

export default Contact;