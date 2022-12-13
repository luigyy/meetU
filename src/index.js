import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { UserContextProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </UserContextProvider>
);
