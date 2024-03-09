"use client";
import React from "react";
import module from "./carouselnew.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Constants } from "@/utils/constants";
import { Box } from "@mui/material";

const CarouselNew = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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

  return (
    <div className={module.react__slick__parent}>
      <Slider {...settings}>
        {Constants.carouselData.map((c, index) => (
          <Box
            sx={{ position: "relative", width: "100%", height: "70vh" }}
            key={index}
            // className={module.slider__card}
          >
            <Image style={{ objectFit: "cover" }} src={c.src} fill />
            <Box
              sx={{
                position: "absolute",
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "8%",
                left: "3%",
                color: "#fff",
                width: "80%",
              }}
            >
              <h1>Sample Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                illum saepe nam ea quod tempore consequuntur sed voluptatem
                aliquam sint?
              </p>
            </Box>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselNew;
