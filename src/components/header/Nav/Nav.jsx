import React from "react";
import "./nav.scss";
import Link from "next/link";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import ToggleTheme from "@/components/Toggle/ToggleTheme";

const Nav = ({ isActive }) => {
  const navItems = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "GALLERY",
      link: "/gallery",
    },
    {
      name: "HOLIDAYS",
      link: "/gallery#holidays",
    },
    {
      name: "DINING",
      link: "/gallery#dining",
    },
    {
      name: "ROOMS",
      link: "/#rooms",
    },
    {
      name: "BOOKINGS",
      link: "/bookings",
    },
    {
      name: "SIGN IN",
      link: "/signin",
    },
    {
      name: "CONTACT US",
      link: "/contact",
    },
  ];

  const theme = useSelector((state) => state?.theme?.theme);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className={`nav__parent ${isActive && "nav__active"}`}
    >
      <ul className="menu">
        {navItems?.map((i, index) => (
          <li key={index} className="menu__item">
            <Link className="menu__link" href={`${i.link}`}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
      <Box
        sx={{
          height: "10%",
          paddingLeft: "40px",
          display: "flex",
          paddingBottom: "40px",
        }}
      >
        <ToggleTheme />
        <span
          style={{
            marginLeft: "10px",
            padding: "4px",
            fontSize: "1.7rem",
            color: `${theme ? "#fff" : "#212121"}`,
          }}
        >
          {theme ? "Dark Mode" : "Light Mode"}
        </span>
      </Box>
    </Box>
  );
};

export default Nav;
