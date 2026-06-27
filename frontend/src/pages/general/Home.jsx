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
  console.log(videos);

  async function likeVideo(item) {
    const response = await axios.post(
      "http://localhost:3000/api/food/like",
      { foodId: item._id },
      { withCredentials: true },
    );
    console.log(response);

    if (response.data.liked) {
      console.log("video liked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, likeCount: v.likeCount + 1 } : v,
        ),
      );
    } else {
      console.log("video unliked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, likeCount: v.likeCount - 1 } : v,
        ),
      );
    }
  }

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
              like={likeVideo}
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
