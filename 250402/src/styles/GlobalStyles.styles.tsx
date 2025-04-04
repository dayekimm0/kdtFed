import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  ul ,li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  :root {
    --light-color: #fff;
    --dark-color: #000;
    --border-color: #ccc;
    --accent-color: #dc143c;
    --button-color: #ff5722;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
