import React from 'react'
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"

 const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/user/register' element={<h1>User Register</h1>}></Route>
            <Route path='/user/login' element={<h1>User login</h1>}></Route>
            <Route path='/food-partner/register ' element={<h1>food-partner register </h1>}></Route>
            <Route path='/food-partner/login' element={<h1>food partner login</h1>}></Route>
        </Routes>
    </Router>

)
}

export default  AppRoutes;