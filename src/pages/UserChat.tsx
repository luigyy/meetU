import React from "react";
import { useParams } from "react-router-dom";
import HeaderForNavbarButtons from "../components/HeaderForNavbarButtons";
import WriteMessage from "../components/WriteMessage";

interface UserChatProps {}

const UserChat: React.FC<UserChatProps> = ({}) => {
  const { id } = useParams();
  //   const { people } = useStateContext();
  //   const person = people!.filter((item) => item.name === id);

  const dummyMessages = [
    { sender: "me", text: "Hello jon" },
    { sender: "jon", text: "hello you" },
    {
      sender: "me",
      text: "Hello jon",
    },
    { sender: "jon", text: "hello you" },
  ];
  return (
    <div className="overflow-hidden">
      <HeaderForNavbarButtons title={id || "title"} path="/chats" />
      <div className="mx-10  overflow-y-scroll h-[calc(100vh-200px)] ">
        <>
          {dummyMessages.map((item) => (
            <>
              {item.sender === "me" ? (
                <div className="flex justify-end">
                  <p className="px-5 py-2 max-w-[70%]  text-center rounded-3xl border m-2  bg-gray-100 inline-block  ml-auto">
                    {item.text}
                  </p>
                </div>
              ) : (
                <div className="flex justify-start">
                  <img
                    src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                    alt=""
                    className="w-7 object-contain rounded-full"
                  />
                  <p className="px-5  py-2 rounded-3xl  text-center m-2 border inline-block">
                    {item.text}
                  </p>
                </div>
              )}
            </>
          ))}
        </>
      </div>
      <WriteMessage />
    </div>
  );
};

export default UserChat;
