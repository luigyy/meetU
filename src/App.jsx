import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Settings from "./pages/navbar/Settings";
import Chats from "./pages/navbar/Chats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  //temp
  const LOGGED = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={LOGGED ? <Main /> : <Landing />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
