import { Outlet } from "react-router-dom";
import Globalstyles from "./styles/GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
