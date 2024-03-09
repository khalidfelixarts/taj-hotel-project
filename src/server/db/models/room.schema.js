import mongoose from "mongoose";

// Define schema for rooms
const roomSchema = new mongoose.Schema({
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

  roomDetails: {
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    signatureFeature: {
      type: String,
    },
    conveniences: {
      type: [String],
    },
  },
  occupancyDetails: {
    type: String,
  },

  images: {
    type: [String],
    required: true,
  },
  // Other fields like amenities, reviews, etc.
});

export const Room = mongoose.models?.Room || mongoose.model("Room", roomSchema);
