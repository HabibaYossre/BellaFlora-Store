import React from "react";
import "./Occasions.css";
import Occassion from "../ui/Occassion";
import { Link } from "react-router-dom";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa6";

function Ocassions() {
  const occasionsData = [
    { name: "Weddings", icon: <GiBigDiamondRing /> },
    { name: "Birthday", icon: <FaBirthdayCake /> },
    { name: "Anniversary", icon: <FaHeart /> },
    { name: "Graduation", icon: <FaGraduationCap /> },
    { name: "Get Well Soon", icon: <FaUserDoctor /> },
    { name: "Thank You", icon: <FaHandHoldingHeart /> },
  ];
  return (
    <div className="ocassions-container">
      <div className="headers">
        <div className="subheader">Ocassions</div>
        <h2 className="ocassions-mainHeader">
          Shop By <span>Ocassions</span>
        </h2>
      </div>

      <div className="ocassions-types">
        {occasionsData.map((item) => (
          <Occassion icon={item.icon} name={item.name}></Occassion>
        ))}
      </div>

      <div className="collection-cards">
        <div className="collection card1">
          <div className="discount">
            Flat 20% Discount
          </div>
          <h3>Lovely Fresh Bouqets</h3>
          <div className="collection-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui.</div>
          <div className="btns collection-btns"><Link to="/products/all">Shop Now</Link></div>
        </div>
         <div className="collection card2">
          <div className="discount">
            Flat 20% Discount
          </div>
          <h3>Lovely Fresh Bouqets</h3>
          <div className="collection-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui.</div>
          <div className="btns collection-btns"><Link to="/product/all">Shop Now</Link></div>
        </div>
      </div>
    </div>
  );
}
export default Ocassions;
