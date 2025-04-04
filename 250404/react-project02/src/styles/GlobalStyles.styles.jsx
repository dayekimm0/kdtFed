import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  text-decoration: none;
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
  width:100%;
  height :100vh;
  font-size: 1.6rem;
  background: url("./public/bg1.JPG") center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;
