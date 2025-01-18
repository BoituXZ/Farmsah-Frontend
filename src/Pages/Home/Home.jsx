import React, { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Typography, IconButton } from "@mui/material";
import { homeTheme } from "../../theme/Theme";
import StatCard from "../../components/Card";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Home = () => {
  const [mode, setMode] = useState("light"); // Light mode by default

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={homeTheme(mode)}>
      <CssBaseline />
      <Box
        id="page"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderBottom: "1px dashed red",
          minHeight: "100vh",
          
        }}
      >
        {/* Header */}
        <Box
          id="pageHeader"
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            padding: "0.2rem",
            display: "flex",
            justifyContent: "space-between",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: "400",
              border: "solid 1px blue",
            }}
          >
            Dashboard
          </Typography>

          {/* Toggle Mode Button */}
          <IconButton onClick={toggleMode} color="inherit" sx={{border: "solid 1px black"}}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>

        {/* Body Content */}
        <Box id="bodyContent" sx={{ padding: "1rem" }}>
          <Box id="bodyOverview">
            <Typography
              variant="h1"
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                padding: "1rem",
              }}
            >
              Overview
            </Typography>
            <Box
              id="overviewContent"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                width: "100%",
                padding: "0.2rem",
              }}
            >
              <StatCard title="Crops" value="1203Kg" />
              <StatCard title="Weather" value="48°F" />
              <StatCard title="Water" value="129,000L" />
              <StatCard title="Profits" value="$2,033" />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
