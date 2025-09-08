import expres from "express"
import controller from "../controllers/wishlistController.js"
const router =expres.Router()
router.post("/add", authMiddleware, controller.AddProduct);
router.delete("/remove/:productId", authMiddleware, controller.removeFromeWishlist);
router.put("/move/:productId", authMiddleware, controller.moveProductToCart);
export default router

