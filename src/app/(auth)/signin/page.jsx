import React from "react";
import "../auth.scss";
import { SignIn } from "@/components/login/Login";

const Page = () => {
  return (
    <div className="auth__page">
      <SignIn />
    </div>
  );
};

export default Page;
