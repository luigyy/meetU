import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

//get this from server
const peopleData = [
  {
    name: "Jon Snow",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
    age: "25",
    slogan: "I still dont know nothing",
    university: "UCR",
    major: "Bussiness",
    city: "San Jose, San Pedro",
    cards: {
      lookingFor: "🔥",
      sexualPreference: "👩",
      height: "185cm",
      party: "👍🥳",
      dogsOrCats: "🐕",
      beachOrMountain: "🏖️",
    },
    aboutMe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis enim quis culpa voluptates, quia voluptatum magnam beatae, repudiandae distinctio voluptatem, hic dolore inventore eaque excepturi corrupti. Quae, architecto nam.",
    hobbies:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quisquam! ",
    idealFirstDate:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex?",
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
      lookingFor: "🔥",
      sexualPreference: "👩",
      height: "185cm",
      party: "👍🥳",
      dogsOrCats: "🐕",
      beachOrMountain: "🏖️",
    },
    aboutMe:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis enim quis culpa voluptates, quia voluptatum magnam beatae, repudiandae distinctio voluptatem, hic dolore inventore eaque excepturi corrupti. Quae, architecto nam.",
    hobbies:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quisquam! ",
    idealFirstDate:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ex?",
  },
];

export const ContextProvider = ({ children }) => {
  const [people, setPeople] = useState(peopleData);
  const [logged, setLogged] = useState(true);

  //delete last person from people array
  const deletePerson = () => {
    const targetIndex = people.length - 1; //index for last element in array
    const filteredPeople = people.filter((_, index) => index !== targetIndex);
    setPeople(filteredPeople);
  };

  return (
    <StateContext.Provider value={{ people, deletePerson, logged, setLogged }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
