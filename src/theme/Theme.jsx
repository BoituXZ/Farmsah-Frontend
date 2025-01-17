import { createTheme } from "@mui/material";

export const homeTheme = createTheme({
  palette: {
    background: {
      black: '#000000',    // Black background
      blue: '#8fc9e5',     // Soft sky blue
      green: '#5a9367',    // Calming forest green
      white: '#f9f9f9',    // Glossy white
      yellow: '#f7d17b',   // Warm, soft yellow
      beige: '#ede0cf',    // Neutral, earthy beige
    },
    accent: {
      lightBlue: '#cce8f5', // Subtle, light blue accent
      softBrown: '#a7846c', // Complementary brown
      darkGreen: '#355e3b', // Deep green for strong contrast
    },
  },
  typography: {
    fontFamily: {
      primary: "'Merriweather Sans', 'serif'",
      secondary: "'Playfair Display', 'serif'",
      heading: "'Montserrat', 'serif'",
      heading2: "'Lato', 'serif'",
    },
    h1: {
      fontFamily: "'Montserrat', 'serif'",
    },
    h2: {
      fontFamily: "'Lato', 'serif'",
    },
    body1: {
      fontFamily: "'Merriweather Sans', 'serif'",
    },
    body2: {
      fontFamily: "'Playfair Display', 'serif'",
    },
  },
});
