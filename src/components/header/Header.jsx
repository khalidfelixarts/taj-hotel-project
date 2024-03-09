"use client";
import Image from "next/image";
import "./header.scss";
import Burger from "./Burger/Burger";
import Nav from "./Nav/Nav";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LOGO from "../../../public/assets/logo.png";

const Header = () => {
  const [navState, setNavState] = useState(false);

  const router = useRouter();
  return (
    <>
      <header className="header">
        <Image
          onClick={() => router.push("/")}
          src={LOGO}
          // src="https://res.cloudinary.com/de0llaul4/image/upload/v1708866033/Hotel/eloeu9luhnuxlffmoq0i.png"
          width={120}
          height={55}
          style={{ padding: "1px" }}
        />

        <ul>
          <nav>
            <Link href="/gallery">
              <li>GALLERY</li>
            </Link>

            <Link href="/gallery#holidays">
              <li>HOLIDAYS</li>
            </Link>

            <Link href="/gallery#dining">
              <li>DINING</li>
            </Link>

            <Link href="/book">
              <li>ROOMS</li>
            </Link>

            <Link href="/bookings">
              <li>BOOKINGS</li>
            </Link>
          </nav>
        </ul>

        <Link href="/register">
          <p>SIGN UP</p>
        </Link>

        <Button className="book__button" variant="contained">
          <Link href="#rooms">BOOK A STAY</Link>
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
