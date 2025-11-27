import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.route.js";
import foodRouter from "./routes/food.route.js";
import cors from "cors";
import foodPartnerRoutes from "./routes/food-partner.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/food-profile", foodPartnerRoutes);

export default app;
