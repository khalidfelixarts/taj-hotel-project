import React from "react";
import module from "./room.module.scss";
import Image from "next/image";
import { Constants } from "@/utils/constants";
import BookRoom from "@/components/bookroom/BookRoom";
import BookingWindow from "./BookingWindow";

const Page = ({ params }) => {
  let details;
  Constants.Rooms.forEach((room) => {
    if (room.type.toLowerCase() == params.room) {
      details = room;
    }
  });

  return (
    <>
      <div className={module.room__page__parent}>
        <div className={module.booking__window}>
          <LeftPart params={params} />
          <RightPart params={params} />
        </div>

        <div className={module.image__parent}>
          <Image
            src={details.img}
            alt={details.description}
            width={1280}
            height={720}
          />
        </div>
      </div>
      <BottomPart params={params} />
    </>
  );
};

const LeftPart = ({ params }) => {
  let details;
  Constants.Rooms.forEach((room) => {
    if (room.type.toLowerCase() == params.room) {
      details = room;
    }
  });

  return (
    <div className={module.left__part}>
      <div className={module.text__container}>
        <span>Reserve Your Ideal Holiday</span>
      </div>
      <p>{details.description}</p>
    </div>
  );
};

const RightPart = ({ params }) => {
  let details;
  Constants.Rooms.forEach((room) => {
    if (room.type.toLowerCase() == params.room) {
      details = room;
    }
  });
  return (
    <div className={module.right__part}>
      <Image
        src={details.img}
        alt={details.description}
        width={1280}
        height={720}
      />
    </div>
  );
};

function BottomPart({ params }) {
  return (
    <>
      <BookRoom />
      <BookingWindow params={params} />
    </>
  );
}

export default Page;
