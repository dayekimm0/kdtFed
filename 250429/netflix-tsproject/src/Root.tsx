import Globalstyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
