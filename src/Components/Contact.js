import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="Danger-heading">Any Doubts? </h1>
      <h1 className="Danger">We will help you   </h1>
      <div  className="contact-form-container">
        <input  type="text" placeholder="Email id" />
        <button style={{color:'red'}}>Click here</button>
      </div>
    </div>
  );
};

export default Contact;
