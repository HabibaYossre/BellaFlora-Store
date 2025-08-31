import React from "react";
import "./TrackOrder.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TrackOrder=() => {    
    // const { orderId } = useParams();
    // const [order, setOrder] = useState(null);

    // useEffect(() => {
    //     // Fetch order details from backend
    //     axios.get(`http://localhost:5000/api/orders/${orderId}`)
    //         .then(response => {
    //             setOrder(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the order data!", error);
    //         });
    // }, [orderId]);
    // if (!order) {
    //     return <div>Loading...</div>;
    // }
    return (
        <div>
            <Header />
               <div className='order-container'>
        <h2>Track Order</h2> <br />
        <span className='cart-items'>Home / Track Order</span>
        </div>
        <div className="track-order-container">
            <p>To track your order Enter your Order ID and Billing Email to track your order.</p>
            <div className="order-info">
                <label htmlFor="order-id">Order ID*</label>
               
                <input type="text" id="order-id" name="order-id" placeholder="Enter Order ID" />
               
                <label htmlFor="email">Billing Email*</label>
             
                <input type="email" id="email" name="email" placeholder="Your Billing Email" />
             
                <button type="submit">Track Order</button>
                
               
            </div>
           
        </div>
        <Shipping />
        <Subscribe />
        <Footer />
        </div>
    );
}
export default TrackOrder;