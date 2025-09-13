import React, { useState } from "react";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name:"",
    type:"",
    description:"",
    category:"",
    size:"",
    color:"",
    material:"",
    price:"",
    stock:"",
    images:"",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    return newErrors;
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/product/add`, 
          formData,
          { withCredentials: true }
        );

        if (res.status === 201) {
          alert("✅ Flower added successfully!");
          navigate("/product/all");
        }
      } catch (err) {
        console.error(err.response?.data || err.message);
        setErrorMessage(err.response?.data?.message || "Adding flower failed");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="hj">🌸 Add New Flower</h2>

      {errorMessage && <p className="error">{errorMessage}</p>}

      <form className="flower-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div className="form-group" key={field}>
            <label>
              {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) =>
                str.toUpperCase()
              )}
            </label>
            <input
              type="text" 
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <span className="error">{errors[field]}</span>}
          </div>
        ))}

        <button type="submit" className="submit-btn">
          Add Flower
        </button>
      </form>

      {/* ✅ Preview image if URL entered */}
      {formData.flowerImage && (
        <div className="preview">
          <h3>Preview:</h3>
          <img
            src={formData.flowerImage}
            alt="Flower Preview"
            style={{ maxWidth: "200px", marginTop: "10px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default Admin;
