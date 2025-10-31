import express from "express";
import createFood from "../controller/food.controller.js"
import authFoodPartnerMiddleware from "../../middleware/auth.middleware.js";
import multer from "multer";


const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post('/',authFoodPartnerMiddleware,upload.single("video"), createFood)

export default router;