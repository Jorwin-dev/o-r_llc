import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-left'>
        <p>Copyright © 2025 | All rights reserved.</p>
      </div>
      <div className='footer-right'>
        <a href='https://www.facebook.com/ORlandscapingconstruction' target='_blank' rel='noopener noreferrer'>FB</a>
        <a href='https://www.instagram.com/or.landscaping/' target='_blank' rel='noopener noreferrer'>IG</a>
        <a href='https://www.homeadvisor.com/rated.ORLandscaping.114362277.html' target='_blank' rel='noopener noreferrer'>HA</a>
      </div>
    </footer>
  );
};

export default Footer;