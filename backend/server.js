import app from "./src/app.js";
import connectDb from "./src/db/db.js";
import { router} from "./src/routes/auth.route.js"
import dotenv from "dotenv";



dotenv.config();

connectDb(); // connecting mongodb


app.use(router);



app.listen(4000, (req , res) => {
    console.log("app is running port 4000 ")
});