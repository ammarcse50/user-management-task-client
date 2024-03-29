import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home";
import NewUser from "../components/NewUser";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
         loader : () => fetch('http://localhost:5000/users')
      },
      {
        path: "/newuser",
        element: <NewUser></NewUser>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        
      },
    ],
  },
]);

export default router;
