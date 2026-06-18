import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/food", {
          withCredentials: true,
        });
        setVideos(response.data.foodItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(videos);

  return (
    <section className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[#18243a]">
      {videos.map((item) => (
        <VideoCard key={item._id} item={item} foodPartner={item.foodPartner} />
      ))}
    </section>
  );
};

export default Home;
