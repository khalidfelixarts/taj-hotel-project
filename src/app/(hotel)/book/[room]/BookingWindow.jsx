"use client";
import React, { useState } from "react";
import module from "./bookingwindow.module.scss";
import { Constants } from "@/utils/constants";

const BookingWindow = ({ params }) => {
  let details;
  Constants.Rooms.forEach((room) => {
    if (room.type.toLowerCase() == params?.room) {
      details = room;
    }
  });

  const [numberOfRooms, setNumberOfRooms] = useState([details]);

  const removeItemAtIndex = (indexToRemove) => {
    if (numberOfRooms.length <= 1) return;
    setNumberOfRooms((prevArray) => {
      const newArray = [
        ...prevArray.slice(0, indexToRemove),
        ...prevArray.slice(indexToRemove + 1),
      ];
      return newArray;
    });
  };

  const addRoom = () => {
    if (numberOfRooms.length >= 8) return;
    setNumberOfRooms([details, ...numberOfRooms]);
  };

  return (
    <div className={module.booking__bottom__window}>
      <div className={module.room__parent}>
        <div className={module.room__nav}>
          {numberOfRooms.map((i, index) => (
            <div className={module.nav__item__parent}>
              <div className={module.nav__item} key={index}>
                <span>
                  {index + 1}
                  {i.type}
                </span>
              </div>
              <span
                className={module.close}
                onClick={() => removeItemAtIndex(index)}
              >
                X
              </span>
            </div>
          ))}
          <div className={module.addroom__button}>
            <span onClick={() => addRoom()}>Add Room</span>
          </div>
        </div>

        <div className={module.room__form}>hello</div>
      </div>
    </div>
  );
};

export default BookingWindow;
