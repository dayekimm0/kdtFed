import { Outlet } from "react-router-dom";
import Globalstyles from "./styles/GlobalStyles.styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <ReactQueryDevtools initialIsOpen={true} />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
