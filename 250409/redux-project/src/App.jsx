import { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("Login : ", authenticate);
  }, [authenticate]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login setAuthenticate={setAuthenticate} />,
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
