import React, { useState } from "react";
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";
import { useNavigate } from 'react-router-dom';
import { FaPaypal, FaGooglePay, FaMoneyBillWave } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { CardSim } from "lucide-react";

function Payment() {
  const [selected,setSelected]=useState("paypal");
  const navigate = useNavigate();
  const methods = [
    {
      id: "paypal",
      label: "Paypal",
     icon: <FaPaypal className="text-blue-700 text-2xl" />
        
      ,
    },
    {
      id: "visa",
      label: "**** **** **** 8047",
      icon: <SiVisa className="text-blue-700 text-2xl" />,
    },
    {
      id: "googlepay",
      label: "Google Pay",
      icon: <FaGooglePay className="text-red-500 text-2xl" />,
    },
    {
      id: "cod",
      label: "Cash On Delivery",
      icon: <FaMoneyBillWave className="text-purple-600 text-2xl" />,
    },
    
  ];
  const another=[
    {
       
      id:"add-card",
      label:"Add New Card/Debit Card",
      icon:<CardSim className="text-purple-600 text-2xl"/>
    }
    

  ];


  const paymentprocee=()=>{
    // alert("Proceeding to payment gateway...");
    // Here you can add your payment gateway integration logic
    navigate('/Home');
  }
  return (

    <div>   
        <Header />
  
        <div className='order-container'>
        <h2>Payment Page</h2> <br />
        <span className='cart-items'>Home / Shopping Cart / Checkout</span>
        </div>
        <div className="line payment-line">
           <div className="payment-container">
      <h2 className="title">Select Payment Method</h2>
      <div className="methods">
        {methods.map((method) => (
          <label
            key={method.id}
            className={`method ${selected === method.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
            />
            <div className="icon">{method.icon}</div>

            <span>{method.label}</span>
          </label>
        ))}
      </div>
    </div>


        <div className="payment-container">
            <div className="methods">
        {another.map((method) => (
          <label
            key={method.id}
            className={`method ${selected === method.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
            />
            <div className="icon">{method.icon}</div>

            <span>{method.label}</span>
          </label>
          
        ))}
        <br />
        
      </div>
      <form className="payment-form">
        <label for="cardname">Name on Card *</label><br />
        <input type="text" id="cardname" name="cardname" placeholder="John More Doe" /><br />
        <label for="cardnumber">Credit card number *</label><br />
        <input type="text" id="cardnumber" name="cardnumber" placeholder="1111-2222-3333-4444" /><br />
        <label for="expmonth">Exp Month *</label><br />
        <input type="text" id="expmonth" name="expmonth" placeholder="September" /><br />
        <label for="expyear">Exp Year *</label><br />
        <input type="text" id="expyear" name="expyear" placeholder="2024" />
        <label for="cvv">CVV *</label><br />
        <input type="text" id="cvv" name="cvv" placeholder="352" /><br />
     
        
                
      
 
      

      </form>
        <button className="checkout-btn" >Add Card</button>
    </div>
        <div className="order-summary">
      
        <h3>Order Summary</h3>
        <p>Items 12</p>
        <p>Sub Total 300$</p>
        <p>Shipping <span>$0.00</span></p>
        <p>Taxes <span>$0.00</span></p>
        <p>Coupon Discount -200$</p>

        <hr />
        
        <p className="total">Total 100$</p>
      
           
            <button className="checkout-btn" onClick={paymentprocee}>Proceed to Checkout</button>
           
      </div>
      </div>
            <Shipping />
        <Subscribe />
            <Footer />
    </div>

 )
}
export default Payment;  