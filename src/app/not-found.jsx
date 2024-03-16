import React from "react";
import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "32px" }}>
        The Page You Are Looking For Not Found
      </span>
    </Box>
  );
};

export default NotFound;
