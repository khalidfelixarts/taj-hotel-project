import React from "react";
import "./nav.scss";

const Nav = ({ isActive }) => {
  return <div className={`nav__parent ${isActive && "nav__active"}`}>Nav</div>;
};

export default Nav;
