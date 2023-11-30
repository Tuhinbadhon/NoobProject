import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import Compare from "../pages/Compare/Compare";
import Wishlist from "../pages/Wishlist/Wishlist";
import Products from "../pages/Products/Products";

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
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
    ],
  },
]);
