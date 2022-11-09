import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  //TODO: check if person is null and redirect to main
  //get person object from Link
  const navigate = useNavigate();

  const person = useLocation().state.person;
  if (!person) navigate("/");

  return (
    <div>
      {/* university, major, interest {something serious or not}, location */}
      <div>
        <div className="h-96 bg-no-repeat bg-contain bg-center mt-10 ">
          <img
            className="w-[60%] mx-auto rounded-3xl"
            src={person.img}
            alt={person.name}
          />
          <h1 className="mt-5 text-3xl tracking-tighter font-semibold text-center">
            {person.name}
          </h1>
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
