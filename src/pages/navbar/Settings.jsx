import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import HeaderForNavbarButtons from "../../components/HeaderForNavbarButtons";
import { useStateContext } from "../../contexts/ContextProvider";

const SettingsButton = ({ title, customFunc }) => {
  return (
    <div>
      <div
        className="p-5 text-gray-600 cursor-pointer flex justify-between hover:bg-gray-50"
        onClick={customFunc}
      >
        <button>{title}</button>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};
//testing only, do not push to main
const Settings = () => {
  const handleLogout = () => {
    console.log("test");
  };
  const { setLogged } = useStateContext();
  return (
    <div>
      <HeaderForNavbarButtons title="Settings" />
      <SettingsButton title="Edit Profile" />
      <SettingsButton title="About " />
      <SettingsButton title="Contact " />
      <SettingsButton title="Log out" customFunc={handleLogout} />
    </div>
  );
};

export default Settings;
