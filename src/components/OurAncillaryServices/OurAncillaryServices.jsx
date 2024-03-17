import React from "react";
import module from "./OurAncillaryServices.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import CustomButton from "../customButton/CustomButton";
import { createImgUrl } from "@/utils/constants";

const OurAncillaryServices = () => {
  const ancillaryData = [
    {
      title: "TIMELESS WEDDINGS",
      img: createImgUrl("Hotel/ancillary/rpyxv7l2sbiskumjehsr"),
      description:
        "Nestled among lush green spaces in Sagar, Hotel Deepali offers a picturesque backdrop for your special day. Whether you envision an intimate gathering or a grand affair, our versatile event spaces can accommodate weddings of all sizes and styles.",
    },
    {
      title: "CONFERENCES",
      img: createImgUrl("Hotel/ancillary/qhgog89kdvzarg9j4kfp"),
      description:
        "Host your next conference in style and sophistication at our elegant venue, where modern amenities and attentive staff come together to create a professional yet inviting atmosphere conducive to collaboration and success.",
    },
    {
      title: "DINING",
      img: createImgUrl("Hotel/ancillary/m7embtd6qd7xmhmmmwxb"),
      description:
        "Experience the perfect blend of flavors and ambiance with our exclusive dining. Savor the artistry of our world-class chefs as they craft a menu inspired by global flavors and local ingredients.",
    },
    {
      title: "Birthday Parties",
      img: createImgUrl("Hotel/ancillary/fo7jfznho8rjccpgevou"),
      description:
        "Discover serenity in our luxurious suites, where modern elegance meets timeless comfort. Indulge in breathtaking views and personalized service for an unforgettable stay",
    },
  ];

  return (
    <section className={module.ancillary__parent}>
      <h1 className={module.title}>Our Ancillary Services</h1>
      <div className={module.scrollbar}>
        {ancillaryData?.map((i, index) => (
          <Box
            key={index}
            sx={{
              overflowY: "hidden",
              height: "600px",
              width: "450px",
              // minWidth: "200px",
            }}
          >
            <Box
              className={module.card}
              sx={{
                minWidth: "400px",
                height: "100%",
                // marginLeft: "1px",
                // marginRight: "1px",
              }}
            >
              <Box
                className={module.card__top}
                sx={{
                  background: "#000",
                  minWidth: "400px",
                  color: "white",
                  position: "relative",
                  //   height: "40%",
                }}
              >
                <Image src={i.img} fill />
                {/* <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                  }}
                />
                <Box
                  className={module.title__text}
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: "32px", color: "#fff" }}>
                    {i?.title}
                  </h1>
                </Box> */}
              </Box>

              <Box
                sx={{
                  background: "linear-gradient(0deg,#e4e4e4,#fff)",
                  minWidth: "400px",
                  height: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  gap: "15px",
                }}
              >
                <h2>{i?.title}</h2>
                <p>{i?.description}</p>
                <CustomButton href={"#"} width={"170px"}>
                  Know More
                </CustomButton>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default OurAncillaryServices;
