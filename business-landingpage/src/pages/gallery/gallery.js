import React, { useState } from "react";
import "./Gallery.css";

import img1 from "../../assets/O&R_Fall-1.JPG";
import img2 from "../../assets/O&R_Fall-2.JPG";
import img3 from "../../assets/O&R_Fall-3.JPG";
import img4 from "../../assets/O&R_Fall-4.JPG";
import img5 from "../../assets/O&R_Fall-5.JPG";
import img6 from "../../assets/O&R_Fall-6.JPG";
import img59 from "../../assets/O&R_Fall-7.JPG";
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
import img21 from "../../assets/driveway_transform-1.jpg";
import img22 from "../../assets/driveway_transform-2.jpg";
import img23 from "../../assets/driveway_transform-3.jpg";
import img24 from "../../assets/driveway_transform-4.jpg";
import img25 from "../../assets/driveway_transform-5.jpg";
import img26 from "../../assets/driveway_transform-6.jpg";
import img27 from "../../assets/fence_repair-1.jpg";
import img28 from "../../front_house_res-1.jpg";
import img29 from "../../front_house_res-2.jpg";
import img30 from "../../front_house_res-3.jpg";
import img31 from "../../front_house_res-4.jpg";
import img32 from "../../front_house_res-5.jpg";
import img33 from "../../front_house_res-6.jpg";
import img34 from "../../assets/groundskeeping-1.webp";
import img35 from "../../assets/groundskeeping-2.webp";
import img36 from "../../assets/groundskeeping-3.webp";
import img37 from "../../assets/groundskeeping-4.webp";
import img38 from "../../assets/outdoor_home-1.jpg";
import img39 from "../../assets/outdoor_home-2.jpg";
import img40 from "../../assets/outdoor_home-3.jpg";
import img41 from "../../assets/outdoor_home-4.jpg";
import img42 from "../../assets/outdoor_home-5.jpg";
import img43 from "../../assets/outdoor_home-6.jpg";
import img44 from "../../assets/outdoor_home-7.jpg";
import img45 from "../../assets/outdoor_home-8.jpg";
import img46 from "../../assets/outdoor_home-9.jpg";
import img47 from "../../assets/patio_fence1.JPG";
import img48 from "../../assets/patio_fence2.JPG";
import img49 from "../../assets/pool_wall-1.jpg";
import img50 from "../../assets/pool_wall-2.jpg";
import img51 from "../../assets/pool_wall-3.jpg";
import img52 from "../../assets/pool_wall-4.jpg";
import img53 from "../../assets/pool_wall-5.jpg";
import img54 from "../../assets/pool_wall-6.jpg";
import img55 from "../../assets/pool_wall-7.jpg";
import img56 from "../../assets/pool_wall-8.jpg";
import img57 from "../../assets/pool_wall-9.jpg";
import img58 from "../../assets/pool_wall-10.jpg";

// Importing Before & After Groups
const projectGroups = [
  {
    title: "Fall Cleanup",
    coverImage: img6,
    images: [img1, img2, img3, img4, img5, img6, img59],
  },
  {
    title: "Patio, Driveway & Sodding",
    coverImage: img8,
    images: [img7, img8],
  },
  {
    title: "Patio Fencing",
    coverImage: img10,
    images: [img9, img10],
  },
  {
    title: "Mulching Cleanup",
    coverImage: img11,
    images: [img11],
  },
  {
    title: "Landscaping",
    coverImage: img12,
    images: [img13, img12],
  },
]

const Gallery = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="gallery-container">
      {/* Display Project Groups */}
      <div className="project-grid">
        {projectGroups.map((group, index) => (
          <div key={index} className="project-item" onClick={() => setSelectedGroup(group)}>
            <img src={group.coverImage} alt={group.title} className="project-thumbnail" />
            <div className="project-title">{group.title}</div>
          </div>
        ))}
      </div>

      {/* Lightbox for selected project */}
      {selectedGroup && (
        <div className="lightbox" onClick={() => setSelectedGroup(null)}>
          <img src={selectedGroup.images[selectedImageIndex]} alt="Expanded View" className="lightbox-image" />
          <span className="close-lightbox" onClick={() => setSelectedGroup(null)}>×</span>

          {/* Navigation Arrows */}
          <span className="lightbox-prev" onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + selectedGroup.images.length) % selectedGroup.images.length)}>‹</span>
          <span className="lightbox-next" onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % selectedGroup.images.length)}>›</span>

          {/* Thumbnail Navigation */}
          <div className="thumbnail-bar">
            {selectedGroup.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`thumbnail ${selectedImageIndex === idx ? "active-thumbnail" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(idx);
                }}
                alt={`Thumbnail ${idx}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
