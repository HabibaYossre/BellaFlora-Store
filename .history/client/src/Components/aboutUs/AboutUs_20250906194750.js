import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-img"></div>
      <div className="aboutUs-text">
        <div className="">About us</div>
        <div className="aboutUs-header">Delivering Nature's</div>
        <div className="aboutUs-subHeader">Beauty to Your Door</div>
        <div className="aboutUs-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          nulla?
        </div>

        <ui className="aboutUs-dashboard">
          <li>
            <div>20+</div>
            <div>Categories</div>
          </li>
          <li>
            <div>1000+</div>
            <div>Products</div>
          </li>
          <li>
            <div>99%</div>
            <div>Satisfied Customer</div>
          </li>
        </ui>
      </div>
    </div>
  );
}
export default AboutUs;
