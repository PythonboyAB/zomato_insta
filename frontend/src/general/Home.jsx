import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {
  const [videos, setVideos] = useState([]);
  // const [profileId, setProfileId] = useState([])
 const videoRefs = useRef([])
 

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((res) => { setVideos(res.data.foodItems || [])
                        
      }
                      
    )
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
      
      {videos.map((item,index)=>(
         <div key={item._id}
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


             <div className="absolute left-0 bottom-0 z-10 p-4 flex flex-col justify-center items-center gap-1">
                 <h3 className="text-white">Descritpion</h3>
                 <Link className="bg-blue-600 px-4 py-2 rounded-full text-white font-bold" to={"/partner-profile/"+ item.foodPartner}>Visit store</Link>
              </div>
    </div>
  ))}
    </div>

    
    </>
  );
}
