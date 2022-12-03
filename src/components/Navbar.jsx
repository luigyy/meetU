import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navbutton = ({ icon, path }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => (path ? navigate(path) : null)}
        className="text-slate-700 rounded-3xl hover:bg-slate-200 p-5 text-3xl giant:text-6xl"
      >
        {icon}
      </button>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="flex justify-around md:justify-evenly bg-gray-200 mb-4  ">
      <Navbutton icon={<FiSettings />} path="/settings" />
      {/**MeetU */}
      <span className="text-3xl giant:text-6xl font-extrabold -tracking-widest hover:bg-blue-50 rounded-3xl mb-2 p-5">
        Meet<span className="text-4xl giant:text-7xl text-blue-400">U</span>
      </span>
      {/**MeetU */}
      <Navbutton icon={<BsChatSquareDots />} path="/chats" />
    </div>
  );
};

export default Navbar;
