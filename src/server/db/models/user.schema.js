import mongoose from "mongoose";

// Define schema for users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: { type: Boolean, default: false },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }], // Reference to user bookings

  // Other fields like name, contact information, etc.
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
