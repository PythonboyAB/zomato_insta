import foodModel from "../models/food.model.js";
import Like from "../models/likes.model.js";
import saveModel from "../models/save.model.js";
import { uploadFile } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

async function createFood(req, res) {
  const fileUploadResult = await uploadFile(req.file.buffer, uuid());

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id,
  });
  res.status(201).json({
    message: " food created successfully",
    food: foodItem,
  });
  // console.log(fileUploadResult);

  res.send("food item created");
}

async function getFoodItems(req, res) {
  const foodItems = await foodModel.find({});
  res
    .status(201)
    .json({ message: " Food items fetched successfully", foodItems });
}

// food reel likes controller

async function likeFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;

  const isAlreadyLiked = await likeModel.findOne({
    user: user._id,
    food: foodId,
  });

  if (isAlreadyLiked) {
    await likedModel.deleteOne({
      user: req.user._id,
      food: foodId,
    });
    return res.status(200).json({ message: "food unliked successfully" });
  }
  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { likeCount: -1 },
  });

  const like = await likeModel.create({
    user: user._id,
    food: foodId,
  });
  await foodModel.findByIdAndUpdate(foodId, {
    $inc: { likeCount: 1 },
  });

  res.status(201).json({ message: "food liked successfully", like });
}

// Food reels save controllers
async function saveFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;

  const isAlreadySaved = await saveModel.findOne({
    user: user._id,
    food: foodId,
  });

  if (isAlreadySaved) {
    await saveModel.deleteOne({
      user: user._id,
      food: foodId,
    });

    return res.status(200).json({
      message: "food unsaved successfully",
    });
  }

  const save = await saveModel.create({
    user: user.id,
    food: foodId,
  });

  return res.status(201).json({ message: "food saved successfully", save });
}

export { createFood, getFoodItems, likeFood, saveFood };
