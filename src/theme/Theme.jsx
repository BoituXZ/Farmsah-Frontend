import { createTheme } from "@mui/material";

export const Theme = (mode) => {
  // Ensure mode is a valid string
  if (typeof mode !== "string" || (mode !== "light" && mode !== "dark")) {
    mode = "light"; // Default to light mode if invalid
  }

  return createTheme({
    palette: {
      mode, // Dynamic mode: 'light' or 'dark'
      ...(mode === "light"
        ? {
            background: {
              gradient: "linear-gradient(to bottom,rgba(175, 206, 210, 0.75), #f0f0f0)",
              gradient2: "rgba(175, 206, 210, 0.37)",
              black: "#000000",
              blue: "#8fc9e5",
              green: "#2c5f2dff",
              white: "#f9f9f9",
              white2: "rgba(249, 249, 249, 0.55)", // White with opacity
              yellow: "#f7d17b",
              beige: "#ede0cf",
              default: "#f9f9f9", // Background for light mode
              paper: "#ffffff",
              backgroundImage: "url('https://images.pexels.com/photos/6738360/pexels-photo-6738360.jpeg')",

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
            background: {
              black: "#1f1f1f",
              blue: "#2d5177", // Darker blue for dark mode
              green: "#2c5f2dff", // Deep green
              white: "#1f1f1f", // Dark gray for dark mode background
              yellow: "#a68c4a", // Muted yellow for dark mode
              beige: "#3d3a32", // Muted beige
              default: "#1f1f1f", // Background for dark mode
              paper: "#1f1f1f",
              backgroundImage: "url('https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg')",
              
              // backgroundImage: "url('https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg')",

            },
            text: {
              primary: "rgba(255, 255, 255, 0.81)", // White text for dark mode
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
      fontFamily: "'Merriweather Sans', serif", // Default font
      h1: { fontFamily: "'Montserrat', serif", fontSize: "2rem", fontWeight: 700 },
      h2: { fontFamily: "'Lato', serif", fontSize: "1.5rem", fontWeight: 600 },
      subtitle1: { fontFamily: "'Merriweather Sans', serif", fontSize: "1rem", fontWeight: 400 },
      body1: { fontFamily: "'Merriweather Sans', serif", fontSize: "1rem" },
      body2: { fontFamily: "'Playfair Display', serif", fontSize: "0.875rem" },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "'Merriweather Sans', serif", // Default font for the body
          },
        },
      },
    },
  });
};
