import mongoose from "mongoose";

// Define schema for bookings
const bookingSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
    default: 1, // Assuming the default number of rooms is 1
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled", "Rejected"],
    default: "Pending",
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "Debit Card", "PayPal", "Bank Transfer", "Cash"],
    required: true,
  },
  // Other fields like additionalNotes, etc.
});

export const Booking =
  mongoose.models?.Booking || mongoose.model("Booking", bookingSchema);
