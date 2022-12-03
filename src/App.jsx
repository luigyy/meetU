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
import { useStateContext } from "./contexts/ContextProvider";
import { useCookies } from "react-cookie";
import axios from "axios";

const DEV_URL = "http://localhost:5000/checkToken";

//TODO: logged and setLogged must be change to contain user data

function App() {
  //
  const { logged, setLogged } = useStateContext();

  //verify cookie
  const [cookies, setCookies] = useCookies();

  const verifyCookie = () => {
    axios
      .post(DEV_URL, {
        headers: { "Content-Type": "application/json", auth: cookies["token"] },
      })
      .then((res) => {
        setCookies["auth"] = res.data.data.token; //update token
        setLogged(true); //logged
      })
      .catch((err) => console.log(err)); //);
  };
  if (cookies["token"]) verifyCookie();
  //verify cookie

  return (
    <Router>
      <Routes>
        {/**public routes */}
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PublicRoutes logged={logged}>{route.component}</PublicRoutes>
            }
          />
        ))}
        {/**public routes */}

        {/**protected routes */}
        {protectedRoutes.map((route) => (
          <Route
            path={route.path}
            element={
              <PrivateRoutes logged={logged}>{route.component}</PrivateRoutes>
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
