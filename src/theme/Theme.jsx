import { createTheme } from "@mui/material";

export const homeTheme = (mode) =>
  createTheme({
    palette: {
      mode, // Dynamic mode: 'light' or 'dark'
      ...(mode === "light"
        ? {
            // Light Mode Palette
            background: {
              black: "#000000",
              blue: "#8fc9e5",
              green: "#5a9367",
              white: "#f9f9f9",
              yellow: "#f7d17b",
              beige: "#ede0cf",
              default: "#f9f9f9", // Background for light mode
              paper: "#ffffff",
            },
            text: {
              primary: "#000000", // Black text for light mode
              secondary: "#5a9367", // Green for secondary text
            },
            accent: {
              lightBlue: "#cce8f5",
              softBrown: "#a7846c",
              darkGreen: "#355e3b",
            },
          }
        : {
            // Dark Mode Palette
            background: {
              black: "#000000",
              blue: "#2d5177", // Darker blue for dark mode
              green: "#355e3b", // Deep green
              white: "#1f1f1f", // Dark gray for dark mode background
              yellow: "#a68c4a", // Muted yellow for dark mode
              beige: "#3d3a32", // Muted beige
              default: "#121212", // Background for dark mode
              paper: "#1f1f1f",
            },
            text: {
              primary: "#ffffff", // White text for dark mode
              secondary: "#8fc9e5", // Light blue for secondary text
            },
            accent: {
              lightBlue: "#8fc9e5",
              softBrown: "#5c4b3b",
              darkGreen: "#1d2e23",
            },
          }),
    },
    typography: {
      fontFamily: "'Merriweather Sans', 'serif'", // Default font family
      h1: {
        fontFamily: "'Montserrat', 'serif'",
        fontSize: "2rem", // Define sizes explicitly
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Lato', 'serif'",
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: "'Merriweather Sans', 'serif'",
        fontSize: "1rem",
        fontWeight: 400,
      },
      body1: {
        fontFamily: "'Merriweather Sans', 'serif'",
        fontSize: "1rem",
      },
      body2: {
        fontFamily: "'Playfair Display', 'serif'",
        fontSize: "0.875rem",
      },
    },
    
  });
