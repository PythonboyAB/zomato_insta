import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/food-profile/food-partner/${id}`,
          { withCredentials: true },
        );

        setProfile(res.data.foodPartner);
        setVideos(res.data.foodPartner.foodItems);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="w-screen min-h-screen bg-[#18243a] text-white">
      <div className="w-full max-w-md min-h-screen mx-auto md:bg-[#1c283a] p-3 ">
        {" "}
        <header className="bg-gray-700 rounded-xl p-3">
          <div className="flex gap-5 p">
            {" "}
            <img
              className="w-24 h-24 rounded-full"
              src="https://i.pinimg.com/736x/f4/34/e3/f434e30f1c5a170fc4700661cc99c3ab.jpg"
              alt="logo"
            />
            <div>
              <h1 className="text-3xl ">{profile.Name}</h1>
              <p className="text-lg">{profile.Address}</p>
            </div>
          </div>
          <hr className="mt-3 text-gray-500" />
          <div className="flex justify-evenly py-2">
            <p>Totoal Meal : {videos.length}</p>
            <p>customer served</p>
          </div>
        </header>
        <hr className="my-7 text-gray-500" />
        <section className="flex justify-center">
          <div className="grid grid-cols-2  md:grid-cols-3 gap-3 text-black ">
            {videos.map((item) => (
              <video
                key={item._id}
                src={item.video}
                className="object-fill w-40 h-45 md:w-30  shadow-2xs shadow-black rounded"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
