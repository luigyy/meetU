import React from "react";
import Interaction from "../components/Interaction";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

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

const Main = () => {
  return (
    <div>
      <Navbar />
      <Cards people={people} />
      <Interaction people={people} />
    </div>
  );
};

export default Main;
