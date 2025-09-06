import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js"
import reviewRouter from "./routes/reviewRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

// Load .env variables
dotenv.config();
// Connect Database
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use('/product',productRoutes)
app.use("/wishlist",wishlistRoutes)
app.use("/review",reviewRouter)
app.use("/order", orderRoutes);


//app.use("/users", userRoutes);


// Error Handler
//app.use(errorHandler);




const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*

✅ Flow:

When a customer checks out → POST /orders → creates an order.

Users can see their orders → GET /orders.

*/