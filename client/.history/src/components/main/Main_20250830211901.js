import React from "react";
import "./Main.css";
import { GiFlowers } from "react-icons/gi";

function Main() {
  return (
    <div className="main-container">
      <div className="left-section">
        {/* slogan begin */}
        <div className="slogan">
          <span>
            <GiFlowers />
          </span>
          Your Trusted Online Flower Shop
        </div>
        {/* slogan end */}
        {/* header begin */}
        <h1 className="main-header">
          The Ultimate <span>Flower Shopping Destination</span>
        </h1>
        {/* header end */}
        {/* subHeader begin */}
        <div className="subHeader">
            
        </div>
        {/* subHeader end */}
      </div>
      <div className="right-section">ff</div>
    </div>
  );
}
export default Main;
