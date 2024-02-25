"use client";
import Image from "next/image";
import "./header.scss";
import Burger from "./Burger/Burger";
import Nav from "./Nav/Nav";
import { useState } from "react";
import Button from "@mui/material/Button";

const Header = () => {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <header className="header">
        <Image
          src="/logo.png"
          width={85}
          height={50}
          style={{ padding: "1px" }}
        />

        <ul>
          <nav>
            <li>OUR HOTELS</li>
            <li>DINING</li>
            <li>WEDDINGS</li>
            {/* <li>GIFT CARDS</li> */}
            <li>TAJ HOLIDAYS</li>
            {/* <li>MEMBERSHIP PROGRAMS</li> */}
            <li>MANAGE BOOKING</li>
            {/* <li>SIGN IN</li> */}
          </nav>
        </ul>
        <p>SIGN IN</p>

        <Button className="book__button" variant="contained">
          BOOK A STAY
        </Button>
        {/* <span className="book__button">BOOK A STAY</span> */}
        <Burger
          className={"burger"}
          navState={navState}
          setNavState={setNavState}
        />
      </header>
      <Nav isActive={navState} />
    </>
  );
};

export default Header;
