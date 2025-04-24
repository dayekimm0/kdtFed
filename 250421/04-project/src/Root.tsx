// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Globalstyles from "./styles/GlobalStyles.styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme.ts";
import { isDarkAtom } from "./atoms.ts";

// const Button = styled.button`
//   position: absolute;
//   border: none;
//   top: 30px;
//   left: 30px;
//   padding: 8px 14px;
//   border-radius: 16px;
//   cursor: pointer;
// `;

function Root() {
  const isDark = useRecoilValue(isDarkAtom);
  console.log(isDark);
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Globalstyles />
        <ReactQueryDevtools initialIsOpen={true} />
        {/* <Button onClick={toggleDark}>Toggle Mode</Button> */}
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
