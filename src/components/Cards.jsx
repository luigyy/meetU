import React from "react";
import TinderCard from "react-tinder-card";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Cards = () => {
  const { people } = useStateContext();

  return (
    <div>
      <div className="flex justify-center">
        {people.map((item, index) => (
          <TinderCard
            key={index}
            className="absolute pressable"
            preventSwipe={["up", "down", "right", "left"]}
          >
            <div
              className="relative w-[270px] md:w-[500px] max-w-full h-96 bg-no-repeat rounded-3xl mx-auto bg-cover shadow-2xl "
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="absolute text-white top-2 left-2 text-xl font-bold -tracking-wide">
                {item.name}
                <span className="text-lg">, {item.age}</span>
              </span>
              <Link to="/profile" state={{ person: item }}>
                <span className=" p-4 absolute italic text-white bottom-2 right-2 ">
                  See Profile
                </span>
              </Link>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
