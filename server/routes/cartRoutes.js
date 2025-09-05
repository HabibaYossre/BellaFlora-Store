import express from "express";
import * as cartController from "../controllers/cartController.js";
import authMiddleware  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, cartController.addToCart);
router.put("/update", authMiddleware, cartController.updateQuantity);
router.delete("/remove", authMiddleware, cartController.removeFromCart);
router.delete("/clear", authMiddleware, cartController.clearCart);
router.get("/", authMiddleware, cartController.getCart);

export default router;
