import React, { useContext, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

function Dashboard() {
  const { products, deleteProduct, editProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleAddFlower = (e) => {
    e.preventDefault();
    navigate("/Admin"); // صفحة إضافة منتج جديد
  };

  const handleSave = () => {
    editProduct(editingProduct._id, formData); // تحديث المنتج في الـ Context
    setShowPopup(false);
    setEditingProduct(null);
  };

  return (
    <div className="dashboard">
      <main className="main-content">
        <header className="header">
          <h3 className="hh">Welcome in Admin Dashboard</h3>
          <div className="buttons">
            <button className="add-flower" onClick={handleAddFlower}>
              Add Flower
            </button>
            <button className="logout-btn">Logout</button>
          </div>
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

        {/* Products in Cards */}
        <section className="product-list">
          <h3>Products</h3>
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            <div className="product-grid">
              {products.map((product) => (
                <div key={product._id} className="product-card">
                  <img src={product.images} alt={product.name} />
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
                      onClick={() => {
                        setEditingProduct(product);
                        setFormData({ ...product });
                        setShowPopup(true);
                      }}
                    >
                      ✏ Update
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Popup Form */}
        {showPopup && editingProduct && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>Edit Product</h3>
              <label>
                Name:
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </label>
              <label>
                Size:
                <input
                  type="text"
                  value={formData.size}
                  onChange={(e) =>
                    setFormData({ ...formData, size: e.target.value })
                  }
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  value={formData.images}
                  onChange={(e) =>
                    setFormData({ ...formData, images: e.target.value })
                  }
                />
              </label>

              <div className="popup-buttons">
                <button onClick={handleSave}>💾 Save</button>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    setEditingProduct(null);
                  }}
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
