
import React from 'react';
import "./Cart.css";
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Shipping from '../Shipping/Shipping';

import Order from '../Order/Order';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';






const Cart=() => {
      const [cartItems, setCartItems] = useState([
    { id: 1, name: "Blue White Bouquets", type: "Bouquet", price: 45, qty: 4, img: "/blue.png" },
    { id: 2, name: "Royal Pink Bouquets", type: "Bouquet", price: 48, qty: 2, img: "/pink.png" },
    { id: 3, name: "Lavenders Bouquets", type: "Bouquet", price: 24, qty: 1, img: "/lavender.png" },
    { id: 4, name: "Fresh Flower Basket", type: "Basket", price: 42, qty: 2, img: "/basket.png" },
  ]);
  const navigate = useNavigate();
  const paymentprocee=()=>{
    // alert("Proceeding to payment gateway...");
    // Here you can add your payment gateway integration logic
    navigate('/Order');
  }

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = 30;
  const total = subTotal - discount;

    
  return (
    <div>


    <div className='car-container'>
        <h2>Shopping Cart</h2> <br />
        <span className='cart-items'>Home/Shopping Cart</span>
        </div>

    <div className="cart-container">
    
      <div className="cart-items">
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        {cartItems.map((item) => (
          <div className="cart-row" key={item.id}>
            <span className="remove" onClick={() => removeItem(item.id)}>✖</span>
            <img src={item.img} alt={item.name} className="cart-img" />
            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>{item.type}</p>
            </div>
            <span>${item.price.toFixed(2)}</span>
            <div className="qty-controls">
              <button onClick={() => updateQty(item.id, -1)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
          
        ))}
      </div>

      
      <div className="order-summary">
      
        <h3>Order Summary</h3>
        <p>Items <span>{cartItems.reduce((sum, i) => sum + i.qty, 0)}</span></p>
        <p>Sub Total <span>${subTotal.toFixed(2)}</span></p>
        <p>Shipping <span>$0.00</span></p>
        <p>Taxes <span>$0.00</span></p>
        <p>Coupon Discount <span>-${discount.toFixed(2)}</span></p>

        <hr />
        
        <p className="total">Total <span>${total.toFixed(2)}</span></p>
      
           
            <button className="checkout-btn" onClick={paymentprocee}>Proceed to Checkout</button>
           
      </div>
         <div className="subscrib-form">
                <input type="email" placeholder="Coupon Code" />
                <button type="submit">Apply Coupon</button>
            </div>
    </div>
 
    
<Shipping />
    <Subscribe />
    <Footer />
 
</div>


      
);
};

    
 

export default Cart;