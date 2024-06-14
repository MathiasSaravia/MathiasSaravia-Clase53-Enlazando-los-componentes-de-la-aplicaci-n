import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Products from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import GenreInDb from "../pages/GenreInDb";
import LastMovieDb from "../pages/LastMovieDb";
import ContentMovie from "../pages/ContentMovie";
import Error from "../pages/Error";

const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children:[
        {
        path:"/",
        element:<Dashboard/>
        },
        {
        path:"/products",
        element:<Products/>
        },
        {
        path:"/users",
        element:<Users/>
        },
        {
        path:"/orders",
        element:<Orders/>
        },
        {
        path:"/generos",
        element:<GenreInDb/>
        },
        {
        path:"/ultima-pelicula",
        element:<LastMovieDb/>
        },
        {
        path:"/error",
        element:<Error/>
        }
        
]
}])

export const ProvidieRouter = () => <RouterProvider router={router}/>