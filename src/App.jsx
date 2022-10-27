import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Interaction from "./components/Interaction";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";

function App() {
  const LOGGED = true;
  return (
    <div className="">
      {LOGGED ? (
        <>
          <Navbar />
          <Main />
        </>
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
