import React from "react";
import module from "./room.module.scss";
import Image from "next/image";
import { Constants } from "@/utils/constants";
import BookRoom from "@/components/bookroom/BookRoom";
import BookingWindow from "./BookingWindow";
import { Box } from "@mui/material";

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
      {/* <BookRoom /> */}
      {/* <BookingWindow params={params} /> */}

      <Box
        sx={{
          width: "100%",
          minHeight: "40vh",
          paddingTop: "20px",
        }}
      >
        <Box
          className={module.booking__window__parent}
          sx={{
            marginX: "auto",
            width: { xs: "95vw" },
            maxWidth: "800px",
            height: "400px",
          }}
        >
          <Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px 10px 0 0",
            }}
            className={module.booking__window__title}
          >
            <h1
              style={{
                fontWeight: "500",
                fontSize: "32px",
                marginLeft: "20px",
              }}
            >
              Book Your Stay
            </h1>
          </Box>
          <Box
            className={module.room__card}
            sx={{ my: "5px", minHeight: "60px" }}
          >
            Test
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Page;
