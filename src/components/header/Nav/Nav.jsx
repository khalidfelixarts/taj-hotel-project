import React from "react";
import "./nav.scss";
import Link from "next/link";

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

  return (
    <div className={`nav__parent ${isActive && "nav__active"}`}>
      <ul className="menu">
        {navItems?.map((i) => (
          <li className="menu__item">
            <Link className="menu__link" href={`${i.link}`}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
