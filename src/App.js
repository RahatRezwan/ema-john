import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/shop",
                    loader: () => fetch("products.json"),
                    element: <Shop />,
                },
                {
                    path: "/orders",
                    loader: () => fetch("products.json"),
                    element: <Orders />,
                },
                {
                    path: "/inventory",
                    element: <Inventory />,
                },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
