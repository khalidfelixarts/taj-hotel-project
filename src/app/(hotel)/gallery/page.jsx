"use client";
import React, { useState } from "react";
import module from "./gallery.module.scss";
import Image from "next/image";
import { createImgUrl } from "@/utils/constants";
import { Box } from "@mui/material";
import ViewerModal from "@/components/ViewerModal/ViewerModal";

const Gallery = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [img, setImg] = useState("");

  return (
    <>
      {/* <GalleryCarousel /> */}
      <div className={module.gallery__parent}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "400px",
            background: "#000",
          }}
        >
          <Image
            style={{ objectFit: "cover" }}
            src={createImgUrl("Hotel/parallax/xrbb9ttwthiaqoit2rik")}
            fill
          />
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              background:
                "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h1 style={{ fontSize: "7rem", fontWeight: "100" }}>GALLERY</h1>
          </Box>
        </Box>

        <div className={module.screen__image}>
          <Image
            src={createImgUrl("Hotel/parallax/i8v5s4b0kbguv4byvxy1")}
            alt="screen"
            fill
          />
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              background:
                "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              color: "#fff",
              padding: "4%",
            }}
          >
            <h1>DEEPALI PALACE</h1>
            <p>
              Explore our elegant accommodations, featuring modern amenities and
              thoughtful touches to ensure your comfort throughout your stay.
            </p>
          </Box>
        </div>

        <GalleryGrid
          setImg={setImg}
          setIsOpened={setIsOpened}
          isOpened={isOpened}
        />
        <ViewerModal img={img} isOpened={isOpened} setIsOpened={setIsOpened} />
      </div>
    </>
  );
};

function GalleryGrid({ setImg, setIsOpened, isOpened }) {
  return (
    <div className={module.gallery__grid}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
        <Box
          onClick={() => {
            setIsOpened(!isOpened);
            setImg(createImgUrl("Hotel/parallax/i8v5s4b0kbguv4byvxy1"));
          }}
          className={module.card}
          sx={{
            cursor: "pointer",
            position: "relative",
            width: "400px",
            height: "500px",
          }}
        >
          <Image
            style={{ objectFit: "cover" }}
            src={createImgUrl("Hotel/parallax/i8v5s4b0kbguv4byvxy1")}
            fill
          />

          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "#fff",
              padding: "4%",
            }}
          >
            <span style={{ fontSize: "28px" }}>SAMPLE</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default Gallery;
