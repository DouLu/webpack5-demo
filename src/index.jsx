import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  </React.StrictMode>
);
