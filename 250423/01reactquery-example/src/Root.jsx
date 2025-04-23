import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/GlobalStyles.styles";

function Root() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Outlet />
    </>
  );
}

export default Root;
