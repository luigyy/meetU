import React from "react";

interface DropdownProps {}

const DropdownComponent: React.FC<DropdownProps> = () => {
  return (
    <div className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full">
      <p>content</p>
      <select className="w-[70px] bg-gray-300 border-hidden px-1">
        <option>test</option>
        <option>Laravel 9 with React</option>
        <option>React with Tailwind CSS</option>
        <option>React With Headless UI</option>
      </select>
    </div>
  );
};

export default DropdownComponent;
