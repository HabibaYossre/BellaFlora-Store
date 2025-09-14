import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    totalPrice: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/cart`;
  axios.defaults.withCredentials = true;

  // ✅ Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);


  const calculateTotals = useCallback((items) => {
    const subtotal = items.reduce((sum, item) => {
      const product = item.product || {};
      return sum + (product.price || 0) * (item.quantity || 0);
    }, 0);

    const TAX_RATE = 0.1;
    const SHIPPING_COST = subtotal > 0 ? 5 : 0;
    const tax = +(subtotal * TAX_RATE).toFixed(2);
    const shipping = SHIPPING_COST;
    const totalPrice = subtotal + tax + shipping;

    return { subtotal, tax, shipping, totalPrice };
  }, []);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCart(parsed);
      } catch {
        localStorage.removeItem("cart");
      }
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart && cart.items) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // ✅ Load cart from backend if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const fetchCart = async () => {
        try {
          setLoading(true);
          const res = await axios.get(API_URL);
          setCart(res.data.cart || res.data);
        } catch (err) {
          console.error("❌ Failed to load cart:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchCart();
    }
  }, [isAuthenticated]);

  // ✅ Add to cart
  const addToCart = async ({ productId, quantity = 1, product }) => {
    try {
      setLoading(true);
      if (isAuthenticated) {
        const res = await axios.post(`${API_URL}/add`, { productId, quantity });
        setCart(res.data.cart || res.data);
      } else {
        setCart((prev) => {
          const existing = prev.items.find((i) => i.productId === productId);
          let newItems;
          if (existing) {
            newItems = prev.items.map((i) =>
              i.productId === productId
                ? { ...i, quantity: i.quantity + quantity }
                : i
            );
          } else {
            newItems = [...prev.items, { productId, quantity, product }];
          }
          return { items: newItems, ...calculateTotals(newItems) };
        });
      }
    } catch (err) {
      setError("Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Remove from cart
  const removeFromCart = async (productId) => {
    try {
      setLoading(true);
      if (isAuthenticated) {
        const res = await axios.delete(`${API_URL}/remove`, {
          data: { productId },
        });
        setCart(res.data.cart || res.data);
      } else {
        setCart((prev) => {
          const newItems = prev.items.filter((i) => i.productId !== productId);
          return { items: newItems, ...calculateTotals(newItems) };
        });
      }
    } catch (err) {
      setError("Failed to remove item");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update quantity
  const updateQty = async (productId, quantity) => {
    try {
      setLoading(true);
      if (quantity < 1) return removeFromCart(productId);

      if (isAuthenticated) {
        const res = await axios.put(`${API_URL}/update`, {
          productId,
          quantity,
        });
        setCart(res.data.cart || res.data);
      } else {
        setCart((prev) => {
          const newItems = prev.items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          );
          return { items: newItems, ...calculateTotals(newItems) };
        });
      }
    } catch (err) {
      setError("Failed to update quantity");
    } finally {
      setLoading(false);
    }
  };

 
  const clearCart = async () => {
    try {
      setLoading(true);
      if (isAuthenticated) {
        const res = await axios.delete(`${API_URL}/clear`);
        setCart(res.data.cart || res.data);
      } else {
        setCart({ items: [], subtotal: 0, tax: 0, shipping: 0, totalPrice: 0 });
      }
    } catch (err) {
      setError("Failed to clear cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        loading,
        error,
        isAuthenticated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
