import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

//======================
const InteractionButton = ({ title, style, icon, bgOnHover }) => {
  return (
    <button
      className={`rounded-3xl p-5 text-4xl ${
        bgOnHover ? "hover:bg-red-200" : "hover:bg-gray-200"
      }`}
    >
      {icon || title}
    </button>
  );
};

const Interaction = () => {
  return (
    <div className="flex justify-evenly  w-full fixed bottom-14 ">
      <InteractionButton title="Backward" icon={<BsArrowReturnLeft />} />
      <InteractionButton title="Like" icon={<FcLike />} bgOnHover="red" />
      <InteractionButton title="See Profile" icon={<ImProfile />} />
      <InteractionButton title="Pass" icon={<FcDislike />} />
      <InteractionButton title="Forward" icon={<BsArrowReturnRight />} />
    </div>
  );
};

export default Interaction;