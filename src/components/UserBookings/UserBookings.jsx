"use client";

import { getAllUserBooking } from "@/server/actions/userBooking.action";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserBookings = () => {
  const [bookings, setBookings] = useState(null);
  const { user } = useSelector((state) => state.user);
  const email = user?.email;

  useEffect(() => {
    async function getBookings() {
      console.log(typeof email);
      let res = await getAllUserBooking(email);
      res = JSON.parse(res);

      res = res?.bookings;
      setBookings(res);
      console.log(res);
    }
    getBookings();
  }, [user]);

  return (
    <div
      style={{
        padding: "10px",
        background: "linear-gradient(60deg, #ffa726, #fb8c00)",
      }}
    >
      <h1>User Bookings</h1>
      <div>
        {bookings?.map((b) => (
          <div
            key={b._id}
            style={{
              padding: "10px",
              background: `${
                b.status == "Confirmed"
                  ? "green"
                  : b.status == "Rejected"
                  ? "red"
                  : "linear-gradient(60deg, #263238, #212121)"
              }`,
              marginBlockStart: "10px",
              border: "1px solid white",
            }}
          >
            <p>Number of rooms: {b.numberOfRooms}</p>
            <p>startDate: {b.startDate}</p>
            <p>endDate: {b.endDate}</p>
            <p>Payment Method: {b.paymentMethod}</p>
            <h3>status: {b.status}</h3>
            <h3>Total Price: {b.totalPrice}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBookings;
