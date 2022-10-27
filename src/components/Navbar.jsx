import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";

const Navbutton = ({ icon }) => {
  return (
    <div>
      <button className="text-slate-700 rounded-3xl hover:bg-slate-200 p-5 text-3xl">
        {icon}
      </button>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="flex justify-around md:justify-evenly mt-5">
      <Navbutton icon={<FiSettings />} />
      {/**MeetU */}
      <button className="text-3xl font-extrabold -tracking-widest hover:bg-blue-50 rounded-3xl mb-2 p-5">
        Meet<span className="text-4xl text-blue-400">U</span>
      </button>
      {/**MeetU */}
      <Navbutton icon={<BsChatSquareDots />} />
    </div>
  );
};

export default Navbar;