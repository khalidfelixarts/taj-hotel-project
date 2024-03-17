"use client";
import React from "react";
import module from "./footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Link from "next/link";

const Footer = ({ color }) => {
  const theme = useSelector((state) => state?.theme?.theme);

  return (
    <footer className={module.footer__parent}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path
          fill={`${color ? color : `${theme ? "#212121" : "#fff"}`}`}
          d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,101.3C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className={module.footer__content}>
        <div className={module.main__content__div}>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
            }}
            className={module.left__right__parent}
          >
            <LeftPart />
            <RightPart />
          </Box>
          <BottomPart />
        </div>
      </div>
    </footer>
  );
};

function LeftPart() {
  return (
    <Box
      sx={{
        marginBottom: { xs: "25px", md: "0" },
        width: { xs: "100%", md: "50%" },
        display: { xs: "block", md: "flex" },
      }}
      className={module.left__part}
    >
      <Box
        sx={{
          marginBottom: { xs: "25px", md: "" },
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
        }}
        className={module.footer__nav}
      >
        <h2>Keep Exploring</h2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: { xs: "15px", md: "0" },
            flexDirection: { md: "column" },
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} href={"/"}>
            <span>Home</span>
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }} href={"/"}>
            <span>About</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href={"/#rooms"}
          >
            <span>Services</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href={"/#"}
          >
            <span>Review</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            href={"/#"}
          >
            <span>Blog</span>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{ width: { md: "50%" }, height: "100%" }}
        className={module.footer__connect}
      >
        <h2>Connect</h2>
        <span>Contact Us</span>
        <div className={module.icons__parent}>
          <div>
            <FaInstagram className={module.icon} />
          </div>
          <div>
            <FaFacebookSquare className={module.icon} />
          </div>
          <div>
            <FaYoutube className={module.icon} />
          </div>
        </div>
      </Box>
    </Box>
  );
}

function RightPart() {
  return (
    <Box sx={{ width: { md: "50%" } }} className={module.right__part}>
      <h2>Stay in the know</h2>
      <p>
        Stay in the know with our exclusive newsletter, delivering the latest
        deals and updates directly to your inbox. Follow us on social media for
        real-time insights into our offerings, ensuring you never miss out on
        our exceptional accommodations.
      </p>

      <div className={module.newsletter__parent}>
        <input type="email" placeholder="Email" />
        <span>Sign Up</span>
      </div>
    </Box>
  );
}

function BottomPart() {
  return (
    <Box className={module.bottom__part__parent}>
      <Box className={module.divider}></Box>

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
        className={module.bottom__content}
      >
        <span>Copyright © 2024 Avis Media</span>

        <Box>
          <span>Site Credits</span>
          <span> | </span>
          <span>Terms & Conditions</span>
          <span> | </span>
          <span>Privacy Policy</span>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
