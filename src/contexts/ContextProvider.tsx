import React, { useContext, createContext, useState } from "react";
import UserInterface from "../interfaces/UserInterface";

interface StateProviderInterface {
  people?: UserInterface[];
  deletePerson?: () => void;
}

const StateContext = createContext<StateProviderInterface>({});

//get this from server
const peopleData: UserInterface[] = [
  {
    name: "jon snow",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/jon_snow_season_8.png",
    age: "25",
    slogan: "i still dont know nothing",
    university: "ucr",
    major: "bussiness",
    city: "San jose, San Pedro",
    cards: {
      lookingfor: "🔥",
      sexualpreference: "👩",
      height: "140",
      party: "Yes",
      dogsorcats: "Dogs",
      beachormountain: "Beach",
    },
    aboutme:
      " lorem ipsum dolor sit amet consectetur adipisicing elit. cupiditate perferendis enim quis culpa voluptates, quia voluptatum magnam beatae, repudiandae distinctio voluptatem, hic dolore inventore eaque excepturi corrupti. quae, architecto nam.",
    hobbies:
      " lorem ipsum dolor sit amet consectetur, adipisicing elit. eligendi, quisquam! ",
    idealfirstdate:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam, ex?",
  },
  {
    name: "Eddard Stark",
    img: "http://pm1.narvii.com/6565/3d1e93851be866f3949c5cf7da5d99f6a28cf239_00.jpg",
    age: "40",
    slogan: "Head over my shoulders ",
    university: "UCR",
    city: "San Jose, San Pedro",
    major: "Bussiness",
    cards: {
      lookingfor: "🔥",
      sexualpreference: "👩",
      height: "185",
      party: "Yes",
      dogsorcats: "Dogs",
      beachormountain: "Beach",
    },
    aboutme:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis enim quis culpa voluptates, quia voluptatum magnam beatae, repudiandae distinctio voluptatem, hic dolore inventore eaque excepturi corrupti. Quae, architecto nam.",
    hobbies:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quisquam! ",
    idealfirstdate:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex?",
  },
];

//@ts-ignore
export const ContextProvider = ({ children }) => {
  const [people, setPeople] = useState(peopleData);

  //delete last person from people array
  const deletePerson = () => {
    const targetIndex = people.length - 1; //index for last element in array
    const filteredPeople = people.filter((_, index) => index !== targetIndex);
    setPeople(filteredPeople);
  };
  return (
    <StateContext.Provider value={{ people, deletePerson }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
