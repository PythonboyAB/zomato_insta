import { Router } from "express";
import { registerUser } from "../controller/auth.controller.js";

const router = Router();

router.post("/user/register",registerUser)

export {router };