import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Interaction from "./components/Interaction";
import Landing from "./pages/Landing";

function App() {
  const LOGGED = false;
  return (
    <div className="">
      {LOGGED ? (
        <>
          <Navbar />
          <Main />
          <Interaction />
        </>
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
