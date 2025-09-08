// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const stored = localStorage.getItem("cart");
//     return stored ? JSON.parse(stored) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     // ✅ Always ensure product has a unique id
//     const safeId = product._id || product.id || Date.now().toString();

//     setCart((prev) => {
//       const exist = prev.find((item) => item._id === safeId);
//       if (exist) {
//         return prev.map((item) =>
//           item._id === safeId ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//       return [...prev, { ...product, _id: safeId, qty: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item._id !== id));
//   };

//   const updateQty = (id, amount) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item._id === id
//           ? { ...item, qty: Math.max(item.qty + amount, 1) }
//           : item
//       )
//     );
//   };

//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // ✅ load cart from backend when user logs in
//   useEffect(() => {
//     const userId = localStorage.getItem("userId"); // or from auth context
//     if (userId) {
//       axios.get("http://localhost:3000/cart").then((result) => setCart(result.data));//axios.get(`/api/cart/${userId}`)
//     }
//   }, []);

//   // ✅ add product to cart
//   const addToCart = async (product) => {
//     const userId = localStorage.getItem("userId");
//     const res = await axios.post("http://localhost:3000/cart/add", { userId, product });
//     setCart(res.data); // backend returns updated cart
//   };

//   // ✅ remove product
//   const removeFromCart = async (itemId) => {
//     const userId = localStorage.getItem("userId");
//     const res = await axios.delete("http://localhost:3000/cart/remove", { data: { userId } });//`/api/cart/${itemId}`
//     setCart(res.data);
//   };

//   // ✅ update qty
//   const updateQty = async (itemId, amount) => {
//     const userId = localStorage.getItem("userId");
//     const res = await axios.put("http://localhost:3000/", { userId, amount });//`/api/cart/${itemId}`
//     setCart(res.data);
//   };

//   // ✅ clear cart
//   const clearCart = async () => {
//     const userId = localStorage.getItem("userId");
//     const res = await axios.delete("http://localhost:3000/cart/clear");//`/api/cart/${userId}`
//     setCart(res.data);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };





// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({
//     items: [],
//     subtotal: 0,
//     tax: 0,
//     shipping: 0,
//     totalPrice: 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // ⚡ Backend API
//   const API_URL = "http://localhost:3000/cart";

//   // ✅ Always send cookies
//   axios.defaults.withCredentials = true;

//   // ✅ Load from localStorage first
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       console.log("📦 Loaded cart from localStorage:", JSON.parse(savedCart));
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // ✅ Save cart to localStorage whenever it changes
//   useEffect(() => {
//     if (cart && cart.items) {
//       localStorage.setItem("cart", JSON.stringify(cart));
//       console.log("💾 Cart updated & saved to localStorage:", cart);
//     }
//   }, [cart]);

//   // ✅ Load cart from backend on mount
//   useEffect(() => {
//     console.log("📡 Fetching cart from backend (cookies auth)...");
//     axios
//       .get(API_URL)
//       .then((res) => {
//         console.log("✅ Cart fetched from backend:", res.data);
//         setCart(res.data.cart || res.data);
//       })
//       .catch((err) => {
//         console.error("❌ Failed to load cart:", err.response?.data || err);
//         setError("Failed to load cart");
//       });
//   }, []);

//   // ✅ Add to cart
// const addToCart = async (product) => {
//   try {
//     console.log("➕ Adding product to cart:", product);

//     const res = await axios.post(
//       "http://localhost:3000/cart/add",
//       {
//            productId: product.productId, quantity: 1 },
//   { withCredentials: true }
//       //   items: [
//       //     {
//       //       productId: product.productId,
//       //       quantity: product.quantity,
//       //     },
//       //   ],
//       // },
//       // { withCredentials: true }
//     );

//     console.log("✅ Added to cart:", res.data);
//     setCart(res.data);
//     localStorage.setItem("cart", JSON.stringify(res.data));
//   } catch (error) {
//     console.error("❌ Add to cart error:", error.response?.data || error.message);
//   }
// };



//   // ✅ Remove from cart
//   const removeFromCart = async (productId) => {
//     try {
//       console.log("🗑️ Removing product:", productId);

//       const res = await axios.delete(`${API_URL}/remove`, {
//         data: { productId },
//       });

//       console.log("✅ Remove response:", res.data);
//       setCart(res.data.cart || res.data);
//     } catch (err) {
//       console.error("❌ Remove from cart failed:", err.response?.data || err);
//       setError("Failed to remove item");
//     }
//   };

//   // ✅ Update quantity
//   const updateQty = async (productId, quantity) => {
//     try {
//       console.log(`🔄 Updating qty → ${productId} : ${quantity}`);

//       const res = await axios.put(`${API_URL}/update`, {
//         productId,
//         quantity,
//       });

//       console.log("✅ Update qty response:", res.data);
//       setCart(res.data.cart || res.data);
//     } catch (err) {
//       console.error("❌ Update qty failed:", err.response?.data || err);
//       setError("Failed to update quantity");
//     }
//   };

//   // ✅ Clear cart
//   const clearCart = async () => {
//     try {
//       console.log("🧹 Clearing entire cart...");

//       const res = await axios.delete(`${API_URL}/clear`);

//       console.log("✅ Cart cleared:", res.data);
//       setCart(res.data.cart || res.data);
//     } catch (err) {
//       console.error("❌ Clear cart failed:", err.response?.data || err);
//       setError("Failed to clear cart");
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         updateQty,
//         clearCart,
//         loading,
//         error,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState, useEffect } from "react";
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

  const API_URL = "http://localhost:3000/cart";
  axios.defaults.withCredentials = true;

  // 🛠 helper → normalize backend response
  const normalizeCart = (data) => {
    if (!data) return cart;
    // لو الباك رجع {message, cart}
    const realCart = data.cart || data;
    return {
      items: realCart.items || [],
      subtotal: realCart.subtotal || 0,
      tax: realCart.tax || 0,
      shipping: realCart.shipping || 0,
      totalPrice: realCart.totalPrice || 0,
    };
  };

  // ✅ Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      console.log("📦 Loaded cart from localStorage:", parsed);
      setCart(normalizeCart(parsed));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    if (cart && cart.items) {
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("💾 Cart updated & saved to localStorage:", cart);
    }
  }, [cart]);

  // ✅ Load cart from backend
  useEffect(() => {
    console.log("📡 Fetching cart from backend...");
    axios
      .get(API_URL)
      .then((res) => {
        console.log("✅ Cart fetched:", res.data);
        setCart(normalizeCart(res.data));
      })
      .catch((err) => {
        console.error("❌ Failed to load cart:", err.response?.data || err);
        setError("Failed to load cart");
      });
  }, []);

  // ✅ Add to cart
  const addToCart = async (product) => {
    try {
      console.log("➕ Adding product to cart:", product);

      const res = await axios.post(`${API_URL}/add`, {
        productId: product.productId,
        quantity: 1,
      });

      console.log("✅ Added to cart:", res.data);
      setCart(normalizeCart(res.data));
    } catch (error) {
      console.error("❌ Add to cart error:", error.response?.data || error.message);
    }
  };

  // ✅ Remove from cart
  const removeFromCart = async (productId) => {
    try {
      console.log("🗑️ Removing product:", productId);
      const res = await axios.delete(`${API_URL}/remove`, { data: { productId } });
      console.log("✅ Remove response:", res.data);
      setCart(normalizeCart(res.data));
    } catch (err) {
      console.error("❌ Remove from cart failed:", err.response?.data || err);
      setError("Failed to remove item");
    }
  };


  const updateQty = async (productId, quantity) => {
    try {
      console.log(`🔄 Updating qty → ${productId} : ${quantity}`);
      const res = await axios.put(`${API_URL}/update`, { productId, quantity });
      console.log("✅ Update qty response:", res.data);
      setCart(normalizeCart(res.data));
    } catch (err) {
      console.error("❌ Update qty failed:", err.response?.data || err);
      setError("Failed to update quantity");
    }
  };

  // ✅ Clear cart
  const clearCart = async () => {
    try {
      console.log("🧹 Clearing entire cart...");
      const res = await axios.delete(`${API_URL}/clear`);
      console.log("✅ Cart cleared:", res.data);
      setCart(normalizeCart(res.data));
    } catch (err) {
      console.error("❌ Clear cart failed:", err.response?.data || err);
      setError("Failed to clear cart");
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

