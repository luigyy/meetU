import React from "react";
import Interaction from "../components/Interaction";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const people = [
  {
    name: "Jon Snow",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
    age: "25",
    slogan: "I still dont know nothing",
  },
  {
    name: "Eddard Stark",
    img: "http://pm1.narvii.com/6565/3d1e93851be866f3949c5cf7da5d99f6a28cf239_00.jpg",
    age: "40",
    slogan: "Head over my shoulders ",
  },
];

const Main = () => {
  return (
    <div>
      <Navbar />
      <Cards people={people} />
      <div className="fixed w-full top-[520px]">
        <Interaction forProfile={false} people={people} />
      </div>
    </div>
  );
};

export default Main;
