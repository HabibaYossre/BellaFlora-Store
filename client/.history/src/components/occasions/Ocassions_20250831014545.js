import React from "react";
import "./Occasions.css";
import Occassion from "../ui/Occassion"
import { GiBigDiamondRing } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";


function Ocassions() {
    const occasionsData=[
        {name:"Weddings" , icon: <GiBigDiamondRing />},
        {name:"Birthday" , icon: <FaBirthdayCake />},
        {name:"Anniversary" , icon: GiBigDiamondRing},
        {name:"Graduation" , icon: GiBigDiamondRing},
        {name:"Get Well Soon" , icon: GiBigDiamondRing},
        {name:"Ne" , icon: GiBigDiamondRing},

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
