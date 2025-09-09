import expres from "express";
import controller from "../controllers/wishlistController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = expres.Router();

router.get("/", authMiddleware, controller.getWishlist);
router.post("/add", authMiddleware, controller.addToWishlist);
router.delete("/remove/:productId",authMiddleware,controller.removeFromWishlist);
//router.put("/move/:productId", authMiddleware, controller.moveProductToCart);
router.delete("/clear", authMiddleware, controller.clearWishlist);

export default router;
