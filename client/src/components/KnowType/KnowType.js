import React, { useState } from "react";
import "./KnowType.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function KnowType() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        const res =  axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/product/add`, 
           preview,
           { withCredentials: true }
        );

        if (res.status === 200) {
          alert("✅ Flower Detected successfully!");
          navigate("/product/all");
        }
      } catch (err) {
        console.error(err.response?.data || err.message);
        setErrorMessage(err.response?.data?.message || "Adding flower failed");
      }
    
  

    alert("Image uploaded successfully! 🚀 (You can now send it to backend)");
  };

  return (
    <div className="knowtype-container">
      <h2 className="title">🌸 Upload a Flower Image</h2>

      <form className="upload-form" onSubmit={handleSubmit}>
        <label htmlFor="fileInput" className="file-label">
          Choose Image
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />

        {preview && (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="preview-img" />
          </div>
        )}

        <button type="submit" className="upload-btn">
          Detect Flower Type
        </button>
      </form>
    </div>
  );
}

export default KnowType;
