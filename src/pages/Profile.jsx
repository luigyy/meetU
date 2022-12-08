import React from "react";
import HeaderWithLogo from "../components/HeaderWithLogo";
import { Navigate } from "react-router-dom";
import "../Profile.css";
import Interaction from "../components/Interaction";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";

const Profile = () => {
  // get person data
  const { people } = useStateContext();
  const lastPersonIndex = people.length - 1;
  const person = people[lastPersonIndex];
  // get person data

  //
  const { deletePerson } = useStateContext();

  return (
    <div>
      {person ? (
        <div>
          <div className="md:mr-[6%]">
            <HeaderWithLogo />
            <div className="h-[220vh] md:h-screen m-5 md:flex  mx-auto">
              <div className="w-full md:w-1/2 mt-20 md:mt-0 h-screen ">
                <img
                  className="w-[50%] mx-auto m-3 rounded-lg"
                  src={person.img}
                  alt={person.name}
                />
                <h1 className="text-3xl font-semibold tracking-tighter text-center">
                  {person.name},{" "}
                  <span className="text-lg text-gray-700">
                    {person.age} años
                  </span>
                </h1>
                <h1 className="p-5 text-4xl text-center italic mt-4">
                  "{person.slogan}"{" "}
                </h1>
              </div>

              <div className="w-full md:w-1/2 h-screen  ">
                <h1 className="text-center text-3xl my-5">
                  About <span className="font-semibold">{person.name}</span>
                </h1>
                <div className="pl-10 ">
                  <h1 className="p-2 text-lg">
                    Universidad:{" "}
                    <span className="text-base">{person.university}</span>
                  </h1>
                  <h1 className="p-2 text-lg">
                    Carrera: <span className="text-base"> {person.major} </span>{" "}
                  </h1>
                  <h1 className="p-2 text-lg">
                    De <span className="text-base"> {person.city}</span>{" "}
                  </h1>
                </div>
                <div className="pr-10 py-10 ">
                  <h1 className="text-3xl text-center font-semibold py-5">
                    More
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full">
                      <span>Buscando:</span>
                      <span className="">{person.cards.lookingFor} </span>{" "}
                    </span>

                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full ">
                      <span>Preferencia:</span>
                      <span className="pl-5 ">
                        {person.cards.sexualPreference}
                      </span>
                    </span>

                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full ">
                      <span>Altura:</span>
                      <span className="pl-5"> {person.cards.height}</span>
                    </span>

                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full ">
                      <span>Fiesta:</span>
                      <span className="pl-5"> {person.cards.party}</span>
                    </span>

                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full ">
                      <span>🐕 ó 🐈:</span>
                      <span className="pl-5"> {person.cards.dogsOrCats}</span>
                    </span>

                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full  ">
                      <span>🏖️ ó ⛰️:</span>
                      <span className="pl-5 ">
                        {person.cards.beachOrMountain}
                      </span>
                    </span>
                  </div>
                  <span></span>
                </div>
              </div>
            </div>

            <div className=" h-[200vh] md:h-screen border-4  md:flex">
              <div className="w-full min-h-screen bg-gray-300">
                <div className="p-20">
                  <h1 className="py-5 font-semibold text-3xl text-center">
                    Sobre mi
                  </h1>
                  <p className="leading-7 text-center">{person.aboutMe}</p>
                </div>

                <div>
                  <img
                    className="w-1/2 mx-auto rounded-3xl"
                    src="https://www.mercurynews.com/wp-content/uploads/2016/09/20160419_101922_tv-game-of-thrones.jpg?w=640"
                    alt="Me about to have fun"
                  />
                  <p className="text-center text-sm pt-2 italic">
                    About to have fun 🥶🥶🥶🥶
                  </p>
                </div>
              </div>
              <div className="w-full h-screen bg- md:bg-gray-300 pt-28">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                  <div className="card-body">
                    <h2 className="card-title"> Hobbies...</h2>
                    <p>{person.hobbies}</p>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto m-10 mt-20 ">
                  <div className="card-body">
                    <h2 className="card-title">
                      Idea para una primera cita 👀
                    </h2>
                    <p>{person.idealFirstDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-screen  m-5 mb-20 border-4 border-orange-500 mx-auto">
              {" "}
            </div>
          </div>
          <div className="fixed md:h-screen  md:w-[6%] bg-gray-200 md:top-0 md:right-0 blur opacity-80 bottom-0 h-[12vh] p-2 w-full"></div>
          <div className="fixed md:h-screen  md:w-[6%] md:bg-gray-200 md:top-0 md:right-0 bottom-0 h-[12vh] p-2 w-full">
            <Interaction forProfile={true} deletePerson={deletePerson} />
          </div>{" "}
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
};

export default Profile;
