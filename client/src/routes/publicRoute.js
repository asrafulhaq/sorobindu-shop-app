import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";
import Layout from "../components/Layout/Layout";
import Cart from "../pages/Cart/Cart";
import Wish from "../pages/WishPage/Wish";
import Admin from "../pages/Admin/Admin";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Brand from "../components/Brands/Brand";
import Tag from "../components/Tag/Tag";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";

// create public routes
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/:slug",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wish",
        element: <Wish />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "brand",
            element: <Brand />,
          },
          {
            path: "tag",
            element: <Tag />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "product",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

// export routes
export default publicRoute;
