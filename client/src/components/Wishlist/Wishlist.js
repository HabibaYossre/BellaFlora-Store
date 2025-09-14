import React, { useContext } from "react";
import "./Wishlist.css";
import Subscribe from "../Subscribe/Subscribe";
import Shipping from "../Shipping/Shipping";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist, loading, error } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = async (item) => {
    try {
      await addToCart({
        productId: item.productId,
        quantity: 1,
        product: item.product,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddAllToCart = async () => {
    try {
      for (const item of wishlist) {
        await addToCart({
          productId: item.productId,
          quantity: 1,
          product: item.product,
        });
      }
    } catch (error) {
      console.error("Error adding all to cart:", error);
    }
  };

  if (loading) {
    return (
      <div className="wishlist-page">
        <div className="loading-container">
          <p>Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="cart-container">
        <h2>Wishlist</h2>
        <span className="cart-items">Home / Wishlist</span>

        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
          </div>
        )}

        <div className="cart-items">
          {wishlist.length === 0 ? (
            <div className="empty-wishlist">
              <p>Your wishlist is empty 💔</p>
              <button
                className="continue-shopping-btn"
                onClick={() => (window.location.href = "/product/all")}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="cart-header">
                <span>Product Details</span>
                <span>Price</span>
                <span>Date Added</span>
                <span>Stock Status</span>
             
              </div>

              {wishlist.map((item) => (
                <div className="cart-row" key={item.productId}>
                  <span
                    className="remove"
                    onClick={() => removeFromWishlist(item.productId)}
                  >
                    ✖
                  </span>
                  <img
                    src={
                      item.product.images?.[0] ||
                      item.product.img ||
                      "/placeholder.png"
                    }
                    alt={item.product.name || item.product.title}
                    className="cart-img"
                  />
                  <div className="cart-info">
                    <h4>{item.product.name || item.product.title}</h4>
                    <p>{item.product.description?.slice(0, 40)}...</p>
                  </div>
                  <span>${(item.product.price || 0).toFixed(2)}</span>
                  <span>{new Date(item.addedAt).toLocaleDateString()}</span>
                  
                  <span className="in-stock">In Stock</span>
                  {/* <button
                    className="add-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button> */}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {wishlist.length > 0 && (
        <div className="wishlist-actions">
          <div className="two">
            <span className="clear-wishlist" onClick={clearWishlist}>
              Clear Wishlist
            </span>
            <button className="add-to-cart-btn" onClick={handleAddAllToCart}>
              Add All to Cart
            </button>
          </div>
        </div>
      )}

      <Shipping />
      <Subscribe />
    </div>
  );
}

export default Wishlist;

