import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const feedRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((res) => setVideos(res.data.foodItems || []))
      .catch(() => {});
  }, []);
    console.log(videos);
  

  const likeVideo = async (item) => {
    const res = await axios.post(
      "http://localhost:3000/api/food/like",
      { foodId: item._id },
      { withCredentials: true }
    );

    setVideos((prev) =>
      prev.map((v) =>
        v._id === item._id
          ? { ...v, likeCount: v.likeCount + (res.data.like ? 1 : -1) }
          : v
      )
    );
  };

  const saveVideo = async (item) => {
    const res = await axios.post(
      "http://localhost:3000/api/food/save",
      { foodId: item._id },
      { withCredentials: true }
    );

    setVideos((prev) =>
      prev.map((v) =>
        v._id === item._id
          ? { ...v, savesCount: v.savesCount + (res.data.save ? 1 : -1) }
          : v
      )
    );
  };

  return (
    <div className="h-[100dvh] bg-black overflow-hidden">
      <div
        ref={feedRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth touch-pan-y"
      >
        {videos.length === 0 && (
          <div className="absolute inset-0 grid place-items-center text-white text-xl">
            No videos available.
          </div>
        )}

        {videos.map((item) => (
          <div
            key={item._id}
            className="relative h-[100dvh] w-full snap-start bg-black"
          >
            <video
              src={item.video}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />

            <div className="absolute inset-0 flex items-end">
              <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/70" />

              <div className="relative w-full px-6 pb-28 pr-20 flex flex-col gap-4 text-white">
                <p className="text-base leading-tight line-clamp-2 max-w-[90ch]">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-4 py-2 shadow-md w-fit"
                >
                  Order Now
                </a>
              </div>
            </div>

            <div className="absolute right-4 bottom-32 flex flex-col gap-4 text-white">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => likeVideo(item)}
                  className="w-12 h-12 rounded-full grid place-items-center bg-black/40 backdrop-blur-sm border border-white/20"
                >
                </button>
                <span className="text-sm">{item.likeCount}</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={() => saveVideo(item)}
                  className="w-12 h-12 rounded-full grid place-items-center bg-black/40 backdrop-blur-sm border border-white/20"
                >
                </button>
                <span className="text-sm">{item.savesCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
