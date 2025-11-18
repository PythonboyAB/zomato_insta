import React from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'


const FoodPartnerRegister = () => {

    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
      e.preventDefault()
      const Name = e.target.businessName.value;
      const ContactName = e.target.contact.value;
      const Phone = e.target.phone.value;
      const Email = e.target.email.value;
      const Address = e.target.address.value;
      const Password = e.target.password.value;

      const response = await axios.post("http://localhost:3000/api/auth/food-partner/register",{
        Name,
        ContactName,
        Phone,
        Email,
        Address,
        Password
      })

      console.log(response.data);
      navigate("/food-partner/login")
      

    }



  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center ">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl px-8 py-5 shadow-2xl border border-white/5">

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center">
          Partner sign up
        </h2>
        <p className="text-center text-gray-400 text-sm mt-1">
          Grow your business with our platform.
        </p>

        {/* Switch links */}
        <p className="text-center text-sm text-gray-400 mt-2">
          Switch:{" "}
           <Link to="/user/register" className="text-blue-400 hover:underline cursor-pointer">User</Link>
         
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

          {/* Business Name */}
          <div>
            <label className="text-gray-300 text-sm">BUSINESS NAME</label>
            <input
              type="text"
              name='businessName'
              placeholder="Tasty Bites"
              className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact + Phone */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-gray-300 text-sm">CONTACT NAME</label>
              <input
                type="text"
                name='contact'
                placeholder="Jane Doe"
                className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-1/2">
              <label className="text-gray-300 text-sm">PHONE</label>
              <input
                type="text"
                name='phone'
                placeholder="+91 000000000"
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
              placeholder="business@example.com"
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

          {/* Address */}
          <div>
            <label className="text-gray-300 text-sm">ADDRESS</label>
            <input
              type="text"
              name='address'
              placeholder="123 Market Street"
              className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Full address helps customers find you faster.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Create Partner Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already a partner?{" "}
          <Link to='/food-partner/login'className="text-blue-400 hover:underline cursor-pointer">Sign in</Link>       
        </p>
      </div>
    </div>
  )
}

export default FoodPartnerRegister