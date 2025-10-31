import express from "express";
import cookieParser from "cookie-parser";
import userRouter  from "./routes/auth.route.js";
import foodRouter from "./routes/food.route.js";
import createFood from "./controller/food.controller.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth",userRouter);
app.use("/api/food", foodRouter);



export default app;