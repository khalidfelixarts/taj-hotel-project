"use client";
import { userBookingAction } from "@/server/actions/userBooking.action";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { getNumberOfDays } from "@/app/utils/utils";

import { useSelector } from "react-redux";

const BookingForm = ({ children, className, room }) => {
  const { user } = useSelector((state) => state.user);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isSelected, setIsSelected] = useState(null);

  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const bookingFormRef = useRef();

  async function handleBooking(e) {
    e.preventDefault();
    let startDate = dateRange[0]?.startDate;
    let endDate = dateRange[0]?.endDate;

    console.log({
      startDate: dateRange[0]?.startDate,
      endDate: dateRange[0]?.endDate,
      numberOfRooms,
      paymentMethod,
      totalPrice,
      userId: user?._id,
      roomId: room?._id,
    });

    let res = await userBookingAction(
      room?._id,
      user?._id,
      startDate,
      endDate,
      numberOfRooms,
      totalPrice,
      paymentMethod
    );
    res = JSON.parse(res);
    if (res.success) toast.success(res.success);
    if (res.error) toast.error(res.error);
    console.log(res);
  }

  useEffect(() => {
    let startDate = dateRange[0]?.startDate;
    let endDate = dateRange[0]?.endDate;
    const days = getNumberOfDays(startDate, endDate);
    console.log("Days: ", days);
    console.log("Rooms: ", numberOfRooms);
    const finalPrice = numberOfRooms * days * room.price;
    setTotalPrice(finalPrice);
    console.log("Final Price: ", finalPrice);
  }, [dateRange, numberOfRooms]);

  return (
    <>
      <div
        style={{ background: `${room.availability ? "" : "red"}` }}
        className={`${className} ${isSelected == room ? "active" : ""}`}
      >
        {children}
        <span
          onClick={() => {
            console.log(room);
            if (!room.availability) return;
            if (!isSelected) {
              setIsSelected(room);
            }
            if (isSelected) {
              setIsSelected(null);
            }
          }}
        >
          {isSelected == room ? "Selected" : ""}
        </span>
      </div>
      {isSelected == room && (
        <div className="room__booking__form">
          <form onSubmit={handleBooking} ref={bookingFormRef}>
            <div>
              <span>Select Dates: </span>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
            </div>

            <div>
              <span>Number of Rooms:</span>
              <input
                type="number"
                value={numberOfRooms}
                onChange={(e) => {
                  setNumberOfRooms(parseInt(e.target.value));
                }}
              />
            </div>
            <div>
              <span>Payment Method:</span>
              <input
                type="text"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div>
              <span>Total Cost: {totalPrice}</span>
            </div>
            <button type="submit">Book</button>
          </form>
        </div>
      )}
    </>
  );
};

export default BookingForm;
