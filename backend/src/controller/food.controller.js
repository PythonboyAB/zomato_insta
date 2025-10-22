import foodModel from "../models/food.model.js";

async function createFood(req, res) {
    console.log(req.foodPartner);
    res.send("created the food item");
}


export default createFood;