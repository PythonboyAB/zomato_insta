import React from 'react'
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import FoodPartnerRegister from '../pages/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/FoodPartnerLogin';
import UserRegister from '../pages/UserRegister';

 const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<h1>HOME Route</h1>}></Route>
            <Route path='/user/register' element={<UserRegister/>}></Route>
            <Route path='/user/login' element={<h1>User Login</h1>}></Route>
            <Route path='/food-partner/register' element={<FoodPartnerRegister/>}></Route>
            <Route path='/food-partner/login' element={<FoodPartnerLogin/>}></Route>
        </Routes>
    </Router>

)
}

export default  AppRoutes;