"use client";
import React from "react";
import { useSelector } from "react-redux";

const CurrentUser = () => {
  const { user } = useSelector((state) => state.user);
  console.log("Redux : ", user);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        background: "#242C30",
        border: "1px solid white",
      }}
    >
      <h1>Current User: {user?.name ? user?.name : "Not Auth"}</h1>
      <h4>_id: {user?._id}</h4>
      <h4>Email: {user?.email}</h4>
      {/* <h4>Password: {user?.password}</h4> */}
    </div>
  );
};

export default CurrentUser;
