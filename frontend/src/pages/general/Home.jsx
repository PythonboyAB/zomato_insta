import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoCard from "../../components/VideoCard";
import BottomNav from "../../components/BottomNav";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/api/food", {
          withCredentials: true,
        });

        setVideos(res.data.foodItems);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#18243a] flex justify-center">
      {/* Mobile Container */}
      <div className="relative w-full max-w-md h-screen">
        {/* Scrollable Videos */}
        <section className="h-full overflow-y-auto snap-y snap-mandatory scrollbar-hide">
          {videos.map((item) => (
            <VideoCard
              key={item._id}
              item={item}
              foodPartner={item.foodPartner}
            />
          ))}
        </section>

        {/* Fixed Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Home;
