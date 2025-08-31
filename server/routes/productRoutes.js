import express from "express";
import controller from "../controllers/productController.js"
const router = express.Router();
router.get("/all",controller.displayAll)//done
router.get("/search/:name",controller.searchByName)//done
router.get("/filter/category/:category",controller.filterByCategory)//done
router.get("/filter/color/:color",controller.filterByColor)//done
router.get("/sort",controller.sortByPrice)//done
router.post("/add",controller.addNewProduct)//done
router.put("/update/:id",controller.updateProduct)//done
router.delete("/delete/:id",controller.deleteProduct)//done
export default router;


