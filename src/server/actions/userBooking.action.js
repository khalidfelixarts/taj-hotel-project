"use server";
import { Booking } from "../db/models/booking.schema";
import { Room } from "../db/models/room.schema";
import { User } from "../db/models/user.schema";
import db from "../db/setupDB";

export async function userBookingAction(
  roomId,
  userId,
  startDate,
  endDate,
  numberOfRooms,
  totalPrice,
  paymentMethod
) {
  db();

  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return JSON.stringify({ error: "Room not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return JSON.stringify({ error: "User not found" });
    }

    const booking = new Booking({
      roomId,
      userId,
      startDate,
      endDate,
      numberOfRooms,
      totalPrice,
      paymentMethod,
      status: "Pending", // Assuming the default status is 'Pending'
    });

    await booking.save();

    await User.findByIdAndUpdate(userId, { $push: { bookings: booking._id } });
    return JSON.stringify({ success: "Room booked successfully", booking });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

export async function getAllUserBooking(userEmail) {
  db();
  try {
    const user = await User.findOne({ email: userEmail }).populate("bookings");

    if (!user) {
      return JSON.stringify({ error: "User not found" });
    }

    return JSON.stringify({ success: "success", bookings: user.bookings });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}
