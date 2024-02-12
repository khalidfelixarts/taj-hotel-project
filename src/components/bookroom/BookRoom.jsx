import React from "react";
import "./booking.scss";
import { getAllRoomsAction } from "@/server/actions/adminAdd.action";
import BookingForm from "./BookingForm";

const Data = async () => {
  try {
    let rooms = await fetch(`${process.env.CLIENT_URL}api/getallrooms`, {
      next: { tags: ["rooms"] },
    });
    console.log(rooms);
    rooms = await rooms?.json();
    return rooms;
  } catch (e) {
    console.log(e.message);
  }

  let rooms = await getAllRoomsAction();

  rooms = JSON.parse(rooms);
  rooms = rooms?.rooms;
  return rooms;

  // let rooms =
  //   (await fetch(`${process.env.CLIENT_URL}api/getallrooms`, {
  //     next: { tags: ["rooms"] },
  //   })) || (await getAllRoomsAction());

  // rooms = (await rooms?.json()) || JSON.parse(rooms);
  // rooms = rooms || rooms?.rooms;
  // return rooms;
};

const BookRoom = async () => {
  const rooms = await Data();
  return (
    <div className="booking">
      <div className="container">
        <div className="room__type">
          {rooms?.map((room) => {
            return (
              <BookingForm key={room?._id} room={room} className="bookForm">
                <div
                  style={{
                    color: "#FFF",
                    border: "1px solid white",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                  className="addedHotel"
                >
                  <h2>
                    Availability:{" "}
                    {room?.availability ? "Available" : "Not Available"}
                  </h2>
                  <h2>Price: {room?.price}</h2>
                  <h2>Type: {room?.type}</h2>
                  <p>Description: {room?.description}</p>
                  <p>HotelId: {room?.hotelId}</p>
                  <p>Images: {room?.images[0]}</p>
                  <p>_id: {room?._id}</p>
                </div>
              </BookingForm>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookRoom;
