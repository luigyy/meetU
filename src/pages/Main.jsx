import React from "react";
import Interaction from "../components/Interaction";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import NopeopleHandler from "../components/NopeopleHandler";
import { useStateContext } from "../contexts/ContextProvider";

const Main = () => {
  const { people, deletePerson } = useStateContext();
  return (
    <div>
      <Navbar />
      {people ? (
        <div className="tall:mt-20 giant:mt-44 ">
          <Cards people={people} />{" "}
          <div className="fixed w-full top-[520px] tall:mt-20 giant:mt-72 huge:mt-[500px]">
            <Interaction forProfile={false} people={people} />
          </div>{" "}
        </div>
      ) : (
        <NopeopleHandler />
      )}
    </div>
  );
};

export default Main;
