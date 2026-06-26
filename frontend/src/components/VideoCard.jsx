import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function VideoCard({ item, foodPartner }) {
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
