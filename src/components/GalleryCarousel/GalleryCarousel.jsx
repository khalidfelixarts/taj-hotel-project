"use client";
import React, { useEffect } from "react";
import "./gallerycarousel.module.scss";

const GalleryCarousel = () => {
  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const handleNextClick = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0].cloneNode(true));
      items[0].remove();
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll(".item");
      document
        .querySelector(".slide")
        .prepend(items[items.length - 1].cloneNode(true));
      items[items.length - 1].remove();
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <div className="container">
          <div className="slide">
            <div
              className="item"
              style={{
                backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              }}
            >
              <div className="content">
                <div className="name">Switzerland</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              }}
            >
              <div className="content">
                <div className="name">Finland</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              }}
            >
              <div className="content">
                <div className="name">Iceland</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              }}
            >
              <div className="content">
                <div className="name">Australia</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              }}
            >
              <div className="content">
                <div className="name">Netherland</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
            <div
              className="item"
              style={{
                backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
              }}
            >
              <div className="content">
                <div className="name">Ireland</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  eum!
                </div>
                <button>See More</button>
              </div>
            </div>
          </div>

          <div className="button">
            <button className="prev">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="next">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCarousel;
