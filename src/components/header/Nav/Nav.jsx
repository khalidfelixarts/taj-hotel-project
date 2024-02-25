import React from "react";
import "./nav.scss";
import Link from "next/link";

const Nav = ({ isActive }) => {
  return (
    <div className={`nav__parent ${isActive && "nav__active"}`}>
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link" href="/">
            HOME
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/portfolio">
            OUR HOTELS
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="awards">
            DINING
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/team">
            ROOMS
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/milestones">
            HOLIDAYS
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/clients">
            BOOKINGS
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/contact">
            SIGN IN
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" href="/contact">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
