import React from "react";
import { extendTheme } from "@chakra-ui/react";

const sizes = {
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    fullscreen: "100vh",
    "3xs": "13rem",
    "2xs": "16rem",
    xs: "18rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    box: {
      desktop: "483px",
      form: "381px",
    },
  },
};





const font = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.625rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "1.875rem",
    "5xl": "2.25rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.04em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.06em",
    widest: "0.1em",
    widestle: "0.04em",
    widestles: "0.08em",
    widestless:'0.11em',
    widester: "0.12em",
  },
};

const theme = extendTheme({
  sizes,
  colors: {
    brand: {
      primary: {
        red: "#FF5252",
      },
      neutral: {
        white: "#ffffff",
        lightgrayishviolet: "#DEDDDF",
        darkgrayishviolet: "#8E8593",
        thinviolet: "#B19DF5",
        verydarkviolet: "#21092F",
      },
    },
  },
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`,
  },
  ...font,
});

export default theme;
