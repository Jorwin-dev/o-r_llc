import React, { useState } from 'react';
import './Contact.css';
const API_BASE = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {

  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    subject:'',
    message:'',
  });

  const [showCities, setShowCities] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('success');
        setFormData({ name: '', email: '', subject: '', message: ''});
      } else {
        //const data = await res.json();
        setStatus('error');
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

            {status === 'success' && (
              <div className="form-status success">
                ✅ Message sent! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                ❌ Something went wrong. Please try again.
              </div>
            )}
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
      <div className='cities-served-wrapper'>
        <div className='cities-served-box'>
          <h3>We Serve the Greater Newton Area</h3>
          <p>Click Below to see the full list of cities we serve!</p>
          <button onClick={() => setShowCities(true)}>View Cities</button>
        </div>
        <div className='email-phone-box'>
          <h3>Contact Information</h3>
          <p>Email: orlandscaping6@gmail.com</p>
          <p>Phone Number: 781-839-0134</p>
        </div>
        <div className='hours-of-op-box'>
          <h3>Hours of Operation</h3>
          <p>Monday - Saturday: 7:00AM - 7:00PM</p>
          <p>Sunday: 7:00AM - 5:00PM</p>
        </div>
      </div>
      <div className='contact-hours-wrapper'>
        
      </div>
      {/* Lightbox Modal */}
      {showCities && (
        <div className='cities-lightbox'>
          <div className='cities-lightbox-content'>
            <button className='close-btn' onClick={() =>
              setShowCities(false)}>X</button>
            <h2>Cities We Serve</h2>
            <div className="cities-list">
              <ul>
                <li>Boston</li>
                <li>Newton</li>
                <li>Cambridge</li>
                <li>Waltham</li>
                <li>Brookline</li>
                <li>Woburn</li>
                <li>Somerville</li>
                <li>Wellesley</li>
                <li>Medford</li>
                <li>Watertown</li>
                <li>Arlington</li>
                <li>Dorchester</li>
                <li>Lexington</li>
                <li>Needham</li>
                <li>West Medford</li>
                <li>Belmont</li>
                <li>Burlington</li>
                <li>Bedford</li>
                <li>Dedham</li>
                <li>West Roxbury</li>
                <li>Newton Highlands</li>
                <li>Auburndale</li>
                <li>Everett</li>
                <li>Hanscom AFB</li>
                <li>Newton Lower Falls</li>
                <li>Sudbury</li>
                <li>Newton Upper Falls</li>
                <li>Babson Park</li>
                <li>Winchester</li>
                <li>Jamaica Plain</li>
                <li>Chestnut Hill</li>
                <li>Newton Center</li>
                <li>Allston</li>
                <li>Needham Heights</li>
                <li>Concord</li>
                <li>West Newton</li>
                <li>Weston</li>
                <li>Brookline Village</li>
                <li>Dover</li>
                <li>Mattapan</li>
                <li>Nonantum</li>
                <li>Wellesley Hills</li>
                <li>Natick</li>
                <li>Lincoln</li>
                <li>Waban</li>
                <li>Brighton</li>
                <li>Wayland</li>
                <li>Charlestown</li>
                <li>New Town</li>
                <li>Waverley</li>
                <li>East Boston</li>
                <li>Arlington Heights</li>
                <li>Roslindale</li>
                <li>Westwood</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;