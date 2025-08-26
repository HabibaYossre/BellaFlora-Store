import React from "react";
import "./Recommended.css";
function Recommended() {
  return (
    <div>
      <h2>By Flower Type</h2>
      <div className="recommended-btns">
        <button className="btns">All Types</button>
        <button className="btns">Roses</button>
        <button className="btns">Tulips</button>
        <button className="btns">Lilies</button>
        <button className="btns">Sunflowers</button>
      </div>
    </div>
  );
}

export default Recommended;
