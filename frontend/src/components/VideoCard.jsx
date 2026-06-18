import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function VideoCard({ item, foodPartner }) {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.8,
      },
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);
  console.log(foodPartner);
  return (
    <div className="h-screen snap-start w-full max-w-md mx-auto overflow-hidden relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover block"
        loop
        muted
        playsInline
        src={item.video}
      />

      <div className="absolute left-4 bottom-6 z-10">
        <h2 className="text-white mb-3">{item.description}</h2>
        <button
          className="text-white text-xl tracking-wider bg-blue-800 rounded-lg px-3 py-2"
          onClick={() => navigate(`/profile/${foodPartner}`)}
        >
          visit Store{" "}
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
