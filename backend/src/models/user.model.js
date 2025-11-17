import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
        // unique: true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String
    },
    
},
{
    timestamps: true
})

const userModel = mongoose.model("User", userSchema)

export default userModel;