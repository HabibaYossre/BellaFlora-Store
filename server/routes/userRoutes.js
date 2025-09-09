import express from "express"
import controller from "../controllers/userController.js"
import authMiddleware from "../middleware/authMiddleware.js"
const router=express.Router()
router.put("/update",authMiddleware,controller.updateUser)
router.get("/getById",authMiddleware,controller.getUser)
export default router