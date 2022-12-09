interface UserInterface {
  name: string;
  img: string;
  age: string;
  slogan: string;
  university: string; //create university type
  major: string;
  city: string;
  cards: {
    lookingfor: string;
    sexualpreference: string;
    height: string;
    party: string;
    dogsorcats: string;
    beachormountain: string;
  };
  aboutme: string;
  hobbies: string;
  idealfirstdate: string;
}

export default UserInterface;
