"use client";
import React from "react";
import { useSelector } from "react-redux";

const CustomTheme = ({ children }) => {
  const theme = useSelector((state) => state?.theme?.theme);

  return <div className={`themeProvider ${theme && "dark"}`}>{children}</div>;
};

export default CustomTheme;
