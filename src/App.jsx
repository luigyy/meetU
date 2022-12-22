import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./routes";
import PrivateRoutes from "./components/PrivateRoutes";
import PublicRoutes from "./components/PublicRoutes";
import NotFound from "./pages/NotFound";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useUserContext } from "./contexts/UserContext";
import UserChat from "./pages/UserChat";

const DEV_URL = "http://localhost:5000/checkToken";

//TODO: logged and setLogged must be change to contain user data

function App() {
  //
  const { logged, setLogged } = useUserContext();

  //verify cookie
  const [cookies, setCookies] = useCookies();

  const verifyCookie = () => {
    axios
      .post(DEV_URL, {
        headers: { "Content-Type": "application/json", auth: cookies["token"] },
      })
      .then((res) => {
        setCookies["auth"] = res.data.data.token; //update token
        setLogged(true); //set this to userdata
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

        <Route
          path="/chats/:id"
          element={
            <PrivateRoutes logged={logged}>
              <UserChat />
            </PrivateRoutes>
          }
        ></Route>
        {/**protected routes */}

        {/* not found handler */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
