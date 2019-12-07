// modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as RouterProvider } from "react-router-dom";

// components
import App from "./App";
import ApolloProvider from "./contexts/ApolloContext";
import ThemeProvider from "./contexts/ThemeContext";

// styles
import "./index.css";

ReactDOM.render(
  <ApolloProvider>
    <ThemeProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
