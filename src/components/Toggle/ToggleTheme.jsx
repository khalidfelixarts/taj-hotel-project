"use client";
import React, { useState } from "react";
import module from "./ToggleTheme.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "@/redux-toolkit/reducers/theme.reducer";
import { Box } from "@mui/material";

const ToggleTheme = ({ sx }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state?.theme?.theme);

  return (
    <>
      <Box sx={{ ...sx }} className={`${module.toggle_switch}`}>
        <label className={module.switch_label}>
          <input
            checked={theme}
            type="checkbox"
            className={module.checkbox}
            onChange={() => {
              dispatch(changeTheme({ mode: !theme }));
            }}
          />
          <span className={module.slider}></span>
        </label>
      </Box>
    </>
  );
};

export default ToggleTheme;
