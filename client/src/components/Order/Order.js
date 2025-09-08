// import React from 'react';
// import './Order.css';
// import Header from '../Header/Header';
// import Subscribe from '../Subscribe/Subscribe';
// import Footer from '../Footer/Footer';
// import Shipping from '../Shipping/Shipping';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { CartContext } from "../../context/CartContext";
// import { useContext } from "react";
// import { useState } from 'react';
// import { Home } from 'lucide-react';




// function Order() {
//    const { cart} = useContext(CartContext);
//       const [selected, setSelected] = useState("same");
//       const [fullname,setFullname]=useState("")
//       const [email,setEmail]=useState("")
//       const [phonenumber,setPhonenumber]=useState("")
//       const [address,setAddress]=useState("")
//       const [city,setCity]=useState("")
//       const [zipcode,setZipcode]=useState("")
//       const [country,setCountry]=useState("")
//       const [deliveryaddress,setDeliveryaddress]=useState("")
//   const [errors, setErrors] = useState({}); 


//      const navigate = useNavigate();
//        const validateForm = () => {
//     let newErrors = {};
//     if (!fullname.trim()) newErrors.fullname = "Full name is required";
//     if (!email.trim()) newErrors.email = "Email is required";
//     if (!phonenumber.trim()) newErrors.phonenumber = "Phone number is required";
//     if (!address.trim()) newErrors.address = "Address is required";
//     if (!city.trim()) newErrors.city = "City is required";
//     if (!zipcode.trim()) newErrors.zipcode = "Zip code is required";
//     if (!country.trim()) newErrors.country = "Country is required";
//     return newErrors;
//   };


//   const proceddpayment = (e) => {
//     e.preventDefault();
//      const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return; 
//     }

    
//     axios
//       .post("http://localhost:3000/order/", { fullname,phonenumber,address,city,zipcode,country, withCredentials: true,})
//       .then((result) => {
//         //console.log(result);
//         if (result.status===200) {
//           navigate("/Payment");
//         } else {
//           alert("Problem in Connection to DB");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Something went wrong");
//       });
//   }
    
 


//     return (
//         <div>

//    <div className='order-container'>
//         <h2>Shopping Cart</h2> <br />
//         <span className='cart-items'>Home / Shopping Cart / Checkout</span>
//         </div>
       
//         <div className='line'>
//         <div className='order-page'>
//         <form className='order-form' >
//             <label for="fname">Full Name*</label><br />
//             <input type="text" id="fname" name="fname" placeholder='Enter your full name' value={fullname} required onChange={(e) => setFullname(e.target.value)} />
//              {errors.fullname && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.fullname}</p>} <br />
//             <label for="email">Email Address</label><br />
//             <input type="email" id="email" name="email" placeholder='Johndeo@gmail.com' required  value={email} onChange={(e) => setEmail(e.target.value)} /><br />
//              {errors.email && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.email}</p>}<br />
//             <label for="phone">Phone Number</label><br />
//             <input type="text" id="phone" name="phone" placeholder='01068652041' required  value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /><br />
//              {errors.phonenumber && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.phonenumber}</p>}<br />
//             <label for="address">Address</label><br />
//             <input type="text" id="address" name="address" placeholder='Obour City' required value={address} onChange={(e) => setAddress(e.target.value)} /><br />
//              {errors.address && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.address}</p>}<br />

//             <label for="city">City</label><br />
//             <input type="text" id="city" name="city" placeholder='Obour' required  value={city} onChange={(e) => setCity(e.target.value)} /><br />
//             {errors.city && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.city}</p>}<br />
//             <label for="zip">Zip Code</label><br />
//             <input type="text" id="zip" name="zip" placeholder='18845' required value={zipcode} onChange={(e) => setZipcode(e.target.value)} /><br />
//              {errors.zipcode && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.zipcode}</p>}<br />

//             <label for="country">Country</label><br />
//             <input type="text" id="country" name="country" placeholder='Egypt' required  value={country} onChange={(e)=>setCountry(e.target.value)}/><br />
//              {errors.country && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.country}</p>}<br />
//             <label for="delivery-adress">Delivery Address</label><br />
//               <div className="billing-options">
//               <label
//         className={`option ${selected === "same" ? "selected" : ""}`}
//         onClick={() => setSelected("same")}
//       >
//         <input
//           type="radio"
//           name="billing"
//           value="same"
//           checked={selected === "same"}
//           onChange={() => setSelected("same")}
         
//         />
//         <span className="custom-radio"></span>
//         <span className="text">Same as shipping address</span>
//       </label>
//         <label
//         className={`option ${selected === "different" ? "selected" : ""}`}
//         onClick={() => setSelected("different")}
//         >
//         <input

//             type="radio"
//             name="billing"
//             value="different"
//             checked={selected === "different"}
//             onChange={() => setSelected("different")}
//           />
//           <span className="custom-radio"></span>
//           <span className="text">Use a different billing address</span>
//         </label>
//         <br />
// </div>
         
//         </form>
//         </div>


//         <div className="order-summary">
//             <h3>Order Summary</h3>
//             <p>
//               Items{" "}
//               <span>
//                 {cart.items.reduce((sum, i) => sum + i.quantity, 0)}
//               </span>
//             </p>

//             <p>
//               Subtotal <span>${(cart.subtotal || 0).toFixed(2)}</span>
//             </p>
//             <p>
//               Shipping <span>${(cart.shipping || 0).toFixed(2)}</span>
//             </p>
//             <p>
//               Taxes <span>${(cart.tax || 0).toFixed(2)}</span>
//             </p>

//             <hr />

//             <p className="total">
//               Total <span>${(cart.totalPrice || 0).toFixed(2)}</span>
//             </p>

//             <button className="checkout-btn" onClick={proceddpayment} >
//               Proceed to Checkout
//             </button>
//             <br />
//           </div>
//            </div>
//             <Shipping></Shipping>
//             <Subscribe></Subscribe>

//         </div>
//     );
 
// }
// export default Order;
import React from 'react';
import './Order.css';
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Shipping from '../Shipping/Shipping';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useState } from 'react';
import { Home } from 'lucide-react';

function Order() {
  const { cart } = useContext(CartContext);
  const{productId}=useContext(CartContext);
  const{quantity}=useContext(CartContext);
  const{price}=useContext(CartContext);
  
  const [selected, setSelected] = useState("same");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [deliveryaddress, setDeliveryaddress] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};
    if (!fullname.trim()) newErrors.fullname = "Full name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!phonenumber.trim()) newErrors.phonenumber = "Phone number is required";
    if (!address.trim()) newErrors.address = "Address is required";
    if (!city.trim()) newErrors.city = "City is required";
    if (!zipcode.trim()) newErrors.zipcode = "Zip code is required";
    if (!country.trim()) newErrors.country = "Country is required";
    return newErrors;
  };

  const proceddpayment = (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

    const shippingAddresses = [
    {
      fullname,
      phonenumber,
      address,
      city,
      zipcode,
      country,
    },
  ];

   const items = [
    {
   productId,
    quantity,
    price
    },
  ];



  axios.post("http://localhost:3000/order/", {shippingAddresses,items },   { withCredentials: true })
    .then((result) => {
      if (result.status === 200) {
        navigate("/Payment");
      } else {
        alert("Problem in Connection to DB");
      }
    })
    .catch((err) => {
      console.error("❌ Error while ordering:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    });
};

  return (
    <div>
      <div className='order-container'>
        <h2>Shopping Cart</h2> <br />
        <span className='cart-items'>Home / Shopping Cart / Checkout</span>
      </div>

      <div className='line'>
        <div className='order-page'>
          <form className='order-form'>
            <label htmlFor="fname">Full Name*</label><br />
            <input type="text" id="fname" name="fname" placeholder='Enter your full name' value={fullname} required onChange={(e) => setFullname(e.target.value)} />
            {errors.fullname && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.fullname}</p>} <br />

            <label htmlFor="email">Email Address</label><br />
            <input type="email" id="email" name="email" placeholder='Johndeo@gmail.com' required value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            {errors.email && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.email}</p>}<br />

            <label htmlFor="phone">Phone Number</label><br />
            <input type="text" id="phone" name="phone" placeholder='01068652041' required value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} /><br />
            {errors.phonenumber && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.phonenumber}</p>}<br />

            <label htmlFor="address">Address</label><br />
            <input type="text" id="address" name="address" placeholder='Obour City' required value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            {errors.address && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.address}</p>}<br />

            <label htmlFor="city">City</label><br />
            <input type="text" id="city" name="city" placeholder='Obour' required value={city} onChange={(e) => setCity(e.target.value)} /><br />
            {errors.city && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.city}</p>}<br />

            <label htmlFor="zip">Zip Code</label><br />
            <input type="text" id="zip" name="zip" placeholder='18845' required value={zipcode} onChange={(e) => setZipcode(e.target.value)} /><br />
            {errors.zipcode && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.zipcode}</p>}<br />

            <label htmlFor="country">Country</label><br />
            <input type="text" id="country" name="country" placeholder='Egypt' required value={country} onChange={(e) => setCountry(e.target.value)} /><br />
            {errors.country && <p className="error" style={{ color: "red", marginTop: "10px" }}>{errors.country}</p>}<br />

            <label htmlFor="delivery-adress">Delivery Address</label><br />
            <div className="billing-options">
              <label className={`option ${selected === "same" ? "selected" : ""}`} onClick={() => setSelected("same")}>
                <input type="radio" name="billing" value="same" checked={selected === "same"} onChange={() => setSelected("same")} />
                <span className="custom-radio"></span>
                <span className="text">Same as shipping address</span>
              </label>

              <label className={`option ${selected === "different" ? "selected" : ""}`} onClick={() => setSelected("different")}>
                <input type="radio" name="billing" value="different" checked={selected === "different"} onChange={() => setSelected("different")} />
                <span className="custom-radio"></span>
                <span className="text">Use a different billing address</span>
              </label>
            </div>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>
            Items{" "}
            <span>
              {cart.items.reduce((sum, i) => sum + i.quantity, 0)}
            </span>
          </p>

          <p>
            Subtotal <span>${(cart.subtotal || 0).toFixed(2)}</span>
          </p>
          <p>
            Shipping <span>${(cart.shipping || 0).toFixed(2)}</span>
          </p>
          <p>
            Taxes <span>${(cart.tax || 0).toFixed(2)}</span>
          </p>

          <hr />

          <p className="total">
            Total <span>${(cart.totalPrice || 0).toFixed(2)}</span>
          </p>

          <button className="checkout-btn" onClick={proceddpayment}>
            Proceed to Checkout
          </button>
          <br />
        </div>
      </div>

      <Shipping />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Order;
