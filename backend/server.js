import app from "./src/app.js";
import connectDb from "./src/db/db.js";
import  userRouter from "./src/routes/auth.route.js"
import dotenv from "dotenv";



dotenv.config();


connectDb(); // connecting mongodb


app.use(userRouter);



app.listen(3000, (req , res) => {
    console.log("app is running port 3000 ")
});