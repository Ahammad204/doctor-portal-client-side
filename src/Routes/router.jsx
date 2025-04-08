import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/home";
import Login from "../Pages/LoginPage/Login";
import Error from "../Pages/ErrorPage/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children:[
        {
            path:'/',
            element: <Home></Home>
        },{
          path:'/login',
          element: <Login></Login>
        }
    ]
  },
]);
