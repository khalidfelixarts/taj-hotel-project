"use server";

import { Booking } from "../db/models/booking.schema";
import { Hotel } from "../db/models/hotel.schema";
import { Room } from "../db/models/room.schema";
import db from "../db/setupDB";

export async function addHotelAction(
  name,
  location,
  image,
  description,
  rating
) {
  db();

  try {
    const newHotel = new Hotel({
      name,
      location,
      image,
      description,
      rating,
    });
    const savedHotel = await newHotel.save();

    console.log(savedHotel);

    return JSON.stringify({ success: "Success", data: savedHotel });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

export async function addRoomAction(
  hotelName,
  type,
  price,
  availability,
  description,
  images
) {
  db();

  try {
    const hotel = await Hotel.findOne({ name: hotelName });
    if (!hotel) {
      return JSON.stringify({ error: "Hotel Not Found", data: "Custom Error" });
    }
    const hotelId = hotel._id;
    const newRoom = new Room({
      hotelId,
      type,
      price,
      availability,
      description,
      images,
    });
    const savedRoom = await newRoom.save();

    return JSON.stringify({ success: "Success", data: savedRoom });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

/////////////////////////////////////////////////////////////

export async function getAllHotelsAction() {
  db();

  try {
    const hotels = await Hotel.find();
    return JSON.stringify({ message: "success", hotels: hotels });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

export async function getAllRoomsAction() {
  db();

  try {
    const rooms = await Room.find();
    return JSON.stringify({ message: "success", rooms: rooms });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}

export async function getAllHotelBookings() {
  db();
  try {
    const bookings = await Booking.find();
    return JSON.stringify({ success: "success", bookings });
  } catch (e) {
    return JSON.stringify({ error: e.message });
  }
}
