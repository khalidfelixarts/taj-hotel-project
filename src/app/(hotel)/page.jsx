// import CurrentUser from "@/components/CurrentUser/CurrentUser";
// import UserBookings from "@/components/UserBookings/UserBookings";
// import BookRoom from "@/components/bookroom/BookRoom";
// import Carousel from "@/components/carousel/Carousel";
// import Login from "@/components/login/Login";
import CarouselResponsive from "@/components/carouselResponsive/CarouselResponsive";
import React from "react";
import RoomsSection from "@/components/RoomsSection/RoomsSection";
import CarouselNew from "@/components/carouselnew/CarouselNew";
import ImageScroll from "@/components/ImageParallaxScroll/ImageScroll";

const Home = () => {
  return (
    <main style={{ width: "100%" }}>
      {/* <CarouselResponsive /> */}
      <CarouselNew />

      {/* <Carousel /> */}
      {/* <div
        style={{
          background: "#000",
          width: "100%",
          height: "100vh",
          color: "#fff",
        }}
      >
        <Login /> */}

      {/* <CurrentUser /> */}

      {/* <BookRoom /> */}

      {/* <UserBookings /> */}
      {/* </div> */}

      <RoomsSection />

      <ImageScroll />
    </main>
  );
};

export default Home;
