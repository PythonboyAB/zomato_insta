import foodModel from "../models/food.model.js";
import uploadFile from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

async function createFood(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUploadResult = await uploadFile(req.file.buffer, uuid());

    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: fileUploadResult.url,
      foodPartner: req.foodPartner._id,
      
    });
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);   
    res.status(201).json({
      message: "Food created successfully",
      food: foodItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating food", error: error.message });
  }
}

export default createFood;
