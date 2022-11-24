import "./App.css";
import "./index.css";
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Settings from "./pages/navbar/Settings";
import Chats from "./pages/navbar/Chats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { protectedRoutes, publicRoutes } from "./routes";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import authLogin from "./authentication/authLogin";
import authRegister from "./authentication/authRegister";

function App() {
  // useEffect(() => {}, []);
  //see ./routes.js for routes
  const LOGGED = false;
  return (
    <Router>
      <Routes>
        {/**public routes */}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PublicRoutes logged={LOGGED}>{route.component}</PublicRoutes>
            }
          />
        ))}
        {/**public routes */}

        {/**protected routes */}
        {protectedRoutes.map((route) => (
          <Route
            path={route.path}
            element={
              <PrivateRoutes logged={LOGGED}>{route.component}</PrivateRoutes>
            }
            key={route.path}
          />
        ))}
        {/**protected routes */}

        {/* not found handler */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
