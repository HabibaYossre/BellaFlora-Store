import React from "react";
import "./Recommended.css";
function Recommended() {
  return (
    <div>
      <h2>By Flower Type</h2>
      <div className="recommended-btns">
        <button>All Types</button>
        <button>Roses</button>
        <button>Tulips</button>
        <button>Lilies</button>
        <button>Sun</button>
      </div>
    </div>
  );
}

export default Recommended;
