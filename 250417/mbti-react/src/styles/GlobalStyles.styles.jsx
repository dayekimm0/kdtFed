import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SimKyungha from "../fonts/SimKyungha.ttf"; //src에서는 폰트 import로만

const GlobalStyles = createGlobalStyle`
//reset
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
    --accent: #8bc7ff;
    --border: #ccc;
  }

  @font-face {
    font-family: "SimKyungha";
    // 1. src에서 폰트 찾아오기
    src: url(${SimKyungha}) format("truetype");
    
    // 2. public에서 폰트 찾아오기
    /* src: url("/fonts/SimKyungha.ttf") format("truetype");// /:public에서 시작 */
  }

// contents
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: "SimKyungha";
  }
`;

export default GlobalStyles;
