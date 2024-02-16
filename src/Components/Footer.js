import React from "react";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src='https://webstockreview.net/images/clipart-restaurant-restaurant-logo-13.png' alt="" />
        </div>
        <div style={{color:'red'}}  className="footer-icons">
          <BsTwitter color="skyblue" />
          <SiLinkedin color="blue" />
          <BsYoutube  color="red"/>
          <FaFacebookF color="blue" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span></span>
          <span>location</span>
          <span>items</span>
          <span>employees</span>
          {/* <span>Testimonials</span> */}
          <span>purpose</span>
        </div>
        <div className="footer-section-columns">
          {/* <span>244-5333-7783</span> */}
          <span>citycafe.in</span>
          <span>citycafe.com</span>
          <span>www.citycafe.in</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
