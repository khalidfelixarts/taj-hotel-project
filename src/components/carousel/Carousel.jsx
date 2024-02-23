"use client";
import { useEffect, useState } from "react";
import "./carousel.scss";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = () => {
  // const [index, setIndex] = useState(0);
  // const array = [1, 2, 3, 4];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % array.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [array.length]);

  const [slide, setSlide] = useState(0);

  const data = [
    {
      src: "/images/1.jpeg",
      alt: "Image 1 for carousel",
    },
    {
      src: "/images/2.jpeg",
      alt: "Image 2 for carousel",
    },
    {
      src: "/images/3.jpeg",
      alt: "Image 3 for carousel",
    },
    {
      src: "/images/4.jpeg",
      alt: "Image 4 for carousel",
    },
  ];

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    // <section className="carousel">
    //   <div className="slider__container">
    //     <div
    //       style={{ background: "orange" }}
    //       className={`slide ${index == 0 ? "active" : ""} ${
    //         index - 1 == 0 ? "move" : ""
    //       }`}
    //     >
    //       <Image
    //         id="slide-0"
    //         width={1280}
    //         height={720}
    //         src="/images/1.jpeg"
    //         alt="3D rendering of an imaginary orange planet in space"
    //       />
    //     </div>
    //     <div
    //       style={{ background: "blue" }}
    //       className={`slide ${index == 1 ? "active" : ""} ${
    //         index - 1 == 1 ? "move" : ""
    //       }`}
    //     >
    //       <Image
    //         id="slide-0"
    //         width={1280}
    //         height={720}
    //         src="/images/2.jpeg"
    //         alt="3D rendering of an imaginary orange planet in space"
    //       />
    //     </div>
    //     <div
    //       style={{ background: "green" }}
    //       className={`slide ${index == 2 ? "active" : ""} ${
    //         index - 1 == 2 ? "move" : ""
    //       }`}
    //     >
    //       <Image
    //         id="slide-0"
    //         width={1280}
    //         height={720}
    //         src="/images/3.jpeg"
    //         alt="3D rendering of an imaginary orange planet in space"
    //       />
    //     </div>
    //     <div
    //       style={{ background: "red" }}
    //       className={`slide ${index == 3 ? "active" : ""} ${
    //         index - 1 == -1 ? "move" : ""
    //       }`}
    //     >
    //       <Image
    //         id="slide-0"
    //         width={1280}
    //         height={720}
    //         src="/images/4.jpeg"
    //         alt="3D rendering of an imaginary orange planet in space"
    //       />
    //     </div>
    //   </div>

    //   <div
    //     className="carousel__left"
    //     onClick={() => {
    //       if (index > 0) {
    //         setIndex(index - 1);
    //       }
    //     }}
    //   ></div>
    //   <div
    //     className="carousel__right"
    //     onClick={() => {
    //       if (index < 3) {
    //         setIndex(index + 1);
    //       }
    //     }}
    //   ></div>

    //   <div className="carousel__nav">
    //     <div
    //       onClick={() => {
    //         setIndex(0);
    //       }}
    //       style={{ background: `${index == 0 ? "#C8904B" : ""}` }}
    //       className="carousel__nav__item"
    //     ></div>
    //     <div
    //       onClick={() => {
    //         setIndex(1);
    //       }}
    //       style={{ background: `${index == 1 ? "#C8904B" : ""}` }}
    //       className="carousel__nav__item"
    //     ></div>
    //     <div
    //       onClick={() => {
    //         setIndex(2);
    //       }}
    //       style={{ background: `${index == 2 ? "#C8904B" : ""}` }}
    //       className="carousel__nav__item"
    //     ></div>
    //     <div
    //       onClick={() => {
    //         setIndex(3);
    //       }}
    //       style={{ background: `${index == 3 ? "#C8904B" : ""}` }}
    //       className="carousel__nav__item"
    //     ></div>
    //   </div>
    // </section>

    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <Image
            // width={1280}
            // height={720}
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
