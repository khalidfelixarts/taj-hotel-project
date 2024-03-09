"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from "react";
import module from "./exploredeepali.module.scss";
import { Constants, createImgUrl } from "@/utils/constants";
import Image from "next/image";
import { Box } from "@mui/material";

const ExploreDeepali = () => {
  const ImgUrl = Constants.ParallaxImgURL;

  const textStyle = {
    position: "absolute",
    left: "10px",
    bottom: "10px",
    fontSize: "2vw",
    color: "white",
    letterSpacing: "1px",
  };

  return (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "30px",
          }}
        >
          Explore Deepali
        </h1>
      </Box>

      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "none",
            height: "400px",
          },
          marginBottom: "30px",
        }}
      >
        <ExploreCarousel />
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
            md: "block",
          },
        }}
        className={module.explore__deepali__parent}
      >
        <h1 className={module.title}>Explore Deepali</h1>

        <div className={module.grid__parent}>
          <Box
            sx={{
              height: "65%",
              width: "100%",
              display: "flex",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "70%",
                overflow: "hidden",
              }}
            >
              <Image src={ImgUrl[0]} fill />
              <span
                style={{
                  ...textStyle,
                }}
              >
                TIMELESS WEDDINGS
              </span>
            </Box>
            {/*  */}

            <Box
              sx={{
                width: "30%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "50%",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image src={ImgUrl[1]} fill />
                <span style={{ ...textStyle }}>Sample 1</span>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  height: "50%",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image src={ImgUrl[1]} fill />
                <span style={{ ...textStyle }}>Sample 1</span>
              </Box>
            </Box>

            {/*  */}
          </Box>

          {/*  */}
          {/*  */}
          <Box
            sx={{ height: "35%", display: "flex", gap: "20px" }}
            className="bottom"
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "30%",
                overflow: "hidden",
              }}
            >
              <Image src={ImgUrl[2]} fill />
              <span style={{ ...textStyle }}>Sample 2</span>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "30%",
                overflow: "hidden",
              }}
            >
              <Image src={ImgUrl[3]} fill />
              <span style={{ ...textStyle }}>Sample 3</span>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "40%",
                overflow: "hidden",
              }}
            >
              <Image src={ImgUrl[4]} fill />
              <span style={{ ...textStyle }}>Sample 4</span>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

const ExploreCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const content = [
    { title: "Dining", img: Constants?.ParallaxImgURL[0] },
    { title: "Rooms", img: Constants?.ParallaxImgURL[1] },
    { title: "Gym", img: Constants?.ParallaxImgURL[2] },
    { title: "Pool", img: Constants?.ParallaxImgURL[3] },
    { title: "Infinity Bar", img: Constants?.ParallaxImgURL[4] },
    { title: "Pool Side Dining", img: Constants?.ParallaxImgURL[5] },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: "400px",
      }}
    >
      <Slider {...settings}>
        {content?.map((i, index) => (
          <Box
            key={index}
            sx={{ position: "relative", width: "100vw", height: "400px" }}
          >
            <Image src={i?.img} fill />
            <Box
              className={module.explore__mobile__carousel__card}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingBottom: "30px",
              }}
            >
              <span
                style={{
                  textTransform: "uppercase",
                  fontSize: "2.5rem",
                  color: "#fff",
                }}
              >
                {i?.title}
              </span>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ExploreDeepali;
