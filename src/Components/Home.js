import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
// import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img  src='https://www.pptbackgrounds.net/uploads/abstract-stacking-orange-powerpoint-backgrounds.jpg' alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          We are not awarded for nothing. Taste of the best!
          </h1>
          <p className="primary-text">
          Places we prefer vary depending on our taste, culture, mood, previous experience and our first impression of the place.
          </p>
          <button style={{color:'red'}} className="danger-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src='https://freepngimg.com/thumb/pizza/35-pizza-png-image.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
