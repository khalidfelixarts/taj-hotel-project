"use server";
import React from "react";
import module from "./room.module.scss";
import Image from "next/image";
import { Constants } from "@/utils/constants";
import { Box } from "@mui/material";
import { BottomPart } from "./pageSpecificComponents";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Constants?.Rooms?.map((room) => ({
    room: room?.type?.toLowerCase(),
  }));
}

const Page = ({ params }) => {
  let details;
  Constants.Rooms.forEach((room) => {
    if (room?.type.toLowerCase() == params?.room) {
      details = room;
    }
  });

  if (!details) return notFound();

  return (
    <>
      <TopPart details={details} />
      <Box className={module.booking__body}>
        <BottomPart params={params} details={details} />
      </Box>
    </>
  );
};

function TopPart({ details }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Image style={{ objectFit: "cover" }} src={details?.img} fill />
      <Box
        sx={{
          overflow: "hidden",
          width: "98%",
          maxWidth: "1300px",
          height: "80vh",
          position: "absolute",
          borderRadius: "50px",
          border: "2px solid #c7a982",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            width: "100%",
            height: "100%",
            padding: "10px",
            background: "linear-gradient(45deg, #5c3f10, #c48333, #946610)",
          }}
        >
          <Box
            sx={{
              padding: "10px",
              borderRadius: {
                xs: "40px 40px 0 0",
                sm: "40px 40px 0 0",
                md: "40px 0 0 40px",
              },
              width: { xs: "100%", sm: "100%", md: "45%" },
              height: "100%",
              background: "#c7a982",
            }}
          >
            <h1>Reserve Your Ideal Holiday</h1>
            <p>{details?.description}</p>
          </Box>
          <Box
            sx={{
              overflow: "hidden",
              position: "relative",
              borderRadius: {
                xs: "0 0 40px 40px",
                sm: "0 0 40px 40px",
                md: "0 40px  40px 0",
              },
              width: { xs: "100%", sm: "100%", md: "55%" },
              height: "100%",
            }}
          >
            <Image style={{ objectFit: "cover" }} src={details?.img} fill />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Page;
