import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/wishlist`, {
        withCredentials: true,
      });

      if (res.data.success) {
        const items = res.data.Wishlist?.productsId || [];
        // Normalize populated products
        const normalized = items.map((product) => ({
          productId: product._id,
          product,
          addedAt: product.createdAt || new Date().toISOString(),
        }));
        setWishlist(normalized);
      }
    } catch (err) {
      console.error("Fetch wishlist error:", err);
      setError("Failed to load wishlist");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add product to wishlist
  const addToWishlist = async (productId) => {
    try {
      setError(null);

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/wishlist/add`,
        { productId },
        { withCredentials: true }
      );

      if (res.data.success) {
        const items = res.data.Wishlist?.productsId || [];
        const normalized = items.map((product) => ({
          productId: product._id,
          product,
          addedAt: product.createdAt || new Date().toISOString(),
        }));
        setWishlist(normalized);
      }
    } catch (err) {
      console.error("❌ Add to wishlist error:", err);
      setError("Failed to add product to wishlist");
    }
  };

  // ✅ Remove product from wishlist
  const removeFromWishlist = async (productId) => {
    try {
      setError(null);

      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/wishlist/remove/${productId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        const items = res.data.Wishlist?.productsId || [];
        const normalized = items.map((product) => ({
          productId: product._id,
          product,
          addedAt: product.createdAt || new Date().toISOString(),
        }));
        setWishlist(normalized);
      }
    } catch (err) {
      console.error("❌ Remove from wishlist error:", err);
      setError("Failed to remove product from wishlist");
    }
  };


const clearWishlist = async () => {
  try {
    setError(null);

    const res = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/wishlist/clear`,
      { withCredentials: true }
    );

    if (res.data.success) {
    
      setWishlist([]);
    }
  } catch (err) {
    console.error("❌ Clear wishlist error:", err);
    setError("Failed to clear wishlist");
  }
};


  // Load wishlist on mount
  useEffect(() => {
    fetchWishlist();
  }, []);

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.productId === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        error,
        fetchWishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,   // 👈 expose it here
      }}
    >
      {children}
    </WishlistContext.Provider>
  );

};
