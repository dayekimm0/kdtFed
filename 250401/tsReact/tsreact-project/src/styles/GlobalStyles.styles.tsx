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
  }
`;

export default GlobalStyles;
