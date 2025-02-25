/*import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";*/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// Allow only frontend domain (replace "http://yourfrontend.com" with actual frontend URL)
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  methods: "GET,POST",
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Review Schema with Validation
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, required: true, trim: true },
  review: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now },
});

const Review = mongoose.model("Review", reviewSchema);

// API Routes
// Fetch All Reviews (Newest First)
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 }); // Show latest reviews first
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
});

// Submit a Review
app.post("/reviews", async (req, res) => {
  try {
    const { name, rating, title, review } = req.body;

    // Validate input
    if (!name || !rating || !title || !review) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new Review({ name, rating, title, review });
    await newReview.save();

    res.status(201).json({ message: "Review submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting review" });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
