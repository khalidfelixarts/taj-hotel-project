import React from "react";
import Image from "next/image";
import module from "./RoomCard.module.scss";
// import TempImg from "../../../public/images/room.JPG";
import Rating from "../Ratings/Rating";
import Link from "next/link";

import ROOM1 from "@/assets/room/room1.jpg";
import ROOM2 from "@/assets/room/room2.jpg";
import ROOM3 from "@/assets/room/room3.jpg";

function RoomCard({ room, key }) {
  return (
    <Link key={key} href={`${room.link}`}>
      <div className={module.card}>
        <div className={module.content}>
          <div className={module.back}>
            <FrontContent room={room} />
          </div>
          <div className={module.front}>
            <HoverContent room={room} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function FrontContent({ room }) {
  return (
    <div className={module.back__content}>
      <div className={module.room__img}>
        <Image
          src={room.img}
          alt={room.description}
          width={1280}
          height={720}
        />
      </div>
      <h2>{room.type}</h2>

      <div className={module.room__details}>
        <p>{room.description}</p>
        <Rating rating={room.rating} />
        <div className={module.pricing}>
          <span className={module.price}>₹{room.price}</span>
          <span className={module.book__now}>Book Now</span>
        </div>
      </div>
    </div>
  );
}

function HoverContent({ room }) {
  return (
    <div className={module.front__content}>
      <div className={module.room__img}>
        <Image
          src={room.img}
          alt={room.description}
          width={1280}
          height={720}
        />
      </div>
      <h2>{room.type}</h2>

      <div className={module.room__details}>
        <p>{room.description}</p>
        <Rating rating={room.rating} />
        <div className={module.pricing}>
          <span className={module.price}>₹{room.price}</span>
          <span className={module.book__now}>Book Now</span>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;