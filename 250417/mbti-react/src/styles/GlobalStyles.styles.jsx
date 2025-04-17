import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SimKyungha from "../fonts/SimKyungha.ttf";

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
    color: inherit;
  }

  :root {
    --light: #fff;
    --dark: #000;
    --accent: #dc143c;
    --border: #ccc;
  }

  @font-face {
    font-family: "Simkyungha";
    src: url(${SimKyungha}) format("truetype");
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    font-family: "Simkyungha"
  }
`;

export default GlobalStyles;
