import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";


//import productRoutes from "./routes/productRoutes.js";
//import cartRoutes from "./routes/cartRoutes.js";
//import orderRoutes from "./routes/orderRoutes.js";
//import userRoutes from "./routes/userRoutes.js";
//import { errorHandler } from "./middleware/errorMiddleware.js";


// Load .env variables
dotenv.config();
// Connect Database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
// Routes
app.use("/auth", authRoutes);

/*app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
*/
// Error Handler
//app.use(errorHandler);

import Productrouter from "./routes/productRoutes.js"; // ◀️ استخدم import
app.use('/product',Productrouter)
import wishListRoute from "./routes/wishlistRoutes.js"
app.use("/wishlist",wishListRoute)

// app.listen(port,()=>{
//     console.log("server Running on http://localhost "+port)
// })




const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
