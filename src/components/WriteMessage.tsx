import React from "react";
import { AiOutlineSend } from "react-icons/ai";

interface WriteMessageProps {}

const WriteMessage: React.FC<WriteMessageProps> = ({}) => {
  return (
    <div className="">
      <div className="relative border-4 border-gray-300 focus:border-green-300 py-2 px-5 rounded-3xl w-[70%] mx-auto">
        <input
          className="w-[90%] overflow-x-hidden focus:border-hidden "
          placeholder="Write new message"
          type="text"
        />
        <button>
          <AiOutlineSend className="text-4xl rounded-2xl absolute right-0 top-[2px]" />
        </button>
      </div>
    </div>
  );
};

export default WriteMessage;
