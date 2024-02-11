import mongoose from "mongoose";

// Define schema for rooms
const roomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  // roomNumber: {
  //   type: Number,
  //   required: true,
  // },
  type: {
    type: String,
    enum: ["Standard", "Duplex", "Suite"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
    default: true, // Assuming the room is initially available
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  // Other fields like amenities, reviews, etc.
});

export const Room = mongoose.models?.Room || mongoose.model("Room", roomSchema);
