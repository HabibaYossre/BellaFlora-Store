// import React, { useContext } from "react";
// import "./Cart.css";
// import Header from "../Header/Header";
// import Subscribe from "../Subscribe/Subscribe";
// import Footer from "../Footer/Footer";
// import Shipping from "../Shipping/Shipping";
// import Order from "../Order/Order";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";

// const Cart = () => {
//   const navigate = useNavigate();

  
//   const { cart, removeFromCart, updateQty, clearCart } = useContext(CartContext);


//   const totalPrice = Array.isArray(cart)
//     ? cart.reduce((sum, item) => sum + item.price * item.qty, 0)
//     : 0;

//   const paymentprocee = () => {
//     navigate("/Order");
//   };

//   return (
//     <div>
//       {/* <Header /> */}

//       <div className="car-container">
//         <h2>Shopping Cart</h2> <br />
//         <span className="cart-items">Home / Shopping Cart</span>
//       </div>

//       <div className="cart-container">
//         <div className="cart-items">
//           {(!cart || cart.length === 0) ? (
//             <p>Your cart is empty</p>
//           ) : (
//             cart.map((item) => (
//               <div className="cart-row" key={item.id}>
//                 <span className="remove" onClick={() => removeFromCart(item.id)}>
//                   ✖
//                 </span>
//                 <img src={item.img} alt={item.name} className="cart-img" />
//                 <div className="cart-info">
//                   <h4>{item.name}</h4>
//                   <p>{item.type}</p>
//                 </div>
//                 <span>${item.price.toFixed(2)}</span>
//                 <div className="qty-controls">
//                   <button onClick={() => updateQty(item.id, -1)}>−</button>
//                   <span>{item.qty}</span>
//                   <button onClick={() => updateQty(item.id, 1)}>+</button>
//                 </div>
//                 <span>${(item.price * item.qty).toFixed(2)}</span>

//               </div>
              
//             ))
//           )}
//         </div>
//       </div>

//       <div className="subscrib-form">
//         <input type="email" placeholder="Coupon Code" />
//         <button type="submit">Apply Coupon</button>
//       </div>

//       {/* ✅ Order Summary */}
//       {cart && cart.length > 0 && (
//         <div className="order-summary">
//           <h3>Order Summary</h3>
//           <p>
//             Items <span>{cart.reduce((sum, i) => sum + i.qty, 0)}</span>
//           </p>
//           <p>
//             Sub Total <span>${totalPrice.toFixed(2)}</span>
//           </p>
//           <p>
//             Shipping <span>$0.00</span>
//           </p>
//           <p>
//             Taxes <span>$0.00</span>
//           </p>
//           <p>
//             Coupon Discount <span>-$0.00</span>
//           </p>
//           <hr />
//           <p className="total">
//             Total <span>${totalPrice.toFixed(2)}</span>
//           </p>
//           <button className="checkout-btn" onClick={paymentprocee}>
//             Proceed to Checkout
//           </button>
//         </div>
//       )}

//       <Shipping />
//       <Subscribe />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Cart;











import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQty, clearCart } = useContext(CartContext);
  const navigate=useNavigate();

  const gotoorder=()=>{
 navigate("/order");
  }
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
   
  );

  return (
    <div className="cart-page">
      <div className="car-container">
        <h2>Shopping Cart</h2>
        <span className="cart-items">Home / Shopping Cart</span>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div className="cart-row" key={item._id}>
      
                <span
                  className="remove"
                  onClick={() => removeFromCart(item._id)}
                >
                  ✖
                </span>

               
                <img src={item.img} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>{item.description?.slice(0, 40)}...</p>
                </div>

              
                <span>${item.price.toFixed(2)}</span>

                <div className="qty-controls">
                  <button onClick={() => updateQty(item._id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item._id, 1)}>+</button>
                </div>

           
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))
          )}
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
          {/* order summary */}
      {cart.length > 0 && (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>
            Items <span>{cart.reduce((sum, i) => sum + i.qty, 0)}</span>
          </p>
          <p>
            Subtotal <span>${totalPrice.toFixed(2)}</span>
          </p>
          <p>
            Shipping <span>$00.00</span>
          </p>
          <p>
            Taxes <span>$0.00</span>
          </p>

          <hr />

          <p className="total">
            Total <span>${totalPrice.toFixed(2)}</span>
          </p>

          <button className="checkout-btn" onClick={gotoorder}>Proceed to Checkout</button> <br />
         
        </div>
      )}
      </div>
 
      {/* coupon form */}
      <div className="subscrib-form">
        <input type="email" placeholder="Coupon Code" />
        <button type="submit">Apply Coupon</button>
      </div>

    

      <Shipping />
      <Subscribe />
    </div>
  );
};

export default Cart;

