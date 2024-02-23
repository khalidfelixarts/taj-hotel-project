import React from "react";
import Link from "next/link";
import module from "./custombutton.module.scss";

const CustomButton = ({ href, children }) => {
  return (
    <div className={module.custom__button__parent}>
      <Link href={`${href}`}>
        <h4>
          <span className={module.gallery__button}>{children}</span>
        </h4>
      </Link>
    </div>
  );
};

export default CustomButton;
