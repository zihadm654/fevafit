import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Analytics from "./components/Analytics.jsx";
import Enoc from "./pages/enoc.jsx";
import Wellx from "./pages/wellx.jsx";
import Onplan from "./pages/onplan.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/enoc",
    element: <Enoc />,
  },
  {
    path: "/wellx",
    element: <Wellx />,
  },
  {
    path: "/onplan",
    element: <Onplan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
