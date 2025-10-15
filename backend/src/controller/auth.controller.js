import userModel from "../models/user.model.js";
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import foodPartnerModel from "../models/foodPartner.model.js";

async function registerUser (req, res) {

    const {User , Email , Password} = req.body;
    const isUserAlreadyExists = await userModel.findOne({Email})

    if(isUserAlreadyExists){
        return res.status(400).json({ message:" email id already exists"});
    }

    const hashPassword = await bcrypt.hash(Password, 10);

    const user = await userModel.create({
        User,
        Email,
        Password:hashPassword 
    })

    const token = jwt.sign({
        id: user._id,

    }, process.env.JWT_SECRET)

    res.cookie("token", token)
    res.status(201).json({message: "User registerd successfully",
        user: {
            _id: user._id,
            email: user.Email,
            fullName: user.fullName
        }
    })
    }

    async function loginUser(req, res) {
        
        const { Email , Password } = req.body;

        const user = await  userModel.findOne({ Email});

        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }


        const isPasswordValid = await bcrypt.compare(Password , user.Password);

        if ( !isPasswordValid){
            return res.status(400).json({message:" Invalid email or password"});
        }
        
        const token = jwt.sign({
            id: user._id,
        },  process.env.JWT_SECRET );

        res.cookie("token", token);

        res.status(200).json({ message: "User registerd successfully",
        user: {
            _id: user._id,
            email: user.Email,
            fullName: user.fullName
        }

        });

    }

    const logoutUser = (req, res) =>{
        res.clearCookie("token");
        res.status(200).json({ message: " user logout successfully"});
    }


const registerFoodParnter = (req, res) => {
   const {Name , Email, Password} = req.body;

   const isAccountAlreadyExist = foodPartnerModel.findOne({Email});

   if(isAccountAlreadyExist){
    res.status(400).json({message:" Account already exist"})
   }
}



export { registerUser, loginUser , logoutUser };