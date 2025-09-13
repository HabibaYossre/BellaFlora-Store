import React from "react";
import "./Recommended.css";
function Recommended({handleRecommendedBtns, selectedRecommended}) {
  const recommendations = [
    { value: "Daisy", label: "Daisy" },
    { value: "Dandelion", label: "Dandelion" },
    { value: "Rose", label: "Rose" },
    { value: "Sunflower", label: "Sunflowers" },
    { value: "Tulip", label: "Tulip" },
    {value:"Know Type",label:"Know Type"}
  ];

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        {recommendations.map((rec) => (
          <button 
            key={rec.value}
            className={`btns ${selectedRecommended === rec.value ? 'selected' : ''}`}
            value={rec.value} 
            onClick={handleRecommendedBtns}
          >
            {rec.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
