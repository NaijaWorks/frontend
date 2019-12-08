import {} from "react";
import { CSSProp } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: number[];
    space: number[];
    fontSizes: number[];
    fontWeights: number[];
    radii: (number | string)[];
    borders: (number | string)[];
    lineHeights: {
      solid: number;
      title: number;
      copy: number;
    };
    letterSpacing: {
      normal: string;
      tracked: string;
      tight: string;
      mega: string;
    };
    fonts: {
      sansSerif: string;
    };
    shadows: {
      shallow: string;
      deep: string;
      deepDark: string;
    };
    colors: {
      white: string;
      primary: string;
      title: string;
      text: string;
      lightTitle: string;
      lightText: string;
      background: string;
      lightBackground: string;
      grey: string;
      greys: string[];
      primaries: string[];
    };
  }
}

// Add support for styled-components's `css` prop
declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
