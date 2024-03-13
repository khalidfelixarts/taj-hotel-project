"use client";
import React from "react";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Constants } from "@/utils/constants";

const settings = {
  style: {},
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  // appendDots: (dots) => (
  //   <Box
  //     style={{
  //       backgroundColor: "#F0BB6B",
  //       borderRadius: "40%",
  //       padding: "10px",
  //     }}
  //   >
  //     <ul style={{ margin: "0px" }}> {dots} </ul>
  //   </Box>
  // ),
};

const carousel = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

function Desktop() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },

          paddingTop: "70px",
          height: "calc(40vw + 70px)",
        }}
      >
        <Slider {...settings}>
          {Constants.carouselDesktop.map((d, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "100vw",
                height: "40vw",
                color: "#fff",
                background: "#000",
              }}
            >
              <Image src={d.img} fill />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

function Mobile() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          paddingTop: "70px",
          height: "calc(120vw + 70px)",
        }}
      >
        <Slider {...settings}>
          {Constants.carouselMobile.map((d, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "100vw",
                height: "120vw",
                color: "#fff",
                background: "#000",
              }}
            >
              <Image src={d.img} fill objectFit="fill" />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default carousel;
