import { Router } from "express";
import authFoodPartnerMiddleware from "../../middleware/auth.middleware.js";
import createFood from "../controller/food.controller.js";

const router = Router();

router.post("/", authFoodPartnerMiddleware, createFood);


export default router;