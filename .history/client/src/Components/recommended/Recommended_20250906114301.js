import React from "react";
import "./Recommended.css";
function Recommended({handleRecommendedBtns}) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">Daisy</button>
        <button className="btns">Dandelion</button>
        <button className="btns">Rose</button>
        <button className="btns">Sunflowers</button>
        <button className="btns">Tulip</button>

      </div>
    </div>
  );
}

export default Recommended;
