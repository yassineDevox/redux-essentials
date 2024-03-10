import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";
import Home from "./screens/Home";
import Todos from "./screens/Todos";
import Users from "./screens/Users";
import Layout from "./shared/layout";
import Login from "./screens/Auth/Login";
import ForgetPass from "./screens/Auth/ForgetPass";
import ResetPass from "./screens/Auth/ResetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      }, {
        path: "todos",
        element: <Todos />,
      }, {
        path: "users",
        element: <Users />,
      },
    ]
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      }, {
        path: "forget",
        element: <ForgetPass />,
      }, {
        path: "reset",
        element: <ResetPass />,
      },
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
