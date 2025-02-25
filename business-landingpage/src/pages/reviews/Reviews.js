import React, { useState, useEffect } from "react";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    title: "",
    review: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const newReview = await response.json();
      setReviews([newReview, ...reviews]);
      setFormData({ name: "", rating: 0, title: "", review: "" });
    }
  };

  return (
    <div className="reviews-container">
      <div className="review-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <label>Your Rating:</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            min="1"
            max="5"
            onChange={handleChange}
            required
          />
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label>Your Review:</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
          />
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="reviews-list">
        <h2>Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="review-item">
              <h3>{review.title}</h3>
              <p className="rating">⭐ {review.rating} Stars</p>
              <p>{review.review}</p>
              <p><strong>- {review.name}</strong></p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;