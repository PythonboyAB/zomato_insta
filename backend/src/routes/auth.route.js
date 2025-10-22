import { Router } from "express";
import { loginUser, registerUser , logoutUser, loginFoodPartner, logoutFoodPartner, registerFoodParnter} from "../controller/auth.controller.js";

const router = Router();
// Users auth APIs 
router.post("/user/register",registerUser);
router.post("/user/login",loginUser);
router.get("/user/logout",logoutUser);



// foodpartner auth APIs
router.post("/food-partner/register", registerFoodParnter);
router.post("/food-partner/login", loginFoodPartner);
router.get("/food-partner/logout", logoutFoodPartner);


export default router;