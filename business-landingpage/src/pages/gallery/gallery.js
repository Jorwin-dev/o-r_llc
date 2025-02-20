import React, { useState } from "react";
import "./Gallery.css";

import img1 from "../../assets/O&R_Fall-1.JPG";
import img2 from "../../assets/O&R_Fall-2.JPG";
import img3 from "../../assets/O&R_Fall-3.JPG";
import img4 from "../../assets/O&R_Fall-4.JPG";
import img5 from "../../assets/O&R_Fall-5.JPG";
import img6 from "../../assets/O&R_Fall-6.JPG";
import img7 from "../../assets/patio_driveway-ext_sodding-1.JPG";
import img8 from "../../assets/patio_driveway-ext_sodding-2.JPG";
import img9 from "../../assets/patio_fence1.JPG";
import img10 from "../../assets/patio_fence2.JPG";
import img11 from "../../assets/mulching_cleanup.JPG";
import img12 from "../../assets/groundskeeping1.JPG";
import img13 from "../../assets/groundskpeeing2.JPG";
import img14 from "../../assets/driveway_ext_and_mulch1.JPG";
import img15 from "../../assets/driveway_ext_and_mulch2.JPG";
import img16 from "../../assets/driveway_ext_and_mulch3.JPG";
import img17 from "../../assets/banda_nenatural1.JPG";
import img18 from "../../assets/banda_nenatural2.JPG";
import img19 from "../../assets/snow_night.JPG";
import img20 from "../../assets/snow_day.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="gallery-container">
      {/* Image Grid */}
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${index + 1}`}
            className="gallery-image"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox">
          <span className="close-lightbox" onClick={closeLightbox}>×</span>

          {/* Previous Arrow */}
          <span className="lightbox-arrow left" onClick={prevImage}>&#10094;</span>

          {/* Main Image */}
          <img src={selectedImage} alt="Expanded View" className="lightbox-image" />

          {/* Next Arrow */}
          <span className="lightbox-arrow right" onClick={nextImage}>&#10095;</span>

          {/* Thumbnails */}
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
