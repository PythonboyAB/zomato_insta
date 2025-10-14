import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


function connectDb() {
    mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("DB connected sucessfully");
    })
    .catch((err)=>{
        console.log(`getting error in ${err}`);
    })
}

export default connectDb;