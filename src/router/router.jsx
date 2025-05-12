import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import About from "../components/routes/about/About";
import Dashboard from "../components/routes/dashboard/Dashboard";
import DashboardSemester from "../components/routes/dashboard/DashboardSemester";
import Result from "../components/routes/dashboard/Result";
import Semesters from "../components/routes/dashboard/Semesters";
import Login from "../components/routes/login/Login";
import Required from "../Required";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Required>
        <Dashboard />
      </Required>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardSemester />,
      },
      {
        path: "/dashboard/semester/:id",
        element: <Semesters />,
      },
      {
        path: "/dashboard/semester/:id/result/:resultId",
        element: <Result />,
      },
    ],
  },
]);


export default router;
