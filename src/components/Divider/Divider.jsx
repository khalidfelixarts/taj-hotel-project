import React from "react";
import { Box } from "@mui/material";

const Divider = () => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "3px",
        marginX: "auto",
        background: "rgba(0, 0, 0,0.5)",
      }}
    />
  );
};

export default Divider;
