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
    name: "jon",
    img: "data:image/jpeg;base64,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",
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
