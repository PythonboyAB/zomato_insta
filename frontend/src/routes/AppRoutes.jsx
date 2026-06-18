import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodPartnerSignup from "../components/FoodPartnerSignup";
import UserSignUp from "../components/UserSignUp";
import Home from "../pages/general/Home";
import UserLogin from "../components/UserLogin";
import CreateFoodPartner from "../pages/food-partner/CreateFood";
import FoodPartnerLogin from "../components/FoodPartnerLogin";
import Profile from "../pages/general/Profile";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-partner/signup" element={<FoodPartnerSignup />} />
        <Route path="/user/signup" element={<UserSignUp />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/create-food" element={<CreateFoodPartner />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
