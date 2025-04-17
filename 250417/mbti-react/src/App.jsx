import GlobalStyles from "./styles/GlobalStyles.styles"; //스타일
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap CSS
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 페이지 라우팅
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

//페이지라우팅 -> RouterProvider
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 할당
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
