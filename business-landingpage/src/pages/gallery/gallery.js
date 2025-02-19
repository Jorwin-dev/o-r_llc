import React, { useState } from "react";
import "./Gallery.css";

import img1 from "../../assets/O&R_Fall-1.JPG";
import img2 from "../../assets/O&R_Fall-2.JPG";
import img3 from "../../assets/O&R_Fall-3.JPG";
import img4 from "../../assets/O&R_Fall-4.JPG";
import img5 from "../../assets/O&R_Fall-5.JPG";
import img6 from "../../assets/O&R_Fall-6.JPG";
import img7 from "../../assets/patio_driveway-ext_sodding-1.JPG";
import img8 from "../../assets/patio_driveway-ext_sodding-1.JPG";
import img9 from "../../assets/patio_fence1.JPG";
import img10 from "../../assets/patio_fence2.JPG";
import img11 from "../../assets/mulching_cleanup.JPG";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Expanded View" className="lightbox-image" />
          <span className="close-lightbox" onClick={() => setSelectedImage(null)}>×</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
