import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const wishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({
    items: [],
  });
  const [loading, setLoading] = useState(false);
  const [error , setError]=use
};
