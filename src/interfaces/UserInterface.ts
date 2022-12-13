import CardsInterface from "../interfaces/CardsInterface";

interface UserInterface {
  name: string;
  img: string;
  age: string;
  slogan: string;
  university: string; //create university type
  major: string;
  city: string;
  cards: CardsInterface;
  aboutme: string;
  hobbies: string;
  idealfirstdate: string;
}

export default UserInterface;
