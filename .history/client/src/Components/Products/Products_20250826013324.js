import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";

function Products() {
  return (
    <section className="card-container">
      <section className="card">
        <img
          src="https://m.media-amazon.com/images/I/81QrpaXLdvL._AC_SL1500_.jpg"
          alt=""
        />

        <div className="card-details">
          <h3 className="card-title">flower1</h3>
          <section className="card-reviews">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </section>
          <span className="total-reviews">4</span>
          <section className="price">
            <del></del>
          </section>
        </div>
      </section>
    </section>
  );
}
export default Products;
