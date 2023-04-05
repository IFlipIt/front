import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

// import { AuthProvider } from '.hooks/auth'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
        {/* <AuthProvider>
     </AuthProvider> */}
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
