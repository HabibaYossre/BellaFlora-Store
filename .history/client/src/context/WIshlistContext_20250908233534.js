import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const wishListContext = createContext();
export const wishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState({
    items: [],
  });

} 
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    totalPrice: 0,
  });
}