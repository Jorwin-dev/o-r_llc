import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faHouzz, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import logoWithPhone from '../../assets/O&R_Logo_w_number.png';
import venmoLogo from '../../assets/Venmo_App_Icon.png';
import zelleLogo from '../../assets/Zelle_App_Icon.png'; 
import visaLogo from '../../assets/visa-logo.webp';
import mastercardLogo from '../../assets/mastercard-logo.png';
import amexLogo from '../../assets/American-Express-logo.png';
import discoverLogo from '../../assets/discover-logo.png';
import cashLogo from '../../assets/cash-logo.png';
import chequeLogo from '../../assets/cheque-logo.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
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
      
        <div className='footer-center'>
          <a href='tel:7818390134'>
            <img src={logoWithPhone} alt='O&R Landscaping & Construction Phone Logo' className='footer-logo' />
          </a>
        </div>

        <div className='footer-left'>
          {/* Payment Methods */}
          <img src={visaLogo} alt="Visa" className="visa-icon" />
          <img src={mastercardLogo} alt="Mastercard" className="master-icon" />
          <img src={amexLogo} alt="Amex" className="amex-icon" />
          <img src={discoverLogo} alt="Discover" className="discover-icon" />
          <img src={cashLogo} alt="Cash" className="cash-icon" />
          <img src={chequeLogo} alt="Cheque" className="cheque-icon" />
          <img src={venmoLogo} alt="Venmo" className="venmo-icon" />
          <img src={zelleLogo} alt="Zelle" className="zelle-icon" />
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
