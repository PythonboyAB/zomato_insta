import mongoose from "mongoose";

const foodPartnerSchema = new mongoose.Schema({
    Name :{
        type: String,
        required: true
    }, 
    ContactName:{
        type:String,
        required: true
    },
    Phone:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },   
    Email : {
        type : String,
        required: true,
        unique: true
    },
    Password : {
        type:String,
        required: true  
    }

})

const foodPartnerModel = mongoose.model("foodPartner", foodPartnerSchema);

export default foodPartnerModel;