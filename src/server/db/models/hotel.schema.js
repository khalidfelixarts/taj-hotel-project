import mongoose from "mongoose";

// Define schema for hotels
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: [String],
  description: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  // Other fields like amenities, images, etc.
});

// Create models from the schemas
export const Hotel =
  mongoose.models?.Hotel || mongoose.model("Hotel", hotelSchema);
