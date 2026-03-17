import { createBrowserRouter, } from "react-router";
import Main from "../components/layout/Main";
import Home from "../pages/Home";
import CartPage from "../pages/Cart";



const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      }
    ]
  },
]);

export default router;