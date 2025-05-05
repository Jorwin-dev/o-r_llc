import React from 'react';
import './navbar.css';
import logo from '../../assets/O&R_Logo_no_number.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <img src={logo} alt='Company Logo' className='navbar-logo'/>
        <span className='navbar-title'>O&R LANDSCAPING & CONSTRUCTION</span>
      </div>
      <div className='navbar-right'>
        <a href="/">HOME</a>
        <a href="/services">SERVICES</a>
        <a href="/gallery">GALLERY</a>
        <a href='/reviews'>REVIEWS</a>
        <a href="/contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;