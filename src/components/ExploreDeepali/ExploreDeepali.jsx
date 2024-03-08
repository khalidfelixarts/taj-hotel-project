import React from "react";
import module from "./exploredeepali.module.scss";
import { Constants, createImgUrl } from "@/utils/constants";
import Image from "next/image";
import { Box } from "@mui/material";

const ExploreDeepali = () => {
  const ImgUrl = Constants.ParallaxImgURL;

  const textStyle = {
    position: "absolute",
    left: "10px",
    bottom: "10px",
    fontSize: "30px",
    color: "white",
    letterSpacing: "1px",
  };

  return (
    <section className={module.explore__deepali__parent}>
      <h1 className={module.title}>Explore Deepali</h1>

      <div className={module.grid__parent}>
        <Box
          sx={{
            height: "65%",
            width: "100%",
            display: "flex",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "70%",
              overflow: "hidden",
            }}
          >
            <Image src={ImgUrl[0]} fill />
            <span
              style={{
                ...textStyle,
              }}
            >
              TIMELESS WEDDINGS
            </span>
          </Box>
          {/*  */}

          <Box
            sx={{
              width: "30%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "50%",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Image src={ImgUrl[1]} fill />
              <span style={{ ...textStyle }}>Sample 1</span>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "50%",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Image src={ImgUrl[1]} fill />
              <span style={{ ...textStyle }}>Sample 1</span>
            </Box>
          </Box>

          {/*  */}
        </Box>

        {/*  */}
        {/*  */}
        <Box
          sx={{ height: "35%", display: "flex", gap: "20px" }}
          className="bottom"
        >
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "30%",
              overflow: "hidden",
            }}
          >
            <Image src={ImgUrl[2]} fill />
            <span style={{ ...textStyle }}>Sample 2</span>
          </Box>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "30%",
              overflow: "hidden",
            }}
          >
            <Image src={ImgUrl[3]} fill />
            <span style={{ ...textStyle }}>Sample 3</span>
          </Box>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "40%",
              overflow: "hidden",
            }}
          >
            <Image src={ImgUrl[4]} fill />
            <span style={{ ...textStyle }}>Sample 4</span>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default ExploreDeepali;
