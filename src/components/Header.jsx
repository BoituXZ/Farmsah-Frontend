// src/components/Header.jsx
import { AppBar, Box, Typography, IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const Header = ({ title, mode, toggleMode, screenSize, onSidebarToggle }) => {
  const theme = useTheme(); // Use the theme hook for easier access

  return (
    // Swapped Box for AppBar for semantic correctness, styled with glass morphism
    <AppBar
      position="sticky" // Makes the header stick to the top of the scrollable container
      elevation={0} // Remove default shadow as we are using a custom glass style
      sx={{
        // Glass morphism styles
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.5)' 
          : 'rgba(31, 31, 31, 0.5)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        
        // Original layout styles preserved
        display: "flex",
        flexDirection: "row", // AppBar defaults to row, but explicit is good
        alignItems: "center",
        justifyContent: "space-between", // This will handle all cases
        color: "text.primary",
        p: { xs: '0.5rem 1rem', md: '1rem' }, // Responsive padding
        height: '64px', // Standard MUI header height for consistency
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* Hamburger menu (small screens only) */}
        {screenSize && (
          <IconButton onClick={onSidebarToggle} color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
        )}

        {/* Dynamic Page Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            fontFamily: theme.typography.h1.fontFamily,
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Light/Dark Mode Toggle Button */}
      <IconButton onClick={toggleMode} color="inherit">
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </AppBar>
  );
};

// All prop types are preserved
Header.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleMode: PropTypes.func.isRequired,
  screenSize: PropTypes.bool.isRequired,
  onSidebarToggle: PropTypes.func.isRequired,
};

export default Header;