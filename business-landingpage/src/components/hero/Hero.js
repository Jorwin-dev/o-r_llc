import React, { useState, useEffect } from 'react';
import './Hero.css';

// Importing images
import img1 from '../../assets/groundskpeeing2.JPG';
import img2 from '../../assets/mulching_cleanup.JPG';
import img3 from '../../assets/O&R_Fall-1.JPG';
import img4 from '../../assets/O&R_Fall-4.JPG';
import img5 from '../../assets/patio_driveway-ext_sodding-2.JPG';
import img6 from '../../assets/snow_night.JPG';

const images = [img1, img2, img3, img4, img5, img6];

// Array of text matching images
const services = [
  "Expert Landscaping Services",
  "Mulching & Cleanup",
  "Seasonal Fall Maintenance",
  "Garden & Lawn Care",
  "Patios, Driveways & Sodding",
  "Snow Removal & Winter Services"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero'>
      {/* Background Slideshow */}
      <div
        className='hero-background'
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Text Overlay */}
      <div className='hero-overlay'>
        <h1>{services[currentIndex]}</h1> {/* Dynamic text update */}
      </div>
    </div>
  );
};

export default Hero;
