import React, { useContext } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

function Dashboard() {
  const { products, deleteProduct, editProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleAddFlower = (e) => {
    e.preventDefault();
    navigate("/Admin"); 
  };

  return (
    <div className="dashboard">
      <main className="main-content">
        <header className="header">
          <h3 className="hh">Welcome in Admin Dashboard</h3>
          <button className="logout-btn">Logout</button>
        </header>

        {/* Stats Cards */}
        <section className="cards">
          <div className="card-d">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="card-d">
            <h3>Total Flowers</h3>
            <p>{products.length}</p>
          </div>
          <div className="card-d">
            <h3>Uploads Today</h3>
            <p>30</p>
          </div>
          <div className="card-d">
            <h3>Most Popular Flower</h3>
            <p>Tulip</p>
          </div>
        </section>

        {/* زرار إضافة منتج */}
        <div className="buttons">
          <button className="add-flower" onClick={handleAddFlower}>
            Add Flower
          </button>
        </div>

        {/* Products in Cards */}
        <section className="product-list">
          <h3>Products</h3>
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            <div className="product-grid">
              {products.map((product) => (
                <div key={product._id} className="product-card">
                  <img
                    src={product.images} 
                    alt={product.name}
                  />
                  <h4>{product.name}</h4>
                  <p>Price: {product.price} EGP</p>
                  <p>Size: {product.size}</p>
                  <div className="product-actions">
                    <button
                      className="remove-btn"
                      onClick={() => deleteProduct(product._id)}
                    >
                      🗑 Remove
                    </button>
                    <button
                      className="update-btn"
                      onClick={() =>
                        editProduct(product._id, {
                          ...product,
                          name: product.name + " (Updated)",
                        })
                      }
                    >
                      ✏ Update
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
