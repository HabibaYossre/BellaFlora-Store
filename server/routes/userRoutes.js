import express from "express"
import controller from "../controllers/userController.js"
const router=express.Router()
router.put("/update/:userId",controller.updateUser)
export default router