import React from "react";
import "./Main.css";
import { GiFlowers } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";


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
          Brighten every moment with our handpicked fresh blooms. Fast delivery,
          beautiful arrangements, and smiles guaranteed!
        </div>
        {/* subHeader end */}

        {/* shop now section begin */}
        <div className="shop-now">
          <div className="btns main-btn">
            Shop Now
             <span>
              <FaArrowRight />
            </span>
          </div>
         <Link></Link>
        </div>
        {/* shop now section end */}
      </div>
      <div className="right-section">ff</div>
    </div>
  );
}
export default Main;
