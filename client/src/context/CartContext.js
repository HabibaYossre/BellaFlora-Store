import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // ✅ Always ensure product has a unique id
    const safeId = product._id || product.id || Date.now().toString();

    setCart((prev) => {
      const exist = prev.find((item) => item._id === safeId);
      if (exist) {
        return prev.map((item) =>
          item._id === safeId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, _id: safeId, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, qty: Math.max(item.qty + amount, 1) }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
