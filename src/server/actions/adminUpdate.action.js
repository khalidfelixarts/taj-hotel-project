"use server";

import { Booking } from "../db/models/booking.schema";
import { Hotel } from "../db/models/hotel.schema";
import { Room } from "../db/models/room.schema";
import db from "../db/setupDB";
import { revalidateTag } from "next/cache";

export async function setRoomAvailabilityAction(roomId, availability) {
  db();
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      { availability },
      { new: true }
    );
    if (!updatedRoom) {
      return JSON.stringify({ error: "Room not found" });
    }
    revalidateTag("rooms");
    return JSON.stringify({ success: "Success", updatedRoom });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

export async function setBookingStatus(bookingId, status) {
  db();

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );

    if (!updatedBooking) {
      return JSON.stringify({ error: "Booking not found" });
    }

    return JSON.stringify({ success: "success", updatedBooking });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}
