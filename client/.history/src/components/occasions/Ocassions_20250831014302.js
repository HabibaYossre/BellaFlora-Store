import React from "react";
import "./Occasions.css";
import Occassion from "../ui/Occassion"
import { GiBigDiamondRing } from "react-icons/gi";


function Ocassions() {
    const occasionsData=[
        {name:"Weddings" , icon}
    ]
  return (
    <div className="ocassions-container">
      <div className="headers">
        <div className="subheader">Ocassions</div>
        <h2 className="ocassions-mainHeader">
          Shop By <span>Ocassions</span>
        </h2>
      </div>

      <div className="ocassions-types">
       <Occassion></Occassion>
      </div>
    </div>
  );
}
export default Ocassions;
