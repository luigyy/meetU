import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

interface DropdownProps {
  title: string;
  options: string[];
}

const DropdownComponent: React.FC<DropdownProps> = ({ title, options }) => {
  const { setUserState } = useStateContext();
  //
  return (
    <div className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full">
      <p>{title}</p>
      <select className="w-[70px] bg-gray-300 border-hidden px-1">
        {options.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
