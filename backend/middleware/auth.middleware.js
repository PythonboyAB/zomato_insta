import jwt, { decode } from "jsonwebtoken";
import foodPartnerModel from "../src/models/foodPartner.model.js";
import userModel  from "../src/models/user.model.js";



async function authFoodPartnerMiddleware(req, res, next) {
    
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: " Please login first"})
    }

     try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const foodPartner = await foodPartnerModel.findById(decoded.id);
        
        req.foodPartner = foodPartner;
        next();

     } catch (error) {
        return res.status(401).json({message:" invalid token"})
     }


}




async function authUserMiddleware(req, res, next){
   
   const token = req.cookies.token;

   if(!token){ 
      return res.status(401).json({
         message:" please login first"
      })   }

      try {

          const decoded = jwt.verify(token,process.env.JWT_SECRET);
          const user = await userModel.findById(decoded.id)
          req.user=user
          next()


      } catch (error) {
        return res.status(401).json({ message: " invalid token"})
      }
}


export { authFoodPartnerMiddleware, authUserMiddleware };