import { Router } from "express";
import { loginUser, registerUser , logoutUser} from "../controller/auth.controller.js";

const router = Router();

router.post("/user/register",registerUser);
router.post("/user/login",loginUser);
router.get("/user/logout",logoutUser);

export {router };