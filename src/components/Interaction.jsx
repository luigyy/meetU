import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { CgHome, CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

//======================
const InteractionButton = ({ title, icon, bgOnHover, path, customfunc }) => {
  return (
    <>
      <Link onClick={customfunc} to={path}>
        <button
          data-tip
          data-for={title}
          className={`rounded-3xl p-5 text-3xl md:text-4xl ${
            bgOnHover ? "hover:bg-red-200" : "hover:bg-gray-200"
          }`}
        >
          {icon}
        </button>
      </Link>
      {/** tooltip */}
      <ReactTooltip id={title}>
        <span>{title}</span>
      </ReactTooltip>
    </>
  );
};

const Interaction = ({ forProfile }) => {
  return (
    <div className="h-full">
      {forProfile ? (
        <div className="flex md:flex-col justify-around h-screen">
          <InteractionButton title="Home" icon={<CgHome />} path="/" />
          <InteractionButton title="Like" icon={<FcLike />} />
          <InteractionButton title="Dislike" icon={<FcDislike />} />
        </div>
      ) : (
        <div className="flex justify-around w-full">
          <InteractionButton title="Anterior" icon={<BsArrowReturnLeft />} />
          <InteractionButton title="Ver Perfil" icon={<CgProfile />} />
          <InteractionButton title="Anterior" icon={<BsArrowReturnRight />} />
        </div>
      )}
    </div>
  );
};

export default Interaction;
