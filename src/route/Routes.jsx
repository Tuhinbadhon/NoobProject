import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ProductPage from "./../components/Products/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);
