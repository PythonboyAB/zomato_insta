import express from "express";
import { createFood, getFoodItems } from "../controller/food.controller.js"
import { authFoodPartnerMiddleware, authUserMiddleware } from "../../middleware/auth.middleware.js";
import multer from "multer";


const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
})


 // POST / api/ food / [ protected ]
router.post('/',authFoodPartnerMiddleware,upload.single("video"), createFood);

// GET / api/ food/ [ protected]
router.get("/", authUserMiddleware, getFoodItems)

export default router;