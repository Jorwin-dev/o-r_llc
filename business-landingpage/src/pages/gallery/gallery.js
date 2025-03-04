import React, { useState, useEffect } from "react";
import "./Gallery.css";

import img1 from "../../assets/O&R_Fall-1.JPG";
import img2 from "../../assets/O&R_Fall-2.JPG";
import img3 from "../../assets/O&R_Fall-3.JPG";
import img4 from "../../assets/O&R_Fall-4.JPG";
import img5 from "../../assets/O&R_Fall-5.JPG";
import img6 from "../../assets/O&R_Fall-6.JPG";
import img57 from "../../assets/O&R_Fall-7.jpg";
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
import img28 from "../../assets/front_house_res-1.jpg";
import img29 from "../../assets/front_house_res-2.jpg";
import img30 from "../../assets/front_house_res-3.jpg";
import img31 from "../../assets/front_house_res-4.jpg";
import img32 from "../../assets/front_house_res-5.jpg";
import img33 from "../../assets/front_house_res-6.jpg";
import img34 from "../../assets/groundskeeping-1.webp";
import img35 from "../../assets/groundskeeping-2.webp";
import img36 from "../../assets/groundskeeping-3.webp";
import img38 from "../../assets/outdoor_home-1.jpg";
import img39 from "../../assets/outdoor_home-2.jpg";
import img40 from "../../assets/outdoor_home-3.jpg";
import img41 from "../../assets/outdoor_home-4.jpg";
import img42 from "../../assets/outdoor_home-5.jpg";
import img43 from "../../assets/outdoor_home-6.jpg";
import img44 from "../../assets/outdoor_home-7.jpg";
import img45 from "../../assets/outdoor_home-8.jpg";
import img46 from "../../assets/outdoor_home-9.jpg";
import img47 from "../../assets/pool_wall-1.jpg";
import img48 from "../../assets/pool_wall-2.jpg";
import img49 from "../../assets/pool_wall-3.jpg";
import img50 from "../../assets/pool_wall-4.jpg";
import img51 from "../../assets/pool_wall-5.jpg";
import img52 from "../../assets/pool_wall-6.jpg";
import img53 from "../../assets/pool_wall-7.jpg";
import img54 from "../../assets/pool_wall-8.jpg";
import img55 from "../../assets/pool_wall-9.jpg";
import img56 from "../../assets/pool_wall-10.jpg";

// Importing Before & After Groups
const projectGroups = [
  {
    title: "Fall Cleanup",
    coverImage: img6,
    images: [img1, img2, img3, img4, img5, img6, img57],
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
  {
    title: "Driveway & Mulching",
    coverImage: img15,
    images: [img14, img15, img16],
  },
  {
    title: "New England Natural",
    coverImage: img18,
    images: [img17, img18],
  },
  {
    title: "Snow Removal",
    coverImage: img19,
    images: [img20, img19],
  },
  {
    title: "Driveway Transformation",
    coverImage: img22,
    images: [img26, img25, img24, img23, img21, img22],
  },
  {
    title: "Fence Repair",
    coverImage: img27,
    images: [img27],
  },
  {
    title: "Front of House Restoration",
    coverImage: img33,
    images: [img28, img29, img30, img31, img32, img33],
  },
  {
    title: "Groundskeeping",
    coverImage: img34,
    images: [img34, img35, img36],
  },
  {
    title: "Outdoor Home Restoration",
    coverImage: img43,
    images: [img38, img39, img40, img41, img42, img43, img44, img45, img46],
  },
  {
    title: "Pool Wall Construction",
    coverImage: img50,
    images: [img47, img48, img49, img50, img51, img52, img53, img54, img55, img56],
  },
]

const Gallery = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // useEffect to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedGroup) return;

      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev + 1) % selectedGroup.images.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length);
      } else if (e.key === "Escape") {
        setSelectedGroup(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGroup]);

  return (
    <div className="gallery-container">

      {/* Darkened Background */}
      <div className='gallery-bg'></div>

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
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-lightbox" onClick={() => setSelectedGroup(null)}>×</span>

            {/* Navigation Arrows */}
            <span 
              className="lightbox-prev" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((selectedImageIndex - 1 + selectedGroup.images.length) % selectedGroup.images.length);
              }}>
              ‹
            </span>

            <img src={selectedGroup.images[selectedImageIndex]} alt="Expanded View" className="lightbox-image" />

            <span 
              className="lightbox-next" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((selectedImageIndex + 1) % selectedGroup.images.length);
              }}>
              ›
            </span>

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
        </div>
      )}
    </div>
  );
};

export default Gallery;
