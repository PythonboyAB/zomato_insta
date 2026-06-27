import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment, FaRegBookmark } from "react-icons/fa6";

function VideoCard({ item, foodPartner, like }) {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.8,
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen snap-start">
      <video
        ref={videoRef}
        src={item.video}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />
      <div className="absolute right-4 bottom-22 text-white space-y-3 flex flex-col items-center justify-center  ">
        <div className="bg-gray-700/40 p-3 rounded-full border border-white/10 ">
          <FaRegHeart className=" text-xl " onClick={() => like(item)} />
        </div>
        <p className="-mt-3">{item.likeCount}</p>
        <div className="bg-gray-700/40 p-3 rounded-full border border-white/10 ">
          <FaRegComment className="text-xl" />
        </div>
        <div className="bg-gray-700/40 p-3 rounded-full border border-white/10 ">
          <FaRegBookmark className="text-xl" />
        </div>
      </div>

      <div className="absolute left-4 bottom-12">
        <h2 className="text-white mb-3">{item.description}</h2>

        <button
          onClick={() => navigate(`/profile/${foodPartner}`)}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Visit Store
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
