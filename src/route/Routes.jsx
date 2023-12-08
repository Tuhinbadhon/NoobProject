import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "./../pages/Home/Home/Home";
import About from "../pages/Abouts/About";
import Profile from "./../pages/Users/Profile";
import Service from "../pages/Services/Service";
import Contact from "../pages/Contact/Contact";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Login from "../pages/Users/Login";
import Signup from "../pages/Users/Signup";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "services", element: <Service /> },
      { path: "contact", element: <Contact /> },
      { path: "profile", element: <Profile /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Signup /> },
      { path: "product/:productId", element: <ProductDetails /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
