import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <ProSidebarProvider>
      <App/>
      </ProSidebarProvider>
    </BrowserRouter>
  </ThemeProvider>
);
