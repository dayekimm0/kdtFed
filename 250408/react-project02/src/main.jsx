import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Root from "./components/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "home", element: <Home /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
