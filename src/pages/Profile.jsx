import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

const Profile = () => {
  //TODO: check if person is null and redirect to main
  //get person object from Link

  const state = useLocation().state;
  if (!state) return <Navigate to="/" replace />;

  const person = state.person;

  return (
    <div>
      {/* university, major, interest {something serious or not}, location */}
      <div clas>
        <div className="h-96 bg-no-repeat bg-contain bg-center mt-10 ">
          <img
            className="w-[50%] max-w-[300px] mx-auto rounded-3xl"
            src={person.img}
            alt={person.name}
          />
          <h1 className="mt-5 text-3xl tracking-tighter font-semibold text-center">
            {person.name}
          </h1>
          <span>{person.age}</span>
        </div>
      </div>

      {/* about me (likes, music, pets, party)  */}
      <div></div>

      {/* ?  */}
      <div></div>
    </div>
  );
};

export default Profile;
