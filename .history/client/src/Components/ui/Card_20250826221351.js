import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

 function Card({_id , name ,description, price, images, ratings}) {
  return (
    <section className="card">
            <img className="card-img"
              src={img}
              alt=""
            />
    
            <div className="card-details">
              <h3 className="card-title">flower1</h3>
              <section className="card-reviews">
                <FaStar className="ratings-star" />
                <FaStar className="ratings-star" />
                <FaStar className="ratings-star" />
                <FaStar className="ratings-star" />
              <span className="total-reviews">4</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>$300</del> $200
                </div>
                <div className="bag">
                  <IoBag  className="bag-icon"/>
                </div>
              </section>
            </div>
          </section>
  )
}
export default Card;
