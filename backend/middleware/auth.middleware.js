import jwt from "jsonwebtoken";
import foodPartnerModel from "../src/models/foodPartner.model.js";


async function authFoodPartnerMiddleware(req, res, next) {
    
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: " Please login first"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const foodPartner = await foodPartnerModel.findById(decoded.id);
        console.log("Decoded:", decoded);
        console.log("Found Partner:", foodPartner);
        req.foodPartner = foodPartner

        next();
    } catch (error) {
        return res.status(401).json({ message: " Invalid token"})
    }


}


export default authFoodPartnerMiddleware;