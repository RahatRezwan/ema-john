import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./components/Loaders/productsAndCartLoader";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import SignUP from "./components/SignUp/SignUP";
import Main from "./layouts/Main";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main />,
         children: [
            {
               path: "/shop",
               loader: productsAndCartLoader,
               element: <Shop />,
            },
            {
               path: "/orders",
               loader: productsAndCartLoader,
               element: <Orders />,
            },
            {
               path: "/inventory",
               element: <Inventory />,
            },
            {
               path: "/about",
               element: <About />,
            },
            {
               path: "/login",
               element: <Login />,
            },
            {
               path: "/signup",
               element: <SignUP />,
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
