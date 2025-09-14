from fastapi import FastAPI, UploadFile, File
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import uvicorn
import io
from PIL import Image

# Load the model
model = load_model("my_model.keras")

# The same image size used in training
IMAGE_SIZE = 224

# Map of class indices (must match training order)
classes = {0: "Daisy", 1: "Dandelion", 2: "Rose", 3: "Sunflower", 4: "Tulip"}

# Initialize FastAPI
app = FastAPI(title="Flower Recognition API")

# Preprocess function
def preprocess_image(image: Image.Image):
    img = image.resize((IMAGE_SIZE, IMAGE_SIZE))
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # shape (1, 224, 224, 3)
    img_array = img_array / 255.0  # normalize
    return img_array

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Read image
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    
    # Preprocess
    img_array = preprocess_image(image)
    
    # Predict
    predictions = model.predict(img_array)
    predicted_class = np.argmax(predictions, axis=1)[0]
    confidence = float(np.max(predictions))
    
    return {
        "flower_type": classes[predicted_class],
        "confidence": confidence
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
