import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import router from "./Router.jsx";
import client from "./client.js";

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
