import React from 'react'
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import FoodPartnerRegister from '../pages/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/FoodPartnerLogin';

 const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<h1>HOME Route</h1>}></Route>
            <Route path='/user/register' element={<FoodPartnerRegister/>}></Route>
            <Route path='/user/login' element={<FoodPartnerLogin/>}></Route>
            <Route path='/food-partner/register ' element={<h1>food-partner register </h1>}></Route>
            <Route path='/food-partner/login' element={<h1>food partner login</h1>}></Route>
        </Routes>
    </Router>

)
}

export default  AppRoutes;