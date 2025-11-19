import React from 'react'
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import FoodPartnerRegister from '../pages/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/FoodPartnerLogin';
import UserRegister from '../pages/UserRegister';
import Home from '../general/Home';
import UserLogin from '../pages/UserLogin';
import CreateFood from '../food-partner/CreateFood';

 const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/user/register' element={<UserRegister/>}></Route>
            <Route path='/user/login' element={<UserLogin/>}></Route>
            <Route path='/food-partner/register' element={<FoodPartnerRegister/>}></Route>
            <Route path='/food-partner/login' element={<FoodPartnerLogin/>}></Route>
            <Route path='/create-food' element={<CreateFood/>}></Route>
        </Routes>
    </Router>

)
}

export default  AppRoutes;