import expres from "express"
import controller from "../controllers/wishlistController.js"
const router =expres.Router()
router.post("/add/:userId",controller.AddProduct)
router.delete("/remove/:userId/:productId",controller.removeFromeWishlist)
router.put("/move/:userId",controller.moveProductToCart)
export default router