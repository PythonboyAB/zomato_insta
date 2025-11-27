import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/food-profile/food-partner/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProfile(response.data.foodPartner);
        setVideo(response.data.foodPartner.foodItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(video);
  console.log(profile);

  return (
    <div className="  container px-4 pt-4  w-screen">
      {/* Header section inclueds proflie image, Business name, Address, total meal and customer serve  */}
      <div className="border-red-500 border-2 container mx-auto p-4">
        {/* profile image , business and adress name*/}
        <div className="flex items-center ">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-zomato-logo-icon-svg-download-png-1637644.png"
            alt="zomato logo"
            className="rounded-full w-20 h-20"
          />
          <div className="ml-8">
            <h1 className="font-bold">{profile?.Name}</h1>
            <h3>{profile?.Address}</h3>
          </div>
        </div>
        <hr className="my-4" />
        {/* total meal and customer server */}
        <div className="flex justify-evenly mt-4">
          <div className="flex flex-col items-center">
            <h3>total meal</h3>
            <h3>45</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>customer serve</h3>
            <h3>15K</h3>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      {/* body section shows food reels */}
      <div className="h-[75vh]  flex flex-wrap justify-between gap-y-6">
        {video.map((item) => (
        //   <div className="border-2 border-slate-700 w-[48%] h-[45%]">
            <video src={item.video} muted className=" h-[45%] w-[50%]"></video>
        //   </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
