import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./routes/home";
import Login, { loader as loginLoader } from "./routes/_auth.login";
import Products, { loader as productsLoader } from "./routes/products";
import AddRoute, { loader as addProductLoader } from "./routes/add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginLoader,
  },
  {
    path: "/products",
    element: <Products />,
    loader: productsLoader,
  },
  {
    path: "/add",
    element: <AddRoute />,
    loader: addProductLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
