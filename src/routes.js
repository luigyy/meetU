import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Settings from "./pages/navbar/Settings";
import Chats from "./pages/navbar/Chats";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

export const protectedRoutes = [
  { path: "/", component: <Main /> },
  { path: "/settings", component: <Settings /> },
  { path: "/chats", component: <Chats /> },
  { path: "/Profile", component: <Profile /> },
  { path: "/editProfile", component: <EditProfile /> },
];

export const publicRoutes = [{ path: "/landing", component: <Landing /> }];
