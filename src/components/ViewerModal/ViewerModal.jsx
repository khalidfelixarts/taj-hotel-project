"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import module from "./ViewerModal.module.scss";

const ViewerModal = ({
  img = "https://res.cloudinary.com/de0llaul4/image/upload/v1708862610/Hotel/parallax/euxqizxd0k8lyqeswk3g.jpg",
  isOpened,
  setIsOpened,
}) => {
  return (
    <>
      {isOpened ? (
        <>
          <Box
            sx={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.8)",
              zIndex: "999",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "80%" }}>
              <Image style={{ objectFit: "contain" }} src={img} fill />
            </Box>
            <span
              className={module.close}
              onClick={() => setIsOpened(!isOpened)}
            >
              Close
            </span>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewerModal;
