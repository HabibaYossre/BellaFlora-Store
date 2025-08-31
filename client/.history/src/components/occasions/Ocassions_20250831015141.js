import React from "react";
import "./Occasions.css";
import Occassion from "../ui/Occassion"
import { GiBigDiamondRing } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { TbHeartHandshake } from "react-icons/tb";


function Ocassions() {
    const occasionsData=[
        {name:"Weddings" , icon: <GiBigDiamondRing />},
        {name:"Birthday" , icon: <FaBirthdayCake />},
        {name:"Anniversary" , icon: <FaHeart />},
        {name:"Graduation" , icon: <FaGraduationCap />},
        {name:"Get Well Soon" , icon: <FaUserDoctor />},
        {name:"Thank You" , icon: <TbHeartHandshake />
},

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

       {oc}
      </div>
    </div>
  );
}
export default Ocassions;
