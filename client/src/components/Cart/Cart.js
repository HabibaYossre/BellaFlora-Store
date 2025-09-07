
// import React, { useContext } from "react";
// import "./Cart.css";
// import { CartContext } from "../../context/CartContext";
// import Shipping from "../Shipping/Shipping";
// import Subscribe from "../Subscribe/Subscribe";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, updateQty, clearCart } = useContext(CartContext);
//   const navigate=useNavigate();

//   const gotoorder=()=>{
//  navigate("/order");
//   }
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
   
//   );

//   return (
//     <div className="cart-page">
//       <div className="car-container">
//         <h2>Shopping Cart</h2>
//         <span className="cart-items">Home / Shopping Cart</span>
//       </div>

//       <div className="cart-container">
//         <div className="cart-items">
//           {cart.length === 0 ? (
//             <p>Your cart is empty 🛒</p>
//           ) : (
//             cart.map((item) => (
//               <div className="cart-row" key={item._id}>
      
//                 <span
//                   className="remove"
//                   onClick={() => removeFromCart(item._id)}
//                 >
//                   ✖
//                 </span>

               
//                 <img src={item.img} alt={item.title} className="cart-img" />

//                 <div className="cart-info">
//                   <h4>{item.title}</h4>
//                   <p>{item.description?.slice(0, 40)}...</p>
//                 </div>

              
//                 <span>${item.price.toFixed(2)}</span>

//                 <div className="qty-controls">
//                   <button onClick={() => updateQty(item._id, -1)}>−</button>
//                   <span>{item.qty}</span>
//                   <button onClick={() => updateQty(item._id, 1)}>+</button>
//                 </div>

           
//                 <span>${(item.price * item.qty).toFixed(2)}</span>
//               </div>
//             ))
//           )}
//           <button className="clear-btn" onClick={clearCart}>
//             Clear Cart
//           </button>
//         </div>
//           {/* order summary */}
//       {cart.length > 0 && (
//         <div className="order-summary">
//           <h3>Order Summary</h3>
//           <p>
//             Items <span>{cart.reduce((sum, i) => sum + i.qty, 0)}</span>
//           </p>
//           <p>
//             Subtotal <span>${totalPrice.toFixed(2)}</span>
//           </p>
//           <p>
//             Shipping <span>$00.00</span>
//           </p>
//           <p>
//             Taxes <span>$0.00</span>
//           </p>

//           <hr />

//           <p className="total">
//             Total <span>${totalPrice.toFixed(2)}</span>
//           </p>

//           <button className="checkout-btn" onClick={gotoorder}>Proceed to Checkout</button> <br />
         
//         </div>
//       )}
//       </div>
 
//       {/* coupon form */}
//       <div className="subscrib-form">
//         <input type="email" placeholder="Coupon Code" />
//         <button type="submit">Apply Coupon</button>
//       </div>

    

//       <Shipping />
//       <Subscribe />
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
  console.log("🛒 Cart state in Cart.js:", cart);

  const navigate = useNavigate();

  const gotoorder = () => {
    navigate("/order");
  };

  return (
    <div className="cart-page">
      <div className="car-container">
        <h2>Shopping Cart</h2>
        <span className="cart-items">Home / Shopping Cart</span>
      </div>


      <div className="cart-container">
        <div className="cart-items">
          {cart.items.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            cart.items.map((item, idx) => {
              const product = item.productId || {}; // ✅ safe access
              return (
                <div className="cart-row" key={product._id || idx}>
                  {/* remove */}
                  <span
                    className="remove"
                    onClick={() => removeFromCart(product._id)}
                  >
                    ✖
                  </span>

                  {/* product image */}
                  <img
                    src={product.img || "/placeholder.png"}
                    alt={product.title || "Product"}
                    className="cart-img"
                  />

                  {/* info */}
                  <div className="cart-info">
                    <h4>{product.title || "Untitled"}</h4>
                    <p>{product.description?.slice(0, 40) || ""}...</p>
                  </div>

                  {/* price */}
                  <span>${(product.price || 0).toFixed(2)}</span>

                  {/* qty controls */}
                  <div className="qty-controls">
                    <button
                      onClick={() => updateQty(product._id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQty(product._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* subtotal for this item */}
                  <span>
                    ${((product.price || 0) * item.quantity).toFixed(2)}
                  </span>
                </div>
              );
            })
          )}
          {cart.items.length > 0 && (
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          )}
        </div>

        {/* order summary */}
        {cart.items.length > 0 && (
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

            <button className="checkout-btn" onClick={gotoorder}>
              Proceed to Checkout
            </button>
            <br />
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
