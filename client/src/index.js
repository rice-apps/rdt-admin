import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/LoginPage";
import RegisterEvent from "./pages/RegisterEventPage";
import Homepage from "./pages/HomePage";
import EditEvent from "./pages/EditEventPage";
import Attendance from "./components/login/attendance";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {

    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/register",
    element: <RegisterEvent />,
  },
  {
    path: "/edit",
    element: <EditEvent />,
  },
  {
    path: "/attendance",
    element: <Attendance />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
