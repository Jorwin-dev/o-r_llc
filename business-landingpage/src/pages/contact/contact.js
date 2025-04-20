import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    subject:'',
    message:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: ''});
      } else {
        const data = await res.json();
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to send message.');
      console.error(err);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
              <input type='email' name='email' placeholder='Email Address' value={formData.email} onChange={handleChange} required />
              <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} required />
              <textarea name='message' placeholder='Message' rows='4' value={formData.message} onChange={handleChange} required></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>

          {/* Right Side: Google Map */}
          <div className='contact-map'>
          <iframe 
            title='Company Location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47149.08449822994!2d-71.28130343857426!3d42.38902812444292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377e1771ae4dd%3A0xdeda87621afe5ac4!2sWaltham%2C%20MA!5e0!3m2!1sen!2sus!4v1739990066910!5m2!1sen!2sus" 
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