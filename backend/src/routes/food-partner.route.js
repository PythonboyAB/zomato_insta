import express from "express";
import {
  authFoodPartnerMiddleware,
  authUserMiddleware,
} from "../../middleware/auth.middleware.js";
import getFoodPartnerById from "../controller/food-partner.controller.js";

const router = express.Router();

// Get /api/food-partner/:id
router.get("/food-partner/:id", authFoodPartnerMiddleware, getFoodPartnerById);

export default router;
