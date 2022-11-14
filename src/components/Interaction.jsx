import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { CgHome, CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

//======================
const InteractionButton = ({ title, icon, bgOnHover, path, customfunc }) => {
  return (
    <>
      <button
        data-tip
        data-for={title}
        onClick={customfunc}
        className={`rounded-3xl p-3 text-2xl items-center ${
          bgOnHover ? "hover:bg-red-200" : "hover:bg-gray-300"
        }`}
      >
        {icon}
      </button>
      {/** tooltip */}
      <ReactTooltip id={title}>
        <span>{title}</span>
      </ReactTooltip>
    </>
  );
};

const Interaction = ({ forProfile }) => {
  const { test, deletePerson } = useStateContext();
  return (
    <div className="h-full">
      {forProfile ? (
        <div className="flex md:flex-col justify-around h-screen items-center">
          <InteractionButton title="Home" icon={<CgHome />} path="/" />
          <InteractionButton title="Like" icon={<FcLike />} />
          <InteractionButton
            title="Dislike"
            icon={<FcDislike />}
            customfunc={deletePerson}
          />
        </div>
      ) : (
        <div className="flex justify-around w-full items-center">
          <InteractionButton title="Anterior" icon={<BsArrowReturnLeft />} />
          <InteractionButton
            title="Ver Perfil"
            icon={<CgProfile />}
            customfunc={deletePerson}
          />
          <InteractionButton title="Anterior" icon={<BsArrowReturnRight />} />
        </div>
      )}
    </div>
  );
};

export default Interaction;
