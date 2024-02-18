import React from "react";
import "../auth.scss";
import { SignUp } from "@/components/login/Login";

const Page = () => {
  return (
    <div className="auth__page">
      <SignUp />
    </div>
  );
};

export default Page;
