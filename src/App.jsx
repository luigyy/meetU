import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Interaction from "./components/Interaction";
import Hero from "./pages/Hero";

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
        <Hero />
      )}
    </div>
  );
}

export default App;
