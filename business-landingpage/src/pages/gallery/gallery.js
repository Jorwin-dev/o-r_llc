import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Example images (replace with your own)
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="gallery">
      <h1>Our Work</h1>
      <p>Check out some of our recent landscaping projects.</p>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Project ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;