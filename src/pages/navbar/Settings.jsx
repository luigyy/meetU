import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import HeaderForNavbarButtons from "../../components/HeaderForNavbarButtons";

const SettingsButton = ({ title, customFunc }) => {
  return (
    <div>
      <div
        className="p-5 text-gray-600 cursor-pointer flex justify-between hover:bg-gray-50"
        onClick={() => customFunc()}
      >
        <button>{title}</button>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};
//testing only, do not push to main
const Settings = () => {
  return (
    <div>
      <HeaderForNavbarButtons title="Settings" />
      <SettingsButton title="Edit Profile" />
      <SettingsButton title="Edit Profile" />
    </div>
  );
};

export default Settings;
