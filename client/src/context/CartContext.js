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

  const API_URL = "http://localhost:3000/cart"; // 👈 adjust backend port

  // Helper to get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // ✅ Load cart from backend when user logs in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get(API_URL, getAuthHeaders())
      .then((res) => {
        console.log("✅ Cart API response:", res.data);
        setCart(res.data.cart || res.data); // handle both response shapes
      })
      .catch((err) =>
        console.error("❌ Failed to load cart:", err.response?.data || err)
      );
  }, []);

  // ✅ Add product to cart
 const addToCart = async (product) => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId"); // 👈 now works

    if (!token) return;

    const res = await axios.post(
      `${API_URL}/add`,
      { productId: product._id, quantity: 1, userId }, // pass userId if backend expects it
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setCart(res.data.cart);
  } catch (err) {
    setError("Failed to add item");
    console.error("Add to cart error:", err.response?.data || err.message);
  } finally {
    setLoading(false);
  }
};


  // ✅ Remove product
  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`${API_URL}/remove`, {
        ...getAuthHeaders(),
        data: { productId },
      });
      console.log("🗑️ Cart after remove:", res.data);
      setCart(res.data.cart || res.data);
    } catch (err) {
      console.error("❌ Remove from cart failed:", err.response?.data || err);
    }
  };

  // ✅ Update qty
  const updateQty = async (productId, quantity) => {
    try {
      const res = await axios.put(
        `${API_URL}/update`,
        { productId, quantity },
        getAuthHeaders()
      );
      console.log("🔄 Cart after update:", res.data);
      setCart(res.data.cart || res.data);
    } catch (err) {
      console.error("❌ Update qty failed:", err.response?.data || err);
    }
  };

  // ✅ Clear cart
  const clearCart = async () => {
    try {
      const res = await axios.delete(`${API_URL}/clear`, getAuthHeaders());
      console.log("🧹 Cart after clear:", res.data);
      setCart(res.data.cart || res.data);
    } catch (err) {
      console.error("❌ Clear cart failed:", err.response?.data || err);
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

