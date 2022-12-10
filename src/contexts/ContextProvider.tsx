import React, { useContext, createContext, useState } from "react";
import UserInterface from "../interfaces/UserInterface";

interface StateProviderInterface {
  people?: UserInterface[];
  deletePerson?: () => void;
  userState?: UserInterface;
  setUserState?: (user: UserInterface) => void;
}

const StateContext = createContext<StateProviderInterface>({});

const userData: UserInterface = {
  name: "Luigy",
  img: "data:image/jpeg;base64,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",
  age: "19",
  slogan: "Its mee, luigyyy",
  university: "Monsters University",
  major: "Math",
  city: "San Pedro",
  cards: {
    lookingfor: "🔥",
    sexualpreference: "👩",
    height: "188cm",
    party: "👍🥳",
    dogsorcats: "🐕",
    beachormountain: "🏖️",
  },
  aboutme: "I eat mushrooms sometimes",
  hobbies: "Invade castles, kill dragons and save princesses",
  idealfirstdate: " With peach, definetly",
};

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
      height: "185cm",
      party: "👍🥳",
      dogsorcats: "🐕",
      beachormountain: "🏖️",
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
      party: "👍🥳",
      dogsorcats: "🐕",
      beachormountain: "🏖️",
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
  const [userState, setUserState] = useState<UserInterface>(userData);

  //delete last person from people array
  const deletePerson = () => {
    const targetIndex = people.length - 1; //index for last element in array
    const filteredPeople = people.filter((_, index) => index !== targetIndex);
    setPeople(filteredPeople);
  };
  return (
    <StateContext.Provider
      value={{ people, deletePerson, userState, setUserState }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
