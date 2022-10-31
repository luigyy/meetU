import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Interaction from "./components/Interaction";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Settings from "./pages/navbar/Settings";
import Chats from "./pages/navbar/Chats";

function App() {
  const LOGGED = true;
  return (
    <div className="">
      {LOGGED ? (
        <>
          <Chats />
        </>
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
