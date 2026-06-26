import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      label: "Home",
      icon: "ti-home",
      path: "/",
    },
    {
      label: "Saved",
      icon: "ti-bookmark",
      path: "/saved",
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-around items-center bg-[#1e2d47b6] border-t border-white/10 py-3 backdrop-blur-md">
      {tabs.map(({ label, icon, path }) => {
        const active = location.pathname === path;

        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className="flex flex-col items-center"
          >
            <i
              className={`ti ${icon} text-2xl ${
                active ? "text-white" : "text-gray-500"
              }`}
            />

            <span
              className={`text-xs ${active ? "text-white" : "text-gray-500"}`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNav;
