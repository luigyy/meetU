import React from "react";
import TinderCard from "react-tinder-card";
import { useStateContext } from "../contexts/ContextProvider";
import { FcLike, FcDislike } from "react-icons/fc";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ReactTooltip from "react-tooltip";

const Cards = ({ people }) => {
  const { deletePerson } = useStateContext();
  //onSwipe function for tinder card
  const onSwipe = (direction) => {
    if (direction === "right") return deletePerson();
  };

  return (
    <div>
      <div className="flex justify-center">
        {people.map((item, index) => (
          <TinderCard
            onSwipe={onSwipe}
            key={index}
            className="absolute pressable"
            preventSwipe={["up", "down", "", ""]}
          >
            <div
              className="relative w-[270px] md:w-[500px] max-w-full h-96 bg-no-repeat rounded-3xl mx-auto bg-cover shadow-2xl "
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="absolute text-white top-2 left-2 text-xl font-bold -tracking-wide">
                {item.name}
                <span className="text-lg">, {item.age}</span>
              </span>
            </div>
          </TinderCard>
        ))}
      </div>
      {/* left  */}
      <button>
        <span
          data-tip
          data-for="match"
          className="text-4xl fixed top-[45vh] left-[10%]"
        >
          <BsArrowLeftShort />
          <FcLike />
        </span>{" "}
        <ReactTooltip id="match">
          <span>Scroll left to match</span>
        </ReactTooltip>
      </button>

      {/* right  */}
      <button onClick={deletePerson}>
        <span
          data-tip
          data-for="pass"
          className="text-4xl fixed top-[45vh] right-[10%]"
        >
          <BsArrowRightShort />
          <FcDislike />
        </span>
        <ReactTooltip id="pass">
          <span>Scroll Right to pass</span>
        </ReactTooltip>
      </button>
    </div>
  );
};

export default Cards;
