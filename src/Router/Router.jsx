import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ProductList from "../Pages/ProductList/ProductList";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import Home from "../Pages/Home/Home";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/productList',
                element:<ProductList/>
            },
            {
                path:'/checkout',
                element:<CheckoutPage/>
            }
        ]
    }
])
export default routes;