import React from "react";
import "./Wishlist.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";
import { useState } from "react";


const Wishlist=() => {
      const [cartItems, setCartItems] = useState([
        { id: 1, name: "Blue White Bouquets", type: "Bouquet", price: 45, qty: 4, img: "/blue.png" },
        { id: 2, name: "Royal Pink Bouquets", type: "Bouquet", price: 48, qty: 2, img: "/pink.png" },
        { id: 3, name: "Lavenders Bouquets", type: "Bouquet", price: 24, qty: 1, img: "/lavender.png" },
        { id: 4, name: "Fresh Flower Basket", type: "Basket", price: 42, qty: 2, img: "/basket.png" },
      ]);
    //   if(cartItems.type!=="Bouquet" && cartItems.type!=="Basket"){
    //     return <div>Loading...</div>;

    //   }

    
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
        <h2>Wishlist</h2> <br />
        <span className='cart-items'>Home/Wishlist</span>
        </div>

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
            <button className="add-cart-btn" >Add to Cart</button>
           
          
           
           
          </div>
          
          
        ))}
      
      </div>

            
        </div>
        {/* <div className="wishlist-link">
            <span className="link-wishlist" onClick={() => setCartItems([])}> Wishlist Link</span>
          <input type="text" id="link-wishlist" name="link-wishlist" placeholder="https://localhost3000/Wishlist" />
          <button className="apply-copy-btn">Copy Link</button>
        </div> */}
        <div className="wishlist-actions">
         < div className="one">  
          
          <input type="text" id="link-wishlist" name="link-wishlist" placeholder="https://localhost3000/Wishlist"  />
          <button className="apply-copy-btn">Copy Link</button>
          </div>
          <div className="two">
        <span className="clear-wishlist" onClick={() => setCartItems([])}>Clear Wishlist</span>
         <button className="add-to-cart-btn">Add All to Cart</button>
          </div>
        </div>
          <Shipping />
          
        <Subscribe />
            <Footer />
        </div>
    );

};

export default Wishlist;