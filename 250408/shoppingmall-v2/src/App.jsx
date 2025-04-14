import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./AuthContext";

function App() {
  // const [authenticate, setAuthenticate] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "products/:id",
          element: <PrivateRoute />,
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
