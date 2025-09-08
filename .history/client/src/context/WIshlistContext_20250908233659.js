import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const wishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({
    items: [],
  });

} 
export const WishlistProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    
  });
}