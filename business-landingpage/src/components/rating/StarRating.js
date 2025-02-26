import React, { useState } from 'react';
import './StarRating.css'

const StarRating = ({ setFormData, formData }) => {
    const [hover, setHover] = useState(0);

    const handleClick = (ratingValue) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            rating: ratingValue,
        }));
    };

    return (
        <div className='rating-container'>
        <div className='star-rating'>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= (hover || formData.rating) ? "star-selected" : ""}`}
                    onClick={() => handleClick(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                >
                  ★  
                </span>
            ))}
        </div>
        </div>
    );
};

export default StarRating;