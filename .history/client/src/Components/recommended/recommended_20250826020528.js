import React from "react";
import "./Recommended.css";
function Recommended() {
  return (
    <div>
      <h2 className="Recommended">By Flower Type</h2>
      <div className="recommended-flex">
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
