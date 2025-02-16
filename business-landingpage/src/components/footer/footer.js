import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faHouzz } from '@fortawesome/free-brands-svg-icons'
//import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-left'>
        <p>Copyright © 2025 | All rights reserved.</p>
      </div>
      <div className='footer-right'>
        <a href='https://www.facebook.com/ORlandscapingconstruction' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebookF}/>
        </a>
        <a href='https://www.instagram.com/or.landscaping/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
        <a href='https://www.homeadvisor.com/rated.ORLandscaping.114362277.html' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faHouzz}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;