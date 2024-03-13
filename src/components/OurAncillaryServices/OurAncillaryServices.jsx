import React from "react";
import module from "./OurAncillaryServices.module.scss";
import { Box } from "@mui/material";
import Image from "next/image";
import CustomButton from "../customButton/CustomButton";

const OurAncillaryServices = () => {
  const img =
    "https://res.cloudinary.com/de0llaul4/image/upload/v1708862610/Hotel/parallax/upwnssaaks3drqunjqbv.jpg";

  return (
    <section className={module.ancillary__parent}>
      <h1 className={module.title}>Our Ancillary Services</h1>
      <div className={module.scrollbar}>
        {[1, 2, 3, 4].map((i, index) => (
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
                <Image src={img} fill />
                <Box
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
                    Sample Title
                  </h1>
                </Box>
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
                <h2>Sample Title</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  ea ab placeat vel quidem asperiores nulla dolores animi earum
                  nisi, amet possimus accusamus rerum totam modi consequatur
                  porro aliquid adipisci!
                </p>
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
