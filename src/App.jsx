import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Interaction from "./components/Interaction";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import Settings from "./pages/navbar/Settings";
import Chats from "./pages/navbar/Chats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const TESTING = true;
  const LOGGED = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={LOGGED ? <Chats /> : <Landing />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </Router>
  );
}

export default App;
