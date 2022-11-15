import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { BsArrowReturnLeft, BsArrowReturnRight } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { CgHome, CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

//======================
const InteractionButton = ({ title, icon, bgOnHover, path, customfunc }) => {
  //
  const navigate = useNavigate();

  return (
    <>
      <button
        data-tip
        data-for={title}
        onClick={() => {
          if (customfunc) customfunc();
          return path ? navigate(path) : null;
        }}
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
    <div className="md:h-full w-full">
      {forProfile ? (
        <div className="flex md:flex-col justify-around md:h-screen w-full items-center">
          <InteractionButton title="Home" icon={<CgHome />} path="/" />
          <InteractionButton title="Like" icon={<FcLike />} />
          <InteractionButton
            title="Dislike"
            icon={<FcDislike />}
            customfunc={deletePerson}
            path="/"
          />
        </div>
      ) : (
        <div className="flex justify-around w-full items-center">
          <InteractionButton title="Anterior" icon={<BsArrowReturnLeft />} />
          <InteractionButton
            title="Ver Perfil"
            icon={<CgProfile />}
            customfunc={test}
          />
          <InteractionButton title="Anterior" icon={<BsArrowReturnRight />} />
        </div>
      )}
    </div>
  );
};

export default Interaction;
