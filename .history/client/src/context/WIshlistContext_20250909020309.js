import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({
    items: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:3000/wishlist";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    
    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log("✅ Wishlist fetched:", res.data);
        setWishlist({ items: res.data.productsId || [] });
      })
      .catch((err) => {
        console.error("Failed to load wishlist:", err.response?.data || err);
        setError("Failed to load wishlist");
      });
  }, []);

  const addToWishlist = async (productId) => {
    try {
     const res = await axios.post(`${API_URL}/add`, {
        productsId: [productId],
      });

      console.log("Added to wishlist:", res.data);
      setWishlist({ items: res.data.Wishlist.productsId });
    } catch (err) {
      console.error(
        "Add to wishlist failed:",
        err.response?.data || err.message
      );
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      console.log("Removing from wishlist:", productId);

      const res = await axios.delete(
        `${API_URL}/remove/${userId}/${productId}`
      );

      console.log(" Removed from wishlist:", res.data);
      setWishlist({ items: res.data.New_Wishlist.productsId });
    } catch (err) {
      console.error(
        " Remove from wishlist failed:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        loading,
        error,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
