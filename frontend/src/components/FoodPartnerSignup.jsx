import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FoodPartnerSignup = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      Name: e.target.businessName.value,
      Email: e.target.email.value,
      Password: e.target.password.value,
      Phone: e.target.phone.value,
      ContactName: e.target.contactName.value,
      Address: e.target.address.value,
    };
    await axios.post(
      "http://localhost:3000/api/auth/food-partner/register",
      formData,
      { withCredentials: true },
    );
    navigate("/food-partner/login");
  };

  return (
    <div className="w-screen h-screen  flex items-center justify-center mx-auto  bg-[#18243a]">
      <div className="md:min-w-72 w-full md:max-w-md md:bg-[#1c283a] p-4 text-gray-400 rounded-xl md:drop-shadow-black md:shadow-2xl ">
        {/* heading part  */}
        <div className="flex flex-col items-center mt-2">
          <h1 className="font-semibold text-white tracking-wider text-2xl">
            Partner signup
          </h1>
          <p>Grow your business with our platform</p>
          <div className="flex gap-1 items-center font-semibold ">
            <h6>Switch {"  "} </h6>
            <span className="text-sm text-blue-800">
              {" "}
              <a href="/user/signup"> User </a>
            </span>
            {"  "}
          </div>
        </div>
        {/* Form part  */}
        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="name" className="uppercase block">
            {" "}
            business Name
          </label>
          <input
            type="text"
            id="name"
            name="businessName"
            placeholder="tasty bites"
            className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] w-full"
          />
          <div className=" md:grid md:grid-cols-2 overflow-hidden my-1 md:space-x-3">
            <div>
              <label htmlFor="contactName" className="block md:inline">
                {" "}
                CONTACT NAME
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="jane doe"
                className="border-gray-700 border px-2 py-1 my-1 rounded bg-[#233149]  w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block md:inline">
                PHONE
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+9185422448"
                className="border-gray-700 border px-2 py-1 my-1 rounded bg-[#233149]  w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="business@email.com"
              className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] w-full "
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="create password"
              className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] w-full "
            />
          </div>
          <div>
            <label htmlFor="address" className="block">
              ADDRESS
            </label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder="123 market steet"
              className="border-gray-700 border px-2 py-1 mt-1 rounded bg-[#233149] w-full "
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 px-4 w-full rounded my-2 py-2 text-white font-semibold tracking-wider"
          >
            {" "}
            Create partner Account
          </button>
        </form>
        <h6>
          {" "}
          Already a partner ?{" "}
          <a href="/food-partner/login" className="text-blue-700">
            {" "}
            Sign in
          </a>
        </h6>
      </div>
    </div>
  );
};

export default FoodPartnerSignup;
