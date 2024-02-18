import React from "react";
import RoomCard from "./RoomCard";
import module from "./RoomSection.module.scss";
import { Constants } from "@/utils/constants";

function RoomsSection() {
  return (
    <>
      <div className={module.rooms__section__parent}>
        <h1>BOOK A STAY</h1>
        <div className={module.rooms__section}>
          {Constants.Rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RoomsSection;
