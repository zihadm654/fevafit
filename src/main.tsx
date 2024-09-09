import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./components/Analytics.js";
import Enoc from "./pages/enoc.js";
import Wellx from "./pages/wellx.js";
import Program from "./pages/program.js";
import Dashboard from "./pages/dashboard.js";
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
  {
    path: "/program",
    element: <Program />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
