import React from "react";
import "./nav.scss";
import Link from "next/link";

const Nav = ({ isActive }) => {
  return (
    <div className={`nav__parent ${isActive && "nav__active"}`}>
      {/*  */}

      <ul id="menubar" class="menu" role="menubar" aria-orientation="vertical">
        <li class="menu__item" role="none">
          <Link class="menu__link" href="/" role="menuitem" tabindex="-1">
            HOME
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link
            class="menu__link"
            href="/portfolio"
            role="menuitem"
            tabindex="-1"
          >
            OUR HOTELS
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link class="menu__link" href="awards" role="menuitem" tabindex="-1">
            DINING
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link class="menu__link" href="/team" role="menuitem" tabindex="-1">
            ROOMS
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link
            class="menu__link"
            href="/milestones"
            role="menuitem"
            tabindex="-1"
          >
            HOLIDAYS
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link
            class="menu__link"
            href="/clients"
            role="menuitem"
            tabindex="-1"
          >
            BOOKINGS
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link
            class="menu__link"
            href="/contact"
            role="menuitem"
            tabindex="-1"
          >
            SIGN IN
          </Link>
        </li>
        <li class="menu__item" role="none">
          <Link
            class="menu__link"
            href="/contact"
            role="menuitem"
            tabindex="-1"
          >
            CONTACT US
          </Link>
        </li>
      </ul>

      {/*  */}
    </div>
  );
};

export default Nav;
