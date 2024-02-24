import React from "react";
import module from "./register.module.scss";
import Image from "next/image";
import COVER from "@/assets/parallax/p3.jpg";

const page = () => {
  return (
    <div className={module.register__parent}>
      <div className={module.register__window}>
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

function LeftPart() {
  return (
    <div className={module.left__part}>
      <Image src={COVER} />
    </div>
  );
}
function RightPart() {
  return <div className={module.right__part}>RightPart</div>;
}

export default page;
