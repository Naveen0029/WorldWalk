import React from "react";
import "./SocialNavbar.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialNavbar = () => {
  return (
    <div className="socialNavbar">
      <div className="Icons">
        <p style={{ color: "white" }}>Follow Us</p>
        <a
          href={"https://www.facebook.com/profile.php?id=100090322630445"}
          target="_blank"
        >
          <FaFacebook style={{ color: "white" }} />
        </a>
        <a href="" target="_blank">
          <FaInstagram style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
};

export default SocialNavbar;
