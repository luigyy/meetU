import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HeaderForNavbarButtons = ({ title, customFunc }) => {
  return (
    <div className="pb-5">
      <button className="hover:bg-gray-50 rounded-3xl fixed text-3xl p-3 md:ml-44 top-4">
        <AiOutlineArrowLeft />
      </button>
      <h1 className="text-3xl text-center -tracking-wider py-5 font-semibold">
        {title}{" "}
      </h1>
    </div>
  );
};

export default HeaderForNavbarButtons;
