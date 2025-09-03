import React from "react";
import "./Invoice.css";
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";

import Footer from '../Footer/Footer';



function Invoice(){
     const orderDetails = [
    { id: 1, name: "Blue White Bouquets", type: "Bouquet", price: 180, img: "/images/bouquet1.png" },
    { id: 2, name: "Royal Pink Bouquets", type: "Bouquet", price: 96, img: "/images/bouquet2.png" },
    { id: 3, name: "Lavenders Bouquets", type: "Bouquet", price: 24, img: "/images/bouquet3.png" },
    { id: 4, name: "Fresh Flower Basket", type: "Basket", price: 84, img: "/images/basket.png" },
  ];
    return(
        <>
        <Header />
      {/* <div className='order-container'>
        <h2>Order Completed</h2> <br />
        <span className='cart-items'>Home / Shopping Cart / Checkout/ Order Completed</span>
        </div> */}
         <div className="order-completed">

      <div className="order-header">
        <div className="checkmark">✔</div>
        <h2>Your order is completed!</h2>
        <p>Thank you. Your Order has been received.</p>
      </div>
<div className="order-info-box">
      <div className="order-item">
        <span>Order ID</span>
        <p>#SDGT1254FD</p>
      </div>
      <div className="order-item">
        <span>Payment Method</span>
        <p>Paypal</p>
      </div>
      <div className="order-item">
        <span>Transaction ID</span>
        <p>TR542SSFE</p>
      </div>
      <div className="order-item">
        <span>Estimated Delivery Date</span>
        <p>24 December 2024</p>
      </div>
      <button className="invoice-btn">Download Invoice</button>
    </div>

      <div className="order-details">
        <h3>Order Details</h3>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map(item => (
              <tr key={item.id}>
                <td className="product-info">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <p className="product-name">{item.name}</p>
                    <span className="product-type">{item.type}</span>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td>Shipping</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Taxes</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Coupon Discount</td>
              <td>- $30.00</td>
            </tr>
            <tr className="total-row">
              <td>Total</td>
              <td>$354.00</td>
            </tr>
          </tbody>
        </table>
      </div>
</div>
        <Shipping />
        <Subscribe />
        <Footer />
        </>
    );

}
export default Invoice ;

