// ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "./All.css";




axios.defaults.withCredentials = true;

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/product/all`);
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      console.log("API Response:", data);
      setProducts(data.data || []); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchProducts();
  }, []);


  const editProduct = async (productId, updatedData) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/product/${productId}`,
        updatedData,
        { withCredentials: true }
      );
      setProducts((prev) =>
        prev.map((p) => (p._id === productId ? data : p))
      );
    } catch (err) {
      console.error("Edit Failed", err);
    }
  };

  
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/product/${productId}`, {
        withCredentials: true,
      });
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (err) {
      console.error("Remove Failed", err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        fetchProducts,
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
