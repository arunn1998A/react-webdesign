import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p style={{color:'red'}} className="primary-subheading">Review</p>
        <h1 className="primary-heading">Customers Review</h1>
        <p  className="Danger-text">
    We Value Our Customers Reviews
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img width={100} src='https://www.nicepng.com/png/detail/838-8382821_matt-round-png-round-image-of-man.png' alt="" />
        <p>
        Good Food and Good Ambience And Also Affordable Price You will defeneatly enjoy.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Hareesh</h2>
      </div>
    </div>
  );
};

export default Testimonial;
