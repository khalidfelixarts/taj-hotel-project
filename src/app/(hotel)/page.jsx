import CurrentUser from "@/components/CurrentUser/CurrentUser";
import UserBookings from "@/components/UserBookings/UserBookings";
import BookRoom from "@/components/bookroom/BookRoom";
import Carousel from "@/components/carousel/Carousel";
import CarouselResponsive from "@/components/carouselResponsive/CarouselResponsive";
import Login from "@/components/login/Login";
import React from "react";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* <Carousel /> */}
      <CarouselResponsive />
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100vh",
          color: "#fff",
        }}
      >
        <Login />

        <CurrentUser />

        <BookRoom />

        <UserBookings />
      </div>
    </div>
  );
};

export default Home;
