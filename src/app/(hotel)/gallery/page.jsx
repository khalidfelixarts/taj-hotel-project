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
            <h1 style={{ fontSize: "6rem", fontWeight: "100" }}>GALLERY</h1>
          </Box>
        </Box>

        {/* <div className={module.screen__image}>
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
        </div> */}

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
  const content = [
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/i8v5s4b0kbguv4byvxy1"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/izktfiyudwsr2vj38kpe"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/euxqizxd0k8lyqeswk3g"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/xrbb9ttwthiaqoit2rik"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/de2grlpoawmolo6klxse"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/zdeurpkvinvp5omnnoka"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/stfcvqvaocqefizfal6y"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/euxqizxd0k8lyqeswk3g"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/w7e9m3h3qmxeu3auppro"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/egyppnrlghuo0zt17qm0"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/upwnssaaks3drqunjqbv"),
    },
    {
      title: "DEEPALI PALACE",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium?",
      img: createImgUrl("Hotel/parallax/ejgbhldp4bi8stogm608"),
    },
  ];

  return (
    <div className={module.gallery__grid}>
      {content?.map((i, index) => (
        <Box
          key={index}
          onClick={() => {
            setIsOpened(!isOpened);
            setImg(i?.img);
          }}
          className={module.card}
          sx={{
            cursor: "pointer",
            position: "relative",
            maxWidth: "400px",
            width: "89%",
            height: "500px",
          }}
        >
          <Image style={{ objectFit: "cover" }} src={i?.img} fill />

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
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "28px" }}>{i?.title}</span>
            <p>{i?.para}</p>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default Gallery;
