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
    --dark: #000;
    --light: #fff;
    --accent: #dc143c;
    --border: #ccc;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
