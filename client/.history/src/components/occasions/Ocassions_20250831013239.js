import React from "react";
import "./Occasions.css";
import '../ui/occassion/Occassion';
function Ocassions() {
  return (
    <div className="ocassions-container">
      <div className="headers">
        <div className="subheader">Ocassions</div>
        <h2 className="ocassions-mainHeader">Shop By <span>Ocassions</span></h2>
      </div>

      <div className="ocassions-types">
       
      <Occassion></Occassion>
      </div>
      
    </div>
  );
}
export default Ocassions;
