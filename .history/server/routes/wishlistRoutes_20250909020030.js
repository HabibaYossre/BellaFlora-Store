import expres from "express"
import controller from "../controllers/wishlistController.js"
const router =expres.Router()
router.post("/add/:userId",controller.AddProduct)
router.delete("/remove/:userId/:productId",controller.removeFromeWishlist)
router.put("/move/:userId",controller.moveProductToCart)
export default router

router.post("/add", authMiddleware, cartController.addToCart);
router.put("/update", authMiddleware, cartController.updateQuantity);
router.delete("/remove", authMiddleware, cartController.removeFromCart);
router.delete("/clear", authMiddleware, cartController.clearCart);
router.get("/", authMiddleware, cartController.getCart);
z