import React from 'react';
import './Order.css';
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Shipping from '../Shipping/Shipping';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import { useState } from 'react';
import { Home } from 'lucide-react';




function Order() {
      const [selected, setSelected] = useState("same");
      const [fullname,setFullname]=useState("")
      const [email,setEmail]=useState("")
      const [phonenumber,setPhonenumber]=useState("")
      const [address,setAddress]=useState("")
      const [city,setCity]=useState("")
      const [zipcode,setZipcode]=useState("")
      const [country,setCountry]=useState("")
      const [deliveryaddress,setDeliveryaddress]=useState("")



     const navigate = useNavigate();

  const proceddpayment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", { fullname,email,phonenumber,address,city,zipcode,country,deliveryaddress})
      .then((result) => {
        //console.log(result);
        if (result.status===200) {
          navigate("/Payment");
        } else {
          alert("Problem in Connection to DB");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }
    
 


    return (
        <div>

   <div className='order-container'>
        <h2>Shopping Cart</h2> <br />
        <span className='cart-items'>Home / Shopping Cart / Checkout</span>
        </div>
       
        <div className='line'>
        <div className='order-page'>
        <form className='order-form' >
            <label for="fname">Full Name*</label><br />
            <input type="text" id="fname" name="fname" placeholder='Enter your full name' value={fullname} required onChange={(e) => setFullname(e.target.value)} /><br />
            <label for="email">Email Address</label><br />
            <input type="email" id="email" name="email" placeholder='Johndeo@gmail.com' required  value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <label for="phone">Phone Number</label><br />
            <input type="text" id="phone" name="phone" placeholder='01068652041' required  value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /><br />
            <label for="address">Address</label><br />
            <input type="text" id="address" name="address" placeholder='Obour City' required value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            <label for="city">City</label><br />
            <input type="text" id="city" name="city" placeholder='Obour' required  value={city} onChange={(e) => setCity(e.target.value)} /><br />
            <label for="zip">Zip Code</label><br />
            <input type="text" id="zip" name="zip" placeholder='18845' required value={zipcode} onChange={(e) => setZipcode(e.target.value)} /><br />
            <label for="country">Country</label><br />
            <input type="text" id="country" name="country" placeholder='Egypt' required  value={country} onChange={(e)=>setCountry(e.target.value)}/><br />
            <label for="delivery-adress">Delivery Address</label><br />
              <div className="billing-options">
              <label
        className={`option ${selected === "same" ? "selected" : ""}`}
        onClick={() => setSelected("same")}
      >
        <input
          type="radio"
          name="billing"
          value="same"
          checked={selected === "same"}
          onChange={() => setSelected("same")}
         
        />
        <span className="custom-radio"></span>
        <span className="text">Same as shipping address</span>
      </label>
        <label
        className={`option ${selected === "different" ? "selected" : ""}`}
        onClick={() => setSelected("different")}
        >
        <input

            type="radio"
            name="billing"
            value="different"
            checked={selected === "different"}
            onChange={() => setSelected("different")}
          />
          <span className="custom-radio"></span>
          <span className="text">Use a different billing address</span>
        </label>
        <br />
</div>
         
        </form>
        </div>

   <div className="order-summary">
      
        <h3>Order Summary</h3>
        <p>Items <span>9</span></p>
        <p>Sub Total <span>$300</span></p>
        <p>Shipping <span>$0.00</span></p>
        <p>Taxes <span>$0.00</span></p>
        <p>Coupon Discount <span>-$100</span></p>

        <hr />
        
        <p className="total">Total <span>$200</span></p>
      
           
            <button className="checkout-btn" onClick={proceddpayment}>Proceed to Payment</button>
           
      </div>
           </div>
            <Shipping></Shipping>
            <Subscribe></Subscribe>

        </div>
    );
 
}
export default Order;