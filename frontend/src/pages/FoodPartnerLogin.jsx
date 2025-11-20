import axios from 'axios';
import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const Email =e.target.email.value;
      const Password = e.target.password.value;
      
      const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
        Email,
        Password
      },{
        withCredentials:true
      })
      console.log(response.data);
      navigate("/")
    }


  return (
    <div className='min-h-screen bg-[#0f172a] flex items-center justify-center'>
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl px-8 py-5 shadow-2xl border border-white/5">
      {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center">
          Partner Login
        </h2>
        <p className='text-center text-gray-400 text-sm mt-1'>Access your dashboard and manage your order</p>
       <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="text"
              name='email'
              placeholder="bussiness@gmail.com"
              className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="text"
              name='password'
              placeholder="Password"
              className="w-full mt-1 px-3 py-2 bg-[#334155] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
          >
            Login
          </button>
          </form>
          {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already a partner?{" "}
            <Link to='/food-partner/register' className="text-blue-400 hover:underline cursor-pointer" > Sign Up</Link>
           
         
        </p>
      </div>
    </div>
  )
}

export default FoodPartnerLogin