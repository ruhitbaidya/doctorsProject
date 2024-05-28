import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Pages/Root/Root";
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/About";
import AllStaff from "../Components/Pages/Allstafff/AllStaff";
import DoctorList from "../Components/Pages/DoctorList/DoctorList";
import Contact from "../Components/Pages/Contact/Contact";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import ProcateRoute from "./ProtactRoute";
import Dashboard from "../Components/Dashoboard/Dashboard";
import AdminHome from "../Components/Dashoboard/AdminHome";
import AddDoctor from "../Components/Dashoboard/AddDoctor";
import AddStaff from "../Components/Dashoboard/AddStaff";
import AllUser from "../Components/Dashoboard/AllUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allStaff",
        element: (
          <ProcateRoute>
            <AllStaff></AllStaff>
          </ProcateRoute>
        ),
      },
      {
        path: "/doctors",
        element: <DoctorList></DoctorList>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path : "dashboard",
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : "home",
        element : <AdminHome></AdminHome>
      },
      {
        path : "adddoctor",
        element : <AddDoctor></AddDoctor>
      },
      {
        path : "addStaff",
        element : <AddStaff></AddStaff>
      },
      {
        path : "alluser",
        element : <AllUser></AllUser>
      },
    ]
  }
]);

export default router;
