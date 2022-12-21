import React from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import ReactTooltip from "react-tooltip";
import { CgHome, CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlineSave } from "react-icons/ai";

interface InteractionButtonProps {
  title: string;
  icon?: any;
  bgOnHover?: boolean;
  path?: string;
  customfunc?: () => void;
}
//======================
const InteractionButton: React.FC<InteractionButtonProps> = ({
  title,
  icon,
  bgOnHover,
  path,
  customfunc,
}) => {
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
        className={`rounded-3xl p-3 text-4xl giant:text-7xl items-center ${
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

interface InteractionProps {
  forProfile?: boolean;
  forEditProfile?: boolean;
}

const Interaction: React.FC<InteractionProps> = ({
  forProfile,
  forEditProfile,
}) => {
  const { deletePerson } = useStateContext();
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
      ) : forEditProfile ? (
        <div className="flex md:flex-col justify-around md:h-screen w-full items-center">
          <InteractionButton title="Home" icon={<CgHome />} path="/" />
          <InteractionButton title="Save" icon={<AiOutlineSave />} />
        </div>
      ) : (
        <div className="flex justify-around w-full items-center">
          <InteractionButton title="Like" icon={<FcLike />} />
          <InteractionButton
            title="Ver Perfil"
            icon={<CgProfile />}
            path="/profile"
          />
          <InteractionButton
            title="Dislike"
            icon={<FcDislike />}
            customfunc={deletePerson}
          />
        </div>
      )}
    </div>
  );
};

export default Interaction;
