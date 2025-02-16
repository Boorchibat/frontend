import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { TaskContextProvider, UserContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
