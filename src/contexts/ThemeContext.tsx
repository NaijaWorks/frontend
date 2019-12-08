import React from "react";
import baseStyled, {
  ThemedStyledInterface,
  ThemeProvider
} from "styled-components";

export const theme = {
  breakpoints: ["767px"],
  space: [
    0, // 0
    1, // 1
    2, // 2
    3, // 3
    5, // 4
    8, // 5
    13, // 6
    21, // 7
    34, // 8
    55, // 9
    89, // 10
    144, // 11
    233 // 12
  ],
  fontSizes: [
    10, // 0
    12, // 1
    14, // 2
    16, // 3
    20, // 4
    24, // 5
    32, // 6
    40, // 7
    48 // 8
  ],
  fontWeights: [
    100, // 0
    200, // 1
    300, // 2
    400, // 3
    500, // 4
    600, // 5
    700, // 6
    800, // 7
    900 // 8
  ],
  radii: [
    0, // 0
    2, // 1
    6, // 2
    16, // 3
    9999, // 4
    "100%" // 5
  ],
  borders: [
    0, // 0
    "1px solid", // 1
    "2px solid", // 2
    "4px solid" // 3
  ],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacing: {
    normal: "normal",
    tracked: "0.1em",
    tight: "0.05em",
    mega: "0.25em"
  },
  fonts: {
    sansSerif:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
  },
  shadows: {
    shallow:
      "0px 6px 7px rgba(151, 162, 185, 0.09), 0px 5px 15px rgba(151, 162, 185, 0.07), 0px 14px 19px rgba(151, 162, 185, 0.07)",
    deep:
      "0px 11px 15px rgba(151, 162, 185, 0.2), 0px 9px 46px rgba(151, 162, 185, 0.12), 0px 24px 38px rgba(151, 162, 185, 0.14)",
    deepDark:
      "0px 11px 15px rgba(26, 32, 44, 0.2), 0px 9px 46px rgba(151, 162, 185, 0.12), 0px 24px 38px rgba(26, 32, 44, 0.14)"
  },

  colors: {
    white: "#FFFFFF",
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
