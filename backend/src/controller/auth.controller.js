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


const registerFoodParnter = async (req, res) => {
    
   const {Name, Email, Password} = req.body;

   const isAccountAlreadyExist = foodPartnerModel.findOne({Email});

   if(isAccountAlreadyExist){
    res.status(400).json({message:" Account already exist"})
   }

   const hashedPassword = await bcrypt.hash(Password,10);

   const foodPartner = await foodPartnerModel.create({
    Name,
    Email,
    Password:hashPassword
   })

   const token = jwt.sign({
    id:foodPartner._id,
   }, process.env.JWT_SECRET)

   res.cookie("token", token); //it will send token to client side and store token in browser cookies

   res.status(200).json({
    message:" Food Partner register successfully",
    foodPartner:{
        _id :foodPartner._id,
        email: foodPartner.Email,
        name: foodPartner.Name
    }
   })
}

const loginFoodPartner = async (req, res) => {

    const {Email , Password } = req.body;
    const foodPartner = foodPartnerModel.findOne({Email})

    if(!foodPartner){
        return res.status(400).json({
            message:" Invalid user name or password"
        })
    }
    const isPasswordValid = await bcrypt.compare(Password , foodPartner.Password);

    if(!isPasswordValid){
        return res.status(400).json({ message:" Invalid user name or Password"})
    }

    const token = jwt.sign({ 
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
    message:" Food Partner register successfully",
    foodPartner:{
        _id :foodPartner._id,
        email: foodPartner.Email,
        name: foodPartner.Name
    }
   })


}

const logoutFoodPartner = (req , res) =>{
    res.clearCookie("token");
    res.status(200).json({message: " Food partner logout sucessfully"});
}



 export { registerUser, loginUser , logoutUser,loginFoodPartner, registerFoodParnter, logoutFoodPartner };