import React from "react";
import module from "./footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import CustomButton from "../customButton/CustomButton";

const Footer = ({ color }) => {
  return (
    <footer className={module.footer__parent}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path
          fill={`${color ? color : "#E0E0E0"}`}
          d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,101.3C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className={module.footer__content}>
        <div className={module.main__content__div}>
          <div className={module.left__right__parent}>
            <LeftPart />
            <RightPart />
          </div>
          <BottomPart />
        </div>
      </div>
    </footer>
  );
};

function LeftPart() {
  return (
    <div className={module.left__part}>
      <div className={module.footer__nav}>
        <h2>Keep Exploring</h2>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Review</span>
        <span>Blog</span>
      </div>
      <div className={module.footer__connect}>
        <h2>Connect</h2>
        <span>Contact Us</span>
        <div className={module.icons__parent}>
          <div>
            <FaInstagram className={module.icon} />
          </div>
          <div>
            <FaFacebookSquare className={module.icon} />
          </div>
          <div>
            <FaYoutube className={module.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RightPart() {
  return (
    <div className={module.right__part}>
      <h2>Stay in the know</h2>
      <p>
        Stay in the know with our exclusive newsletter, delivering the latest
        deals and updates directly to your inbox. Follow us on social media for
        real-time insights into our offerings, ensuring you never miss out on
        our exceptional accommodations.
      </p>

      <div className={module.newsletter__parent}>
        <input type="email" placeholder="Email" />
        <span>Sign Up</span>
      </div>
    </div>
  );
}

function BottomPart() {
  return (
    <div className={module.bottom__part__parent}>
      <div className={module.divider}></div>

      <div className={module.bottom__content}>
        <span>Copyright © 2024 Sayma</span>

        <div>
          <span>Site Credits</span>
          <span> | </span>
          <span>Terms & Conditions</span>
          <span> | </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
