import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const wishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({
    items: [],
  });
  const [loading, setLoading] = useState(false);
  const [error , setError]=useState(null);
  const API_url="http://localhost:3000/wishlist";
  axios.defaults.withCredentials = true;


useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    axios
      .get(`${API_URL}/${userId}`)
      .then((res) => {
        console.log("✅ Wishlist fetched:", res.data);
        setWishlist({ items: res.data.productsId || [] });
      })
      .catch((err) => {
        console.error("❌ Failed to load wishlist:", err.response?.data || err);
        setError("Failed to load wishlist");
      });
};
