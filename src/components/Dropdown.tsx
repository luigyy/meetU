import React from "react";

interface DropdownProps {
  title: string;
  options: string[];
}

const DropdownComponent: React.FC<DropdownProps> = ({ title, options }) => {
  //
  return (
    <div className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full">
      <p>{title}</p>
      <select className="w-[70px] bg-gray-300 border-hidden px-1">
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
