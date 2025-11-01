import foodModel from "../models/food.model.js";
import { uploadFile } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";



async function createFood(req, res) {
  

  const fileUploadResult = await uploadFile(req.file.buffer, uuid());

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id
    
  })
  res.status(201).json({
    message: " food created successfully",
    food: foodItem
    
  })
  // console.log(fileUploadResult);


  res.send("food item created");
}

async function getFoodItems(req, res){

  const foodItems =await foodModel.find({});
  res.status(201).json({message:" Food items fetched successfully", foodItems})

}

export { createFood, getFoodItems };
