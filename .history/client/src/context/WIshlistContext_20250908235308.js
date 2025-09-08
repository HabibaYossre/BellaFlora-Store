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


  useEffect(()=>{
    const userId=localStorage.getItem("userId")
  })
};
