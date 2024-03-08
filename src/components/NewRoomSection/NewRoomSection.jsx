import React from "react";
import module from "./NewRoomSection.module.scss";
import Image from "next/image";
import { Constants, createImgUrl } from "@/utils/constants";

const NewRoomSection = () => {
  return (
    <div className={module.rooms__card__parent}>
      <div className={module.image__parent}>
        <Image
          src={createImgUrl("Hotel/rooms/rzb70d5btfvcxk0zlndn")}
          width={1920}
          height={1080}
        />
      </div>
      <div className={module.screen}></div>

      <div className={module.content}>
        {Constants.Rooms.map((room) => (
          <div>{room.type}</div>
        ))}
      </div>
    </div>
  );
};

export default NewRoomSection;
