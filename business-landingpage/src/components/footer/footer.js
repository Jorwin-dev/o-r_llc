import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faHouzz, faYelp, faCcVisa, faCcMastercard, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import { faThumbtack, faMoneyBillWave, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import logoWithPhone from '../../assets/O&R_Logo_w_number.png';
import venmoLogo from '../../assets/Venmo_App_Icon.png'; // <-- Your Venmo image
import zelleLogo from '../../assets/Zelle_App_Icon.png'; // <-- Your Zelle image

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className='footer-left'>
          {/* Payment Methods */}
          <FontAwesomeIcon icon={faCcVisa} size="2x" />
          <FontAwesomeIcon icon={faCcMastercard} size="2x" />
          <FontAwesomeIcon icon={faCcAmex} size="2x" />
          <FontAwesomeIcon icon={faCcDiscover} size="2x" />
          <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
          <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
          <img src={venmoLogo} alt="Venmo" className="payment-icon1" />
          <img src={zelleLogo} alt="Zelle" className="payment-icon2" />
        </div>

        <div className='footer-center'>
          <a href='tel:7818390134'>
            <img src={logoWithPhone} alt='O&R Landscaping & Construction Phone Logo' className='footer-logo' />
          </a>
        </div>

        <div className='footer-right'>
          <a href='https://www.instagram.com/or.landscaping/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.facebook.com/ORlandscapingconstruction' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='https://www.yelp.com/biz/o-and-r-landscaping-and-construction-newton' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faYelp} />
          </a>
          <a href='https://www.thumbtack.com/ma/west-newton/lawn-care/or-landscaping-construction/service/486509951875792922' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faThumbtack} />
          </a>
          <a href='https://www.homeadvisor.com/rated.ORLandscaping.114362277.html' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faHouzz} />
          </a>
        </div>
      </footer>

      {/* Mini-footer for centered copyright */}
      <div className="mini-footer">
        <p>© 2025 | Site Designed by <a href="https://www.linkedin.com/in/jorwin-roberto-reyes-191b26257/" target="_blank" rel="noopener noreferrer">Jorwin Reyes</a></p>
      </div>
    </>
  );
};

export default Footer;
