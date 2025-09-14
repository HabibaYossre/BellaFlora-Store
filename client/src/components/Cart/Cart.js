import React, { useContext, useState } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQty,
    clearCart,
    loading,
    error,
    isAuthenticated,
    coupon,
    applyCoupon,
  } = useContext(CartContext);

  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();

  const gotoorder = () => {
    navigate("/order");
  };

  if (loading) {
    return (
      <div className="cart-page">
        <div className="car-container">
          <h2>Shopping Cart</h2>
          <span className="cart-items">Home / Shopping Cart</span>
        </div>
        <div className="loading-container">
          <p>Loading your cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="car-container">
        <h2>Shopping Cart</h2>
        <span className="cart-items">Home / Shopping Cart</span>
      </div>

      {error && (
        <div className="error-message">
          <p>❌ {error}</p>
        </div>
      )}

      <div className="cart-container">
        <div className="cart-items">
          {cart.items.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty 🛒</p>
              <button
                className="continue-shopping-btn"
                onClick={() => navigate("/product/all")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.items.map((item, idx) => {
              const product = item.product || {};
              const productId = item.productId || product._id;

              return (
                <div className="cart-row" key={productId || idx}>
                  <span
                    className="remove"
                    onClick={() => removeFromCart(productId)}
                    title="Remove item"
                  >
                    ✖
                  </span>

                  <img
                    src={product.images?.[0] || product.img || "/placeholder.png"}
                    alt={product.name || product.title || "Product"}
                    className="cart-img"
                  />

                  <div className="cart-info">
                    <h4>{product.name || product.title || "Unnamed Product"}</h4>
                    <p>{product.description?.slice(0, 40) || ""}...</p>
                  </div>

                  <span className="price">${(product.price || 0).toFixed(2)}</span>

                  <div className="qty-controls">
                    <button
                      onClick={() => updateQty(productId, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      title="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(productId, item.quantity + 1)}
                      title="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <span className="subtotal">
                    ${((product.price || 0) * item.quantity).toFixed(2)}
                  </span>
                </div>
              );
            })
          )}
          {cart.items.length > 0 && (
            <button
              className="clear-btn"
              onClick={() => {
                clearCart();
              }}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.items.length > 0 && (

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Items</span>
              <span>{cart.items.reduce((sum, i) => sum + i.quantity, 0)}</span>
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>${(cart.subtotal || 0).toFixed(2)}</span>
            </div>

            {coupon && coupon.discount > 0 && (
              <div className="summary-line">
                <span>Discount ({coupon.code})</span>
                <span>- ${(cart.subtotal * coupon.discount).toFixed(2)}</span>
              </div>
            )}

            <div className="summary-line">
              <span>Shipping</span>
              <span>${(cart.shipping || 0).toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span>Taxes</span>
              <span>${(cart.tax || 0).toFixed(2)}</span>
            </div>

            <hr />

            <div className="summary-line total">
              <span>Total</span>
              <span>${(cart.totalPrice || 0).toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={gotoorder}>
              Proceed to Checkout
            </button>
          </div>

        )}
      </div>

      <div className="subscrib-form">
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button type="submit" onClick={() => applyCoupon(couponCode)}>
          Apply Coupon
        </button>
      </div>

      <Shipping />
      <Subscribe />
    </div>
  );
};

export default Cart;
