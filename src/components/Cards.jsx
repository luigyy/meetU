import React from "react";
import TinderCard from "react-tinder-card";

const people = [
  {
    name: "Jon Snow",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
    age: "25",
  },
  {
    name: "Eddard Stark",
    img: "http://pm1.narvii.com/6565/3d1e93851be866f3949c5cf7da5d99f6a28cf239_00.jpg",
    age: "40",
  },
];

const Cards = () => {
  return (
    <div>
      <div className="flex justify-center">
        {people.map((item, index) => (
          <TinderCard key={index} className="absolute">
            <div
              className="relative w-[500px] max-w-[85%] h-96 max-h-[50%] bg-no-repeat rounded-3xl mx-auto bg-cover shadow-2xl "
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <span className="absolute text-white bottom-2 left-2 text-2xl font-bold -tracking-wide">
                {item.name}
                <span className="text-xl">, {item.age}</span>
              </span>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
