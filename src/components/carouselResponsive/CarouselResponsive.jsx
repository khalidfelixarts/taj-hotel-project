"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./carouselresponsive.scss";
import Image from "next/image";
import { Constants } from "@/utils/constants";

const CarouselResponsive = () => {
  return (
    <div className="carousel__parent">
      <Carousel
        showArrows={true}
        infiniteLoop
        autoPlay
        emulateTouch
        className="carousel__component"
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
      >
        {Constants.carouselData.map((i) => (
          <div key={`${i.key}`}>
            <div className="carousel__item__screen">
              <h1>{i.title}</h1>
              <p>{i.description}</p>
            </div>
            <Image
              src={`${i.src}`}
              width={1920}
              height={736}
              alt={`carousel ${i.key}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselResponsive;
