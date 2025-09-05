import express from "express"
import controller from "../controllers/reviewController.js"
const router=express.Router()
router.post("/add/:userId/:productId",controller.addReview)
router.delete("/delete/:userId/:productId",controller.deleteReviewFromProduct)
router.delete("/delete/:reviewId",controller.deleteReview)
router.get("/agg/:userId/:productId",controller.aggregateReview)
export default router