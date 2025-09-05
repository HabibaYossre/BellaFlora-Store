import express from "express";
import * as orderController from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, orderController.createOrder);
router.get("/", authMiddleware, orderController.getUserOrders);
//router.put("/:orderId/payment", authMiddleware, orderController.updatePaymentStatus);
//router.put("/:orderId/status", authMiddleware, orderController.updateOrderStatus);

export default router;
