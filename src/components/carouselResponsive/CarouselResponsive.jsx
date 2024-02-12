"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./carouselresponsive.scss";
import Image from "next/image";

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
        {/* <div key="slide1">
          <img src="/images/GOJO.png" />
        </div> */}

        <div key="slide1">
          <div className="carousel__item__screen">
            <h1>Deepali Hotel</h1>
            <p>
              Hotel Deepali is a heritage property promising world-class
              services and exceptional hospitality in Madhya Pradesh’s Sagar.
              The hotel offers complimentary WiFi, valet parking, daily
              housekeeping, 24-hour room service, and round the clock front desk
              for the convenience of guests. Doorman to greet the guests and
              security at the entrance make the stay safe for guests There is a
              spacious conference room where business travellers can conduct
              meetings smoothly
            </p>
          </div>
          <Image
            // src="https://images.unsplash.com/photo-1552872673-9b7b99711ebb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="/images/1.jpeg"
            width={1920}
            height={736}
            alt="carousel"
          />
        </div>
        <div key="slide2">
          <div className="carousel__item__screen">
            <h1>Deepali Hotel</h1>
            <p>
              Hotel Deepali is a heritage property promising world-class
              services and exceptional hospitality in Madhya Pradesh’s Sagar.
              The hotel offers complimentary WiFi, valet parking, daily
              housekeeping, 24-hour room service, and round the clock front desk
              for the convenience of guests. Doorman to greet the guests and
              security at the entrance make the stay safe for guests There is a
              spacious conference room where business travellers can conduct
              meetings smoothly
            </p>
          </div>

          <Image
            // src="https://images.unsplash.com/photo-1584009577996-0227b2358356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="/images/2.jpeg"
            width={1920}
            height={736}
            alt="carousel"
          />
        </div>
        <div key="slide3">
          <div className="carousel__item__screen">
            <h1>Deepali Hotel</h1>
            <p>
              Hotel Deepali is a heritage property promising world-class
              services and exceptional hospitality in Madhya Pradesh’s Sagar.
              The hotel offers complimentary WiFi, valet parking, daily
              housekeeping, 24-hour room service, and round the clock front desk
              for the convenience of guests. Doorman to greet the guests and
              security at the entrance make the stay safe for guests There is a
              spacious conference room where business travellers can conduct
              meetings smoothly
            </p>
          </div>

          <Image
            // src="https://images.unsplash.com/photo-1606228281437-dc226988dc3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="/images/3.jpeg"
            width={1920}
            height={736}
            alt="carousel"
          />
        </div>
        <div key="slide4">
          <div className="carousel__item__screen">
            <h1>Deepali Hotel</h1>
            <p>
              Hotel Deepali is a heritage property promising world-class
              services and exceptional hospitality in Madhya Pradesh’s Sagar.
              The hotel offers complimentary WiFi, valet parking, daily
              housekeeping, 24-hour room service, and round the clock front desk
              for the convenience of guests. Doorman to greet the guests and
              security at the entrance make the stay safe for guests There is a
              spacious conference room where business travellers can conduct
              meetings smoothly
            </p>
          </div>

          <Image
            // src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="/images/4.jpeg"
            width={1920}
            height={736}
            alt="carousel"
          />
        </div>
        {/* <div key="slide5">
          <Image
            // src="https://images.unsplash.com/photo-1519575706483-221027bfbb31?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="/images/5.jpeg"
            width={1920}
            height={700}
          />
        </div> */}

        {/*  */}

        {/* <div key="slide1">
          <img src="/images/1.jpeg" />
        </div>
        <div key="slide2">
          <img src="/images/2.jpeg" />
        </div>
        <div key="slide3">
          <img src="/images/3.jpeg" />
        </div>
        <div key="slide4">
          <img src="/images/4.jpeg" />
        </div> */}
      </Carousel>
    </div>
  );
};

export default CarouselResponsive;
