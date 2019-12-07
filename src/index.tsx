// modules
import React from "react";
import ReactDOM from "react-dom";

// components
import App from "./App";
import ApolloContextProvider from "./contexts/ApolloContext";

// styles
import "./index.css";

ReactDOM.render(
  <ApolloContextProvider>
    <App />
  </ApolloContextProvider>,
  document.getElementById("root")
);
