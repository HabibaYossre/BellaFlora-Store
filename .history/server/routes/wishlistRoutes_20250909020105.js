import expres from "express"
import controller from "../controllers/wishlistController.js"
const router =expres.Router()
router.post("/add", authMiddleware, controller.AddProduct);

// Remove product from wishlist
router.delete("/remove/:productId", authMiddleware, controller.removeFromeWishlist);

// Move product from wishlist to cart
router.put("/move/:productId", authMiddleware, controller.moveProductToCart);
export default router

