import React from "react";
import baseStyled, {
  ThemedStyledInterface,
  ThemeProvider
} from "styled-components";

export const theme = {
  color: {
    primary: "#7484FB",
    title: "#1A202C",
    text: "#4A5568",
    lightTitle: "#FFFFFF",
    lightText: "#A0AEC0",
    background: "#182432",
    lightBackground: "#F5F7F9",
    grey: "#d1ddeb",
    primaries: [
      "#100fad",
      "#1b29c5",
      "#2235d2",
      "#2c41e0",
      "#324aeb",
      "#5066f9",
      "#7484fb",
      "#a0a7fc",
      "#c7cafd",
      "#e9eaff"
    ],
    greys: [
      "#313d4d",
      "#445365",
      "#54667c",
      "#657a93",
      "#738aa5",
      "#889bb4",
      "#9daec5",
      "#b8c6d8",
      "#d1ddeb",
      "#ebf1fc"
    ]
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

const ThemeContextProvider: React.FC = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeContextProvider;
