import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import UserContext from "./UserContext/UserContext.jsx";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
        <RouterProvider router={router}></RouterProvider>
    </UserContext>
  </React.StrictMode>
);
