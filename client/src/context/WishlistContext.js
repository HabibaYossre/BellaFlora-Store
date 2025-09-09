import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const API_URL = "http://localhost:3000/wishlist";
  axios.defaults.withCredentials = true;

  // Check if user is authenticated
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setIsAuthenticated(!!token);
  // }, []);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      try {
        const parsed = JSON.parse(savedWishlist);
        console.log("💖 Loaded wishlist from localStorage:", parsed);
        setWishlist(parsed);
      } catch (err) {
        console.error("❌ Error parsing saved wishlist:", err);
        localStorage.removeItem("wishlist");
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      console.log("💾 Wishlist updated & saved to localStorage:", wishlist);
    }
  }, [wishlist]);

  // Load wishlist from backend if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const fetchWishlist = async () => {
        try {
          setLoading(true);
          console.log("📡 Fetching wishlist from backend...");
          const res = await axios.get(API_URL);
          console.log("✅ Wishlist fetched from backend:", res.data);

          setWishlist(res.data.wishlist || []);
        } catch (err) {
          console.error(
            "❌ Failed to load wishlist from backend:",
            err.response?.data || err
          );
          // keep local wishlist if backend fails
        } finally {
          setLoading(false);
        }
      };

      fetchWishlist();
    }
  }, [isAuthenticated]);

  // Add to wishlist
  const addToWishlist = async ({ productId, product }) => {

    const userId = localStorage.getItem("userId");

 if (userId) {
  console.log("User ID:", userId);
} else {
  console.log("No user found");
}

    try {
      setLoading(true);
      setError(null);

      if (!productId) {
        throw new Error("Product ID is required");
      }

      console.log("💖 Adding product to wishlist:", { productId, product });

      if (isAuthenticated) {
        // Add to backend
        const res = await axios.post(`${API_URL}/add/remove/${userId}/${productId}`, { productId },{userId});
        console.log("✅ Added to wishlist (backend):", res.data);

        setWishlist(res.data.wishlist || []);
      } else {
        // Add to local wishlist
        setWishlist((prev) => {
          const exists = prev.find((item) => item.productId === productId);
          if (exists) return prev;
          return [
            ...prev,
            {
              productId,
              product: product || {},
              addedAt: new Date().toISOString(),
            },
          ];
        });
      }
    } catch (err) {
      console.error(
        "❌ Add to wishlist error:",
        err.response?.data || err.message
      );
      setError("Failed to add to wishlist");
    } finally {
      setLoading(false);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = async (productId) => {
    try {
      setLoading(true);
      setError(null);
      console.log("🗑️ Removing product from wishlist:", productId);

      if (isAuthenticated) {
        const res = await axios.delete(`${API_URL}/remove`, {
          data: { productId },
        });
        console.log("✅ Removed from wishlist (backend):", res.data);

        setWishlist(res.data.wishlist || []);
      } else {
        setWishlist((prev) =>
          prev.filter((item) => item.productId !== productId)
        );
      }
    } catch (err) {
      console.error(
        "❌ Remove from wishlist failed:",
        err.response?.data || err
      );
      setError("Failed to remove item from wishlist");
    } finally {
      setLoading(false);
    }
  };

  // Clear wishlist
  const clearWishlist = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("🧹 Clearing entire wishlist...");

      if (isAuthenticated) {
        const res = await axios.delete(`${API_URL}/clear`);
        console.log("✅ Wishlist cleared (backend):", res.data);

        setWishlist([]);
      } else {
        setWishlist([]);
      }
    } catch (err) {
      console.error("❌ Clear wishlist failed:", err.response?.data || err);
      setError("Failed to clear wishlist");
    } finally {
      setLoading(false);
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.productId === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
        loading,
        error,
        isAuthenticated,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
