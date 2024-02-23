"use client";
import React from "react";
import module from "./carouselnew.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Constants } from "@/utils/constants";

const CarouselNew = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={module.react__slick__parent}>
      <Slider {...settings}>
        {Constants.carouselData.map((c) => (
          <>
            <div className={module.slider__card}>
              <Image src={c.src} width={1920} height={1080} />
            </div>
            {/* <div className={module.slider__content}>Deepali</div> */}
          </>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselNew;
