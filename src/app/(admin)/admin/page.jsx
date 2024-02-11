"use client";
import React, { useEffect, useRef, useState } from "react";
import "./admin.scss";
import {
  addHotelAction,
  addRoomAction,
  getAllHotelBookings,
  getAllHotelsAction,
  getAllRoomsAction,
} from "@/server/actions/adminAdd.action";
import {
  setBookingStatus,
  setRoomAvailabilityAction,
} from "@/server/actions/adminUpdate.action";

const Page = () => {
  const [addedHotel, setAddedHotel] = useState(null);
  const [addedRoom, setAddedRoom] = useState(null);
  const [availability, setAvailability] = useState(false);

  const [hotels, setHotels] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState(null);

  const [availabilityResponse, SetAvailabilityResponse] = useState();

  const hotelRef = useRef();
  const roomRef = useRef();

  async function handleAddHotel(e) {
    e.preventDefault();
    let name = hotelRef.current.name.value;
    let location = hotelRef.current.location.value;
    let image = "/images/1.jpeg";
    let description = hotelRef.current.description.value;
    let rating = hotelRef.current.rating.value;

    let res = await addHotelAction(name, location, image, description, rating);
    res = JSON.parse(res);
    setAddedHotel(res);
  }

  async function handleAddRoom(e) {
    e.preventDefault();

    let hotelName = roomRef.current.hotelName.value;
    let type = roomRef.current.type.value;
    let images = ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"];
    let price = roomRef.current.price.value;
    let description = roomRef.current.description.value;
    // let availability = roomRef.current.availability.value;

    console.log({ hotelName, type, price, availability, description, images });
    let res = await addRoomAction(
      hotelName,
      type,
      price,
      availability,
      description,
      images
    );
    res = JSON.parse(res);
    console.log(res);

    setAddedRoom(res);
  }

  // async function handleCheckBookings(e) {
  //   e.preventDefault();
  // }

  async function handleUpdateAvailability(roomId, availability) {
    console.log({ roomId, availability });
    let res = await setRoomAvailabilityAction(roomId, availability);
    res = JSON.parse(res);
    SetAvailabilityResponse(res);
    console.log(res);
  }

  useEffect(() => {
    async function getAllHotels() {
      let hotels = await getAllHotelsAction();
      hotels = JSON.parse(hotels);
      // console.log(hotels.hotels[0]);
      setHotels(hotels?.hotels[0]);

      let rooms = await getAllRoomsAction();
      rooms = JSON.parse(rooms);
      rooms = rooms?.rooms;
      console.log(rooms);
      setRooms(rooms);

      let bookingsRes = await getAllHotelBookings();
      bookingsRes = JSON.parse(bookingsRes);
      bookingsRes = bookingsRes.bookings;
      setBookings(bookingsRes);
      console.log(bookingsRes);
    }
    getAllHotels();
  }, [availabilityResponse]);

  return (
    <div className="admin__page color1">
      <form onSubmit={handleAddHotel} ref={hotelRef} className="admin__box ">
        <h3 className="title color5">Add Hotel</h3>
        <div>
          <span>Name</span>
          <input name="name" type="text" />
        </div>
        <div>
          <span>Location</span>
          <input name="location" type="text" />
        </div>

        <div>
          <span>Rating</span>
          <input name="rating" type="number" />
        </div>
        <div>
          <span>Description</span>
          <textarea name="description" type="text" />
        </div>

        <div>
          <span>Image</span>
          <input type="file" />
        </div>

        <button type="submit">Add Hotel</button>
      </form>
      <h2 style={{ marginLeft: "30px" }}>Added Hotel</h2>

      {
        <div
          style={{
            color: "#FFF",
            border: "1px solid white",
            padding: "4px",
            borderRadius: "4px",
          }}
          className="addedHotel"
        >
          <h5>_id: {addedHotel?.data._id}</h5>
          <h5>Name: {addedHotel?.data.name}</h5>
          <h5>Location: {addedHotel?.data.location}</h5>
          <h5>Description: {addedHotel?.data.description}</h5>
          <h5>Rating: {addedHotel?.data.rating}</h5>
          <h5>Image: {addedHotel?.data.image[0] || addedHotel?.data.image}</h5>
        </div>
      }
      <h2 style={{ marginLeft: "30px" }}>All Hotels</h2>

      {
        <div
          style={{
            color: "#FFF",
            border: "1px solid white",
            padding: "4px",
            borderRadius: "4px",
          }}
          className="addedHotel"
        >
          <h5>_id: {hotels?._id}</h5>
          <h5>Name: {hotels?.name}</h5>
          <h5>Location: {hotels?.location}</h5>
          <h5>Description: {hotels?.description}</h5>
          <h5>Rating: {hotels?.rating}</h5>
          <h5>Image: {hotels?.image}</h5>
        </div>
      }
      <form onSubmit={handleAddRoom} ref={roomRef} className="admin__box">
        <h3 className="title color2">Add Room</h3>
        <div>
          <span>Hotel Name</span>
          <input name="hotelName" type="text" />
        </div>
        <div>
          <span>Type</span>
          <input name="type" type="text" />
        </div>
        <div>
          <span>Price</span>
          <input name="price" type="number" />
        </div>

        <div>
          <span>Description</span>
          <input name="description" type="text" />
        </div>
        <div>
          <span>Images</span>
          <input name="image" type="text" />
        </div>

        <div>
          <span>Availability</span>
          <input
            name="availability"
            checked={availability}
            onChange={() => {
              setAvailability(!availability);
            }}
            type="checkbox"
          />
        </div>

        <button type="submit">Add Room</button>
      </form>

      <h2 style={{ marginLeft: "30px" }}>Added Room</h2>

      {
        <div
          style={{
            color: "#FFF",
            border: "1px solid white",
            padding: "4px",
            borderRadius: "4px",
          }}
          className="addedHotel"
        >
          <h5>
            Availability:
            {addedRoom?.data?.availability ? "Available" : "Not Available"}
          </h5>
          <h5>Description: {addedRoom?.data?.description}</h5>
          <h5>HotelId: {addedRoom?.data?.hotelId}</h5>
          <h5>Images: {addedRoom?.data?.images[0]}</h5>
          <h5>Price: {addedRoom?.data?.price}</h5>
          <h5>Type: {addedRoom?.data?.type}</h5>
          <h5>_id: {addedRoom?.data?._id}</h5>
        </div>
      }
      <h2 style={{ marginLeft: "30px" }}>All Room Types</h2>
      {rooms?.map((room) => {
        return (
          <div
            key={room?._id}
            style={{
              color: "#FFF",
              border: "1px solid white",
              padding: "4px",
              borderRadius: "4px",
            }}
            className="addedHotel"
          >
            <h5>
              Availability: {room?.availability ? "Available" : "Not Available"}
            </h5>
            <h5>Description: {room?.description}</h5>
            <h5>HotelId: {room?.hotelId}</h5>
            <h5>Images: {room?.images[0]}</h5>
            <h5>Price: {room?.price}</h5>
            <h5>Type: {room?.type}</h5>
            <h5>_id: {room?._id}</h5>

            <button
              onClick={() => {
                handleUpdateAvailability(room?._id, !room?.availability);
              }}
            >
              Availability
            </button>
          </div>
        );
      })}

      <div className="">
        <h3 className="title color3">Bookings</h3>

        {
          bookings?.map((b) => (
            // b.status == "Pending" && (
            <div
              key={b._id}
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>_id: {b._id}</p>
              <p>userId: {b.userId}</p>
              <p>roomId: {b.roomId}</p>
              <p>startDate: {b.startDate}</p>
              <p>endDate: {b.endDate}</p>
              <p>numberOfRooms: {b.numberOfRooms}</p>
              <p>paymentMethod: {b.paymentMethod}</p>
              <p>status: {b.status}</p>
              <p>totalPrice: {b.totalPrice}</p>

              {b.status !== "Confirmed" && b.status !== "Rejected" && (
                <>
                  <button
                    onClick={async () => {
                      let res = await setBookingStatus(b._id, "Confirmed");
                      res = JSON.parse(res);
                      console.log(res);
                    }}
                    style={{ background: "green" }}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={async () => {
                      let res = await setBookingStatus(b._id, "Rejected");
                      res = JSON.parse(res);
                      console.log(res);
                    }}
                    style={{ background: "red" }}
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          ))
          // )
        }
      </div>
    </div>
  );
};

export default Page;
