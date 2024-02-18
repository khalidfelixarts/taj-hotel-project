import React from "react";
import Image from "next/image";
import module from "./RoomCard.module.scss";
import TempImg from "../../../public/images/room.JPG";
import Rating from "../Ratings/Rating";
import Link from "next/link";

function RoomCard({ room, key }) {
  return (
    <Link href={`${room.link}`}>
      <div key={key} className={module.card}>
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
        <Image src={TempImg} width={1280} height={720} />
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
        <Image src={TempImg} width={1280} height={720} />
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
