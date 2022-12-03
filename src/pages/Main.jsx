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
      {!people ? (
        <div>
          <Cards people={people} />{" "}
          <div className="fixed w-full top-[520px]">
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
