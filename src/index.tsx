// modules
import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";
import ApolloProvider from "./contexts/ApolloContext";
import ThemeProvider from "./contexts/ThemeContext";

// styles
import "./index.css";

ReactDOM.render(
  <ApolloProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
