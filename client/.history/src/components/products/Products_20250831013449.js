import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import Card from "../ui/Card";

function Products({ result }) {
  return (
    <section className="card-container">
      {result}
      {/* filtering products result */}
    </section>
  );
}
export default Products;
