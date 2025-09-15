import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";

const router = express.Router();
const upload = multer();

// POST /flower/predict
router.post("/predict", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // forward the file to FastAPI
    const formData = new FormData();
    formData.append("file", req.file.buffer, req.file.originalname);

    const response = await axios.post("http://localhost:8000/predict"
, formData, {
      headers: formData.getHeaders(),
    });

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

export default router;
