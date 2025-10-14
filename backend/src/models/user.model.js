import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    User: {
        type: String,
        unique: true
    },
    Email: {
        type : String,
        required : true,
        unique : true
    },
    Password: {
        type : String
    },
    
},
{
    timestamps: true
})

const userModel = mongoose.model("User", userSchema)

export default userModel;