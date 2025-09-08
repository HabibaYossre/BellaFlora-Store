import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import Recommeneded from "../recommended/Recommended";
import "../allProducts/Allproducts.css";
import Sidebar from "../sidebar/Sidebar";
import Card from "../ui/Card";
import Products from '../products/Products'

function Allproducts() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [allProducts, setAllProducts] = useState([]);   // state for products
  const [loading, setLoading] = useState(true);         // loading state
  const [error, setError] = useState(null);             // error state

  // ---------- fetch products from API ----------
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/product/all"); 
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        console.log(res);
        const data = await res.json();
       
        console.log("API Response:", data); 
        setAllProducts(data.data || []); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  // ---------- search ----------
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  // ---------- filter ----------
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  // ---------- recommended ----------
  const handleRecommendedBtns = (e) => {
    setSelectedFilter(e.target.value);
  };

  // ---------- filtering function ----------
  function filteringProducts(allProducts, selectedFilter, searchWords) {
    let filteredProducts = Array.isArray(allProducts) ? allProducts : [];

    if (searchWords) {
      filteredProducts = filteredProducts.filter((productData) =>
        productData.name.toLowerCase().includes(searchWords.toLowerCase())
      );
    }

    if (selectedFilter) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, material, price, name }) => {
          if (selectedFilter === "0-50") return price <= 50;
          if (selectedFilter === "50-100") return price >= 50 && price <= 100;
          if (selectedFilter === "100+") return price > 100;

          return (
            category === selectedFilter ||
            color === selectedFilter ||
            material === selectedFilter ||
            price.toString() === selectedFilter ||
            name === selectedFilter
          );
        }
      );
    }

    return filteredProducts.map(
      ({ _id, name, description, price, images, ratings }) => (
     <Card
  key={_id}
  _id={_id}          // ✅ زودي دي
  img={images?.[0]}
  title={name}
  description={description}
  price={price}
  rating={
    ratings?.length > 0
      ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
      : 0
  }
/>

      )
    );
  }

  // -------reset filters----------
  const handleResetFilters = () => {
    setSelectedFilter(null);
    setSearchQuery("");
  };

  const result = filteringProducts(allProducts, selectedFilter, searchQuery);
 
  return (
    <div className="products-container">
      <div className="left-column">
        <Sidebar handleFilterChange={handleFilterChange}
         handleResetFilters={handleResetFilters} />
      </div>
      <div className="right-column">
        <div className="top-row">
          <Search
            searchQuery={searchQuery}
            handleSearchInput={handleSearchInput}
          />
        </div>
        <div className="mid-row">
          <Recommeneded handleRecommendedBtns={handleRecommendedBtns} />
        </div>
        <div className="bottom-row">
          {loading && <p>Loading products...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!loading && !error && <Products result={result} />}
        </div>
      </div>
    </div>

  );
}

export default Allproducts;
