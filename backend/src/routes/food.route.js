import { Router } from "express";
import multer from "multer";
import authFoodPartnerMiddleware from "../../middleware/auth.middleware.js";
import createFood from "../controller/food.controller.js";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// 👇 This must be in this exact order
router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFood);

export default router;
