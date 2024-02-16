import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image:'https://www.freeiconspng.com/uploads/food-icon-7.png',
      title: " Meals",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: 'https://cdn4.iconfinder.com/data/icons/touch-gestures-4/512/choose-512.png',
      title: "Choose your items",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0012/4089/1472/files/shutterstock_353170508_97d70315-7ad5-4f85-8b30-d17748a068d9.png?4302',
      title: "Free Delivery Available",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Get Ready</p>
        <h1 className="primary-heading"></h1>
        <p className="primary-text">
        Good nutrition also involves avoiding certain kinds of foods. Sodium is used heavily in processed foods and is dangerous for people with high blood pressure. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
