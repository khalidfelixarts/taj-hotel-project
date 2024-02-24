import React from "react";
import module from "./room.module.scss";
import COVER from "@/assets/room/room1.jpg";
import Image from "next/image";
import { Constants } from "@/utils/constants";

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
      <Image src={details.img} alt={details.description} />
    </div>
  );
};

export default Page;
