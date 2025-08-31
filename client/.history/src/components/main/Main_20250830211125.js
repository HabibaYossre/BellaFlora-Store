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
<h1>The Ultimate <span></span></h1>
{/* header end */}

      </div>
      <div className="right-section">ff</div>
    </div>
  );
}
export default Main;
