import React from "react";
import Link from "next/link";
import module from "./custombutton.module.scss";
import { Box } from "@mui/material";

const CustomButton = ({ href, width, sx, children }) => {
  return (
    <Box
      sx={{ ...sx }}
      style={{ width: width ? width : "" }}
      className={module.custom__button__parent}
    >
      <Link href={`${href}`}>
        <h4>
          <span className={module.gallery__button}>{children}</span>
        </h4>
      </Link>
    </Box>
  );
};

export default CustomButton;
