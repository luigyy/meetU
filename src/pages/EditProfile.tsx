import React from "react";
import HeaderWithLogo from "../components/HeaderWithLogo";
import { Navigate } from "react-router-dom";
import "../Profile.css";
import Interaction from "../components/Interaction";
import { useUserContext } from "../contexts/UserContext";
import { useStateContext } from "../contexts/ContextProvider";
import ResizableInput from "../components/ResizableInput";
import DropdownComponent from "../components/Dropdown";

const Profile = () => {
  const {
    name,
    setName,
    img,
    setImg,
    age,
    setAge,
    slogan,
    setSlogan,
    university,
    setUniversity,
    major,
    setMajor,
    city,
    setCity,
    cards,
    setCards,
    aboutme,
    setAboutme,
    hobbies,
    setHobbies,
    idealfirstdate,
    setIdealFirstDate,
  } = useUserContext();
  //
  return (
    <div>
      {name ? (
        <div>
          <div className="md:mr-[6%]">
            <HeaderWithLogo />
            <div className="h-[220vh] md:h-screen m-5 md:flex  mx-auto">
              <div className="w-full md:w-1/2 mt-20 md:mt-0 h-screen ">
                <img
                  className="w-[50%] mx-auto m-3 rounded-lg"
                  src={img}
                  alt={name}
                />
                <div className="text-center">
                  <ResizableInput
                    extraWidth={80}
                    value={name}
                    className="text-3xl font-semibold tracking-tighter text-center"
                  />
                  <ResizableInput
                    value={age}
                    extraWidth={7}
                    className="text-lg text-gray-700"
                  />
                </div>
                <div className="text-center">
                  <ResizableInput
                    value={slogan}
                    extraWidth={250}
                    className="p-5 text-4xl text-center mx-auto italic mt-4"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 h-screen  ">
                <h1 className="text-center text-3xl my-5">
                  About <span className="font-semibold">{name}</span>
                </h1>
                <div className="pl-10 ">
                  <h1 className="p-2 text-lg">
                    Universidad:{" "}
                    <ResizableInput
                      className="text-base"
                      value={university}
                      extraWidth={10}
                    />
                  </h1>
                  <h1 className="p-2 text-lg">
                    Carrera:{" "}
                    <ResizableInput
                      className="text-base"
                      value={major}
                      extraWidth={10}
                    />
                  </h1>
                  <h1 className="p-2 text-lg">
                    De{" "}
                    <ResizableInput
                      className="text-base"
                      value={city}
                      extraWidth={10}
                    />{" "}
                  </h1>
                </div>
                <div className="pr-10 py-10 ">
                  <h1 className="text-3xl text-center font-semibold py-5">
                    More
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                    <DropdownComponent
                      title="Buscando: "
                      options={["🔥", "🧑‍🤝‍🧑", "💓"]}
                    />
                    <DropdownComponent
                      title="Preferencia: "
                      options={["👨", "👩", "👨👩"]}
                    />

                    <span className="bg-gray-300 px-7 py-1 rounded-3xl flex justify-between items-center opacity-80 w-full ">
                      <span>Altura:</span>
                      <ResizableInput value={cards?.height} extraWidth={0} />
                      cm
                    </span>
                    <DropdownComponent
                      title="Fiesta: "
                      options={["👎", "👍"]}
                    />
                    <DropdownComponent
                      title="🐕 or 🐈"
                      options={["🐕", "🐈"]}
                    />
                    <DropdownComponent
                      title="🏖️ or ⛰️"
                      options={["🏖️", "⛰️"]}
                    />
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
                  <p className="text-center">
                    <ResizableInput
                      className="leading-7 text-center"
                      value={aboutme}
                      extraWidth={10}
                    />
                  </p>
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
                    <ResizableInput value={hobbies} extraWidth={5} />
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto m-10 mt-20 ">
                  <div className="card-body">
                    <h2 className="card-title">
                      Idea para una primera cita 👀
                    </h2>
                    <ResizableInput value={idealfirstdate} extraWidth={5} />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="h-screen  m-5 mb-20 border-4 border-orange-500 mx-auto">
              {" "}
            </div> */}
          </div>
          <div className="fixed md:h-screen  md:w-[6%] bg-gray-200 md:top-0 md:right-0 blur opacity-80 bottom-0 h-[12vh] p-2 w-full"></div>
          <div className="fixed md:h-screen  md:w-[6%] md:bg-gray-200 md:top-0 md:right-0 bottom-0 h-[12vh] p-2 w-full">
            <Interaction forProfile={true} />
          </div>{" "}
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </div>
  );
};

export default Profile;
