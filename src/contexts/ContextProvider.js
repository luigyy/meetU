import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

//get this from server
const peopleData = [
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

const test = () => {
  console.log("test function");
};
export const ContextProvider = ({ children }) => {
  const [people, setPeople] = useState(peopleData);

  //delete last person from people array
  const deletePerson = () => {
    const targetIndex = people.length - 1; //index for last element in array
    const filteredPeople = people.filter((_, index) => index !== targetIndex);
    setPeople(filteredPeople);
  };

  return (
    <StateContext.Provider value={{ people, deletePerson, test }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
