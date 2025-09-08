import React from "react";
import "./Wishlist.css";
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";
import { useState } from "react";
import axios from "axios";
import {wishlistContext} from '../../context/WishlistContext';
import {cartContext} from '../../context/CartContext';

function Wishlist() {
      const [wishlist, setWishlist] = wishlistContext();
      const {addToCart} =cartContext();


      const addAllToCart=()=>{
        wishlist.items.forEach=((id)=>{
          addToCart({productId:id ,quantity:1 });
        });
      }
    
      // const updateQty = (id, delta) => {
      //   setCartItems((prev) =>
      //     prev.map((item) =>
      //       item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      //     )
      //   );
      // };
    
      // const removeItem = (id) => {
      //   setCartItems((prev) => prev.filter((item) => item.id !== id));
      // };
      // const Addalltocard=()=>{

      // }
    
      // const subTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
      // const discount = 30;
      // const total = subTotal - discount;

    return (

        <div>

               {/* <div className='car-container'>

        <h2>Wishlist</h2> <br />
        <span className='cart-items'>Home/Wishlist</span>
        </div>  */}

    <div className="cart-container">
    
      <div className="cart-items">
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Date Added</span>
          <span>Stock Status</span>

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
            <span>Aug 15, 2023</span>
            <span className="in-stock">In Stock</span>
            <button className="add-cart-btn" onClick={Addtocart}>Add to Cart</button>
           
          
           
           
          </div>
          
          
        ))}
      
      </div>

            
        </div>
      
        <div className="wishlist-actions">
          <div className="two">
        <span className="clear-wishlist" onClick={() => setCartItems([])}>Clear Wishlist</span>
         <button className="add-to-cart-btn" onClick={Addalltocard}>Add All to Cart</button>
          </div>
    
          
        </div>
          <Shipping />
          
        <Subscribe />
        </div>
    );

};

export default Wishlist;