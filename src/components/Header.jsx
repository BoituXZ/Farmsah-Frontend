// src/components/Header.jsx
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ title, mode, toggleMode }) => {
  return (
    <Box
      id="pageHeader"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "1rem",
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        borderBottom: "1px solid",
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      {/* Dynamic Page Title */}
      <Typography
        variant="h1"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "500",
        }}
      >
        {title}
      </Typography>

      {/* Light/Dark Mode Toggle Button */}
      <IconButton onClick={toggleMode} color="inherit">
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Box>
  );
};

export default Header;
