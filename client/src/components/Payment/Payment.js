import React, { useState, useContext } from "react";
import "./Payment.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";
import { useNavigate } from 'react-router-dom';
import { FaPaypal, FaGooglePay, FaMoneyBillWave } from "react-icons/fa";
import { SiVisa, SiVodafone } from "react-icons/si";
import { CartContext } from "../../context/CartContext";
import axios from "axios";

function Payment() {
  const [selected, setSelected] = useState("paypal");
  const { cart } = useContext(CartContext);
  const[cardname,setCardname]=useState("");
  const[cardnumber,setCardnumber]=useState("");
  const[cardcvv,setCardcvv]=useState("");
  const[cardexm,setCardexpm]=useState("");
  const[cardexy,setCardexpy]=useState("");


  
  const navigate = useNavigate();

  const methods = [
    {
      id:"paypal",
      label:"Paypal",
      icon: <FaPaypal className="text-blue-700 text-2xl" />

    },
     {  id: "visa", 
       label: "**** **** **** 8047", 
        icon: <SiVisa className="text-blue-700 text-2xl" />},
    {  id: "googlepay", 
       label: "Google Pay", 
        icon: <FaGooglePay className="text-red-500 text-2xl" />}, 
    // { // id: "cod", // label: "Cash On Delivery", // icon: <FaMoneyBillWave className="text-purple-600 text-2xl" />, // }, {
    {
      id: "add-card",
      label: "Add New Card/Debit Card",
      icon: <SiVodafone className="text-purple-600 text-2xl" />,
    },
    
   
  ];

  const paymentroute = (e) => {

    e.preventDefault();
    // try {
    //  const res= axios.post(
    //     "http://localhost:3000/",
    //     { cardname,cardnumber, cardexm,cardexy,cardcvv },
    //     { withCredentials: true } 
    //   );

    //   if (res.status === 200) {
        
    //     navigate("/Invoice");
    //   }
    // } catch (err) {
    //   console.error(err.response?.data || err.message);
    // alert("Habiba Something Went Wrong")
    // }

    navigate('/Invoice');
  };

  return (
    <div>
 

      <div className='order-container'>
        <h2>Payment Page</h2>
        <span className='cart-items'>Home / Shopping Cart / Checkout</span>
      </div>

      <div className="line payment-line">
        <div className="payment-container">
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

          {/* Render Add Card Form only if selected */}
          {selected === "add-card" && (
            <div className="add-card-form">
              <form className="payment-form">
                <label htmlFor="cardname">Name on Card *</label>
                <input type="text" id="cardname" name="cardname" placeholder="John More Doe" required onChange={(e) => setCardname(e.target.value)}/>

                <label htmlFor="cardnumber">Credit card number *</label>
                <input type="text" id="cardnumber" name="cardnumber" placeholder="1111-2222-3333-4444" required onChange={(e) => setCardnumber(e.target.value)} />

                <label htmlFor="expmonth">Exp Month *</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September" required onChange={(e) => setCardexpm(e.target.value)} />

                <label htmlFor="expyear">Exp Year *</label>
                <input type="text" id="expyear" name="expyear" placeholder="2024" required onChange={(e) => setCardexpy(e.target.value)} />

                <label htmlFor="cvv">CVV *</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" required onChange={(e) => setCardcvv(e.target.value)} />

                <button type="button" className="Addcard-btn" onClick={paymentroute}>
                  Add Card & Proceed
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>
            Items <span>{cart.items.reduce((sum, i) => sum + i.quantity, 0)}</span>
          </p>
          <p>Subtotal <span>${(cart.subtotal || 0).toFixed(2)}</span></p>
          <p>Shipping <span>${(cart.shipping || 0).toFixed(2)}</span></p>
          <p>Taxes <span>${(cart.tax || 0).toFixed(2)}</span></p>
          <hr />
          <p className="total">Total <span>${(cart.totalPrice || 0).toFixed(2)}</span></p>
          <button className="checkout-btn" onClick={paymentroute}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Shipping />
      <Subscribe />
  
    </div>
  );
}

export default Payment;
