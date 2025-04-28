import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :root {
    --light: #fff;
    --dark: #000;
    --border: #ccc;
    --accent: #dc143c;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.bgColor}
  }
`;

export default GlobalStyles;
