import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faHouzz } from '@fortawesome/free-brands-svg-icons'
import logoWithPhone from '../../assets/O&R_Logo_w_number.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-left'>
          <a href='/home'>Copyright © 2025</a> 
          <p> | </p>
          <a href='https://www.linkedin.com/in/jorwin-reyes-191b26257/' target='_blank' rel='noopener noreferrer' className='footer-link'> 
          Site Design 
          </a> 
          <p> | </p> 
          <a href='/contact' className='footer-link'> 
          Contact 
          </a>
      </div>

      <div className='footer-center'>
        <a href='tel:7818390134'>
          <img src={logoWithPhone} alt='O&R Landscaping & Construction Phone Logo' className='footer-logo '/>
        </a>
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