import React from "react";
import ThemeProvider from "../src/contexts/ThemeContext";
import ApolloProvider from "../src/contexts/ApolloContext";

import { configure, addDecorator } from "@storybook/react";

addDecorator(storyFn => (
  <ApolloProvider>
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </ApolloProvider>
));

function loadStories() {
  const req = require.context("../src", true, /\.stories\.(tsx|mdx)$/);
  req.keys().forEach(fileName => req(fileName));
}

configure(loadStories, module);
