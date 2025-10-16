import { Router } from "express";
import { loginUser, registerUser , logoutUser, loginFoodPartner, logoutFoodPartner, registerFoodParnter} from "../controller/auth.controller.js";

const router = Router();

router.post("/user/register",registerUser);
router.post("/user/login",loginUser);
router.get("/user/logout",logoutUser);

router.post("/food-partner/register", registerFoodParnter);
router.post("/food-partner/login", loginFoodPartner);
router.get("/food-partner/logout", logoutFoodPartner);


export {router };