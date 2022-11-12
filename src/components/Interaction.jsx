import React from "react";
import { FcLike, FcDislike } from "react-icons/fc";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

//======================
const InteractionButton = ({ title, icon, bgOnHover, path, customfunc }) => {
  return (
    <Link onClick={customfunc} to={path}>
      <button
        type="button"
        data-tip
        data-for={title}
        className={`rounded-3xl p-3 text-2xl lg:text-3xl  ${
          bgOnHover ? "hover:bg-red-200" : "hover:bg-gray-400"
        }`}
      >
        {icon}
        {/** tooltip */}
        <ReactTooltip id={title}>
          <span>{title}</span>
        </ReactTooltip>
      </button>
    </Link>
  );
};

const Interaction = ({ forProfile, deletePerson }) => {
  //
  const { people, increment } = useStateContext();

  return (
    <div className="h-full">
      {forProfile ? (
        <div
          className={`flex md:flex-col justify-around h-full items-center  `}
        >
          <InteractionButton title="Home" icon={<AiOutlineHome />} path="/" />
          <InteractionButton title="Like" icon={<FcLike />} bgOnHover="red" />
          <InteractionButton
            title="Pass"
            icon={<FcDislike />}
            customfunc={deletePerson}
          />
        </div>
      ) : (
        <div className="fixed w-full  h-[10%]  bottom-14">
          <div className="w-full flex justify-center space-x-10 min-[400px]:space-10 md:space-x-44 ">
            <InteractionButton title="Anterior" icon={<BsArrowReturnLeft />} />
            <InteractionButton
              title="Ver perfil"
              icon={<CgProfile />}
              customfunc={deletePerson}
            />
            <InteractionButton
              title="Siguiente"
              icon={<BsArrowReturnRight />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Interaction;
