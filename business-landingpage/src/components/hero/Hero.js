import React, { useState, useEffect } from 'react';
import './Hero.css';

// Importing images
import img1 from '../../assets/Homepage_display-1.jpg';
import img2 from '../../assets/Homepage_display-2.jpg';
import img3 from '../../assets/Homepage_display-3.jpg';
import img4 from '../../assets/Homepage_display-4.jpg';
import img5 from '../../assets/Homepage_display-5.jpg';
import img6 from '../../assets/Homepage_display-6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

// Array of text matching images
const services = [
  "Softscaping",
  "Hardscaping",
  "Fall Cleanup",
  "Winter Services",
  "Lawn & Garden Care",
  "Grass Laying & Sodding"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[imagesLoaded, setImagesLoaded] = useState(false); // Track if images are fully loaded

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(promises);  // Wait for all images to load
      setImagesLoaded(true);    // Set imagesLoaded to true
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [imagesLoaded]); // Only start the slideshow after the images are loaded

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
        <p className='hero-subtext'>Free Estimates Available</p>
        <button className='hero-btn' onClick={() => window.location.href='/contact'}>Contact Us</button>
      </div>

      {/* Loading Spinner */}
      {!imagesLoaded && (
        <div className='loading-spinner'>Loading...</div>
      )}
    </div>
  );
};

export default Hero;
