import React, { useState } from "react";
import "./KnowType.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function KnowType() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState(null);

  const flowerEmojis = {
    daisy: "🌼",
    dandelion: "🌿",
    rose: "🌹",
    sunflower: "🌻",
    tulip: "🌷",
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
      setResult(null); // reset old result if new file chosen
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/flower/predict`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult({
        flower: res.data.flower_type,
        confidence: (res.data.confidence * 100).toFixed(1),
      });

      setErrorMessage("");
    } catch (err) {
      console.error("❌ API error:", err.response?.data || err.message);
      setErrorMessage("Flower detection failed");
    }
  };

  return (
    <div className="knowtype-container">
      <h2 className="title">🌸 Upload a Flower Image 🌸</h2>

      <form className="upload-form" onSubmit={handleSubmit}>
        <label htmlFor="fileInput" className="file-label">Choose Image</label>
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

        <button type="submit" className="upload-btn">Detect Flower Type</button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}

      {result && (
        <div className="result-card">
          <h3>✨ Flower Identified ✨</h3>
          <p><strong>Type:</strong> {flowerEmojis[result.flower] || "🌸"} {result.flower}</p>
          <p><strong>Confidence:</strong> {result.confidence}%</p>
          <button 
            className="shop-btn" 
            onClick={() => navigate(`/product/filter/category/${result.flower}`)}
          >
            🌸 Shop {result.flower}
          </button>
        </div>
      )}
    </div>
  );
}

export default KnowType;