import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App";

import { theme } from "./theme";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
