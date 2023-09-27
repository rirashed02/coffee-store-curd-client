import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/updateCoffee";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        loader: () => fetch('http://localhost:5000/coffees')
    },
    {
        path:'coffees',
        element:<AddCoffee></AddCoffee>,
    },
    {
        path:'/updates/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
    }
])
export default router