import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import Recommeneded from "../recommended/Recommended";
import "../allProducts/Allproducts.css";
import Sidebar from "../sidebar/Sidebar";
import Products from "../products/Products";

function Allproducts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: null,
    price: null,
    color: null,
    recommended: null
  });
  const [allProducts, setAllProducts] = useState([]); // state for products
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  // ---------- fetch products from API ----------
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/product/all`);
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
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: prev[name] === value ? null : value // Toggle filter
    }));
  };

  // ---------- recommended ----------
  const handleRecommendedBtns = (e) => {
    const value = e.target.value;
    setFilters(prev => ({
      ...prev,
      recommended: prev.recommended === value ? null : value // Toggle recommended filter
    }));
  };

  // ---------- filtering function ----------
  function filteringProducts(allProducts, filters, searchWords) {
    let filteredProducts = Array.isArray(allProducts) ? allProducts : [];

    // Search filter
    if (searchWords) {
      filteredProducts = filteredProducts.filter((productData) =>
        productData.name.toLowerCase().includes(searchWords.toLowerCase())
      );
    }

    // Apply all active filters
    Object.entries(filters).forEach(([filterType, filterValue]) => {
      if (filterValue) {
        filteredProducts = filteredProducts.filter((product) => {
          switch (filterType) {
            case 'category':
              return product.category === filterValue;
            case 'color':
              return product.color === filterValue;
            case 'price':
              if (filterValue === "0-50") return product.price <= 50;
              if (filterValue === "50-100") return product.price >= 50 && product.price <= 100;
              if (filterValue === "100+") return product.price > 100;
              return true;
            case 'recommended':
              return product.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                     product.category?.toLowerCase().includes(filterValue.toLowerCase());
            default:
              return true;
          }
        });
      }
    });

    return filteredProducts;
  }

  // -------reset filters----------
  const handleResetFilters = () => {
    setFilters({
      category: null,
      price: null,
      color: null,
      recommended: null
    });
    setSearchQuery("");
  };

  const result = filteringProducts(allProducts, filters, searchQuery);

  return (
    <div className="products-container">
      <div className="left-column">
        <Sidebar
          handleFilterChange={handleFilterChange}
          handleResetFilters={handleResetFilters}
          filters={filters}
        />
      </div>
      <div className="right-column">
        <div className="top-row">
          <Search
            searchQuery={searchQuery}
            handleSearchInput={handleSearchInput}
          />
        </div>
        <div className="mid-row">
          <Recommeneded 
            handleRecommendedBtns={handleRecommendedBtns}
            selectedRecommended={filters.recommended}
          />
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
