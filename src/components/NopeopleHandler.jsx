//this component is used as a background when theres no people to show
import React from "react";

const NopeopleHandler = () => {
  return (
    <div className="text-2xl font-bold text-red-500 text-center p-20">
      <p>NO people available at the moment</p>
      <p>Come back in 12 hours</p>
    </div>
  );
};

export default NopeopleHandler;
