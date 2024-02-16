import React from "react";
import AboutBackground from "../Assets/about-background.png";
// import AboutBackgroundImage from "../Assets/about-background-image.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src='https://png.pngtree.com/back_origin_pic/04/51/79/087a1dfbdba087b3f72beb382991438c.jpg' alt="" />
      </div>
      <div className="about-section-image-container">
        <img src='https://www.pngmart.com/files/7/Fresh-Healthy-Food-Background-PNG.png' alt="" />
      </div>
      <div className="about-section-text-container">
        <p style={{color:'red'}} className="primary-subheading">About</p>
        <h1 className="primary-heading">
        The effective management of food intake and nutrition are both key to good health.
        </h1>
        <p className="primary-text">
        Smart nutrition and food choices can help prevent disease. Eating the right foods can help your body cope more successfully with an ongoing illness.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button"></button> */}
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> 
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
