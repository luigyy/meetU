import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import HeaderForNavbarButtons from "../../components/HeaderForNavbarButtons";
import { useStateContext } from "../../contexts/ContextProvider";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const SettingsButton = ({ title, customFunc, path }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="p-5 text-gray-600 cursor-pointer flex justify-between hover:bg-gray-50"
        onClick={() => {
          if (customFunc) customFunc();
          return path ? navigate(path) : null;
        }}
      >
        <button>{title}</button>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};
//testing only, do not push to main
const Settings = () => {
  const { setLogged } = useUserContext();
  const [removeCookies] = useCookies();

  const handleLogout = () => {
    setLogged(false);
    removeCookies("token");
  };
  return (
    <div>
      <HeaderForNavbarButtons title="Settings" />
      <SettingsButton title="Edit Profile" path="/editProfile" />
      <SettingsButton title="Log out" customFunc={handleLogout} />
    </div>
  );
};

export default Settings;
