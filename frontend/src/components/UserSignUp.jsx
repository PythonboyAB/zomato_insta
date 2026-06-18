import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName: e.target.firstName.value + " " + e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    await axios.post("http://localhost:3000/api/auth/user/register", formData, {
      withCredentials: true,
    });
    console.log(formData);
    console.log(formData);
    navigate("/user/login");
  };
  return (
    <div className="min-h-screen bg-[#18243a] flex items-center justify-center">
      <div className="p-6 rounded w-full  max-w-md   text-gray-400 md:bg-[#1c283a] md:drop-shadow-black md:shadow-2xl">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p>Join to explore and enjoy delicious meal</p>
          <div className=" flex space-x-2">
            <h3>Switch</h3>
            <span className="text-blue-800 flex gap-1 text-sm items-center font-semibold">
              <a href="/food-partner/signup">Food partner</a>
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <div className="md:flex md:gap-6">
            <div className="">
              <label htmlFor="firstName" className="md:block inline">
                {" "}
                FIRST NAME
              </label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                placeholder=" john"
                className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] md:w-48 w-full  "
              />
            </div>
            <div>
              <label htmlFor="lastName" className="md:block inline">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] md:w-48 w-full  "
              />
            </div>
          </div>
          <label htmlFor="email" className="block">
            {" "}
            EMAIL
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="you@example.com"
            className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] w-full "
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password "
            className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 w-full rounded my-2 py-2 text-white font-semibold tracking-wider"
          >
            Sign Up
          </button>
        </form>
        <div className="flex gap-1">
          <p> Already have an account ?</p>{" "}
          <span className="text-blue-800 font-semibold">
            {" "}
            <a href="/user/login">Sign in</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
