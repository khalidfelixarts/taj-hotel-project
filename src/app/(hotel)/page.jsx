import React from "react";
import RoomsSection from "@/components/RoomsSection/RoomsSection";
import Carousel from "@/components/Carousel/Carousel";
import ImageScroll from "@/components/ImageParallaxScroll/ImageScroll";
import NewRoomSection from "@/components/NewRoomSection/NewRoomSection";
import ExploreDeepali from "@/components/ExploreDeepali/ExploreDeepali";
import OurAncillaryServices from "@/components/OurAncillaryServices/OurAncillaryServices";
import Divider from "@/components/Divider/Divider";

const Home = () => {
  return (
    <main style={{ width: "100%" }}>
      <Carousel />

      {/* <NewRoomSection /> */}

      <RoomsSection />

      <ImageScroll />

      <Divider />

      <OurAncillaryServices />

      <Divider />

      <ExploreDeepali />
    </main>
  );
};

export default Home;
