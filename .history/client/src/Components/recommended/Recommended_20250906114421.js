import React from "react";
import "./Recommended.css";
function Recommended({handleRecommendedBtns}) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns" value="Daisy" onClick={handleRecommendedBtns}>Daisy</button>
        <button className="btns"  value="Dandelion" onClick={handleRecommendedBtns}>Dandelion</button>
        <button className="btns" value="Rose" onClick={handleRecommendedBtns}>Rose</button>
        <button className="btns" value="Sunflowers" onClick={handleRecommendedBtns}>Sunflowers</button>
        <button className="btns" value="Tulip" onClick={handleRecommendedBtns}>Tulip</button>

      </div>
    </div>
  );
}

export default Recommended;
