import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";


async function registerUser (req, res) {

    const {User , Email , Password} = req.body;
    const isUserAlreadyExists = await userModel.findOne({Email})

    if(isUserAlreadyExists){
        return res.status(400).json({ message:" User email already exists"});
    }

    const hashPassword = await bcrypt.hash(Password, 10);

    const user = await userModel.create({
        User,
        Email,
        Password:hashPassword 
    })

    const token = jwt.sign({
        id: user._id,

    },"f6e3663c7ac32c10f286d2004b61a246")

    res.cookie("token", token)
    res.status(201).json({message: "User registerd successfully",
        user: {
            _id: user._id,
            email: user.Email,
            fullName: user.fullName
        }
    })
    }

export { registerUser};