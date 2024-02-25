import React from "react";
import module from "./register.module.scss";
import Image from "next/image";
// import COVER from "@/assets/parallax/p12.jpg";
import { SignIn } from "@/components/login/Login";

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
  const COVER = `https://res.cloudinary.com/de0llaul4/image/upload/v1708862610/Hotel/parallax/i8v5s4b0kbguv4byvxy1.jpg`;

  return (
    <div className={module.left__part}>
      <Image src={COVER} />
    </div>
  );
}
function RightPart() {
  return (
    <div className={module.right__part}>
      <svg
        className={module.svg__top}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#dd9946"
          fill-opacity="1"
          d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,128C840,107,960,117,1080,133.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <SignIn />
      {/* <SignUp /> */}

      <svg
        className={module.svg__bottom}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#dd9946"
          fill-opacity="1"
          d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,128C840,107,960,117,1080,133.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default page;
