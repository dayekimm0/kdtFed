import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import Root from "./Root.tsx";
import { defaultTheme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <Root />
    </ThemeProvider>
  </RecoilRoot>
);
