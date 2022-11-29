import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, createRoutesFromElements } from "react-router-dom";
import Products from "./routes/Products";
import Reports from "./routes/Reports";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
