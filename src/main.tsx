import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./components/Analytics.js";
import Enoc from "./pages/enoc.js";
import Wellx from "./pages/wellx.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/corporates/enoc",
    element: <Enoc />,
  },
  {
    path: "/corporates/wellx",
    element: <Wellx />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
