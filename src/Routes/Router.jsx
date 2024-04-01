import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home";
import NewUser from "../components/NewUser";
import Users from "../components/Users";
import UpdateUser from "../components/UpdateUser";

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
        path: "/user/:id",
        element: <UpdateUser></UpdateUser>,
        loader:  ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
        
      },
    ],
  },
]);

export default router;
