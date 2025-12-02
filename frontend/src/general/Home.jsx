import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [videos, setVideos] = useState([]);
  // const [profileId, setProfileId] = useState([])
  const videoRefs = useRef([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((res) => {
        setVideos(res.data.foodItems || []);
      })
      .catch(() => {});
  }, []);
  console.log(videos);
  // console.log(profileId)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 } // video must be 70% visible
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));

    return () => observer.disconnect();
  }, [videos]);

  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {videos.map((item, index) => (
          <div
            key={item._id}
            className="relative h-screen w-full snap-start bg-black"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.video}
              className="absolute inset-0  h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />

            <div className="absolute left-0 bottom-12 z-10 p-4 flex flex-col justify-center items-center gap-1">
              <h3 className="text-white">{item.description}</h3>
              <Link
                className="bg-blue-600 px-4 py-2 rounded-full text-white font-bold"
                to={"/partner-profile/" + item.foodPartner}
              >
                Visit store
              </Link>
            </div>
            <div className="flex flex-col gap-4  absolute bottom-30 right-3 z-100 border-red-700 text-white">
              {/* like button  */}
              <div>
                <button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                </button>
              </div>

              {/* comment button  */}
              <div>
                <button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  </svg>
                </button>
              </div>
              {/* save button  */}
              <div>
                <button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* bottom NavBar  */}

            <div className="absolute z-100 bottom-0 w-full bg-slate-800 h-14 px-6 flex justify-around py-3 items-center text-white font-light">
              <div className="flex flex-col items-center">
                <span className="bottom-nav__icon" aria-hidden="true">
                  {/* home icon */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 10.5 12 3l9 7.5" />
                    <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
                  </svg>
                </span>
                <span className="bottom-nav__label">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="bottom-nav__icon" aria-hidden="true">
                  {/* bookmark icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
                  </svg>
                </span>
                <span className="bottom-nav__label">Saved</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
