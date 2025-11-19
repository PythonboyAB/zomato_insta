import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const UserRegister = () => {
    const navigate =useNavigate();

    const handleSubmit= async(e)=>{
      e.preventDefault();
      const firstName = e.target.firstName.value;
      console.log(firstName);
      const lastName = e.target.lastName.value;
      const email = e.target.email.value;
      const password = e.target.password.value; 

     const response= await axios.post("http://localhost:3000/api/auth/user/register",{
        fullName:firstName + " " + lastName,
        email,
        password
      },{
        withCredentials:true
      })

      console.log(response.data)
      navigate("/user/login")

    }

  return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center ">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl px-8 py-5 shadow-2xl border border-white/5">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center">
          Create your account
        </h2>
        <p className="text-center text-gray-400 text-sm mt-1">
          Join to explore and enjoy delicious meals
        </p>

        {/* Switch links */}
        <p className="text-center text-sm text-gray-400 mt-2">
          Switch:{" "}
          <Link to="/food-partner/register" className="text-blue-400 hover:underline cursor-pointer">Food Partner</Link>
         
          
      
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4"  onSubmit={handleSubmit}>

          {/* First Name and last name */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-gray-300 text-sm">FIRST NAME </label>
              <input
                type="text"
                placeholder="jane"
                name='firstName'
                className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-1/2">
              <label className="text-gray-300 text-sm">LAST NAME</label>
              <input
                type="text"
                placeholder="doe"
                name='lastName'
                className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">EMAIL</label>
            <input
              type="email"
              name='email'
              placeholder="user@example.com"
              className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">PASSWORD</label>
            <input
              type="password"
              name='password'
              placeholder="Create password"
              className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Sign Up
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/user/login" className="text-blue-400 hover:underline cursor-pointer">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default UserRegister