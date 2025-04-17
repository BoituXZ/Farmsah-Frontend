// src/components/Header.jsx
import { Box, Typography, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

const Header = ({ title, mode, toggleMode, screenSize, onSidebarToggle }) => {
  return (
    <Box
      id="pageHeader"
      sx={{
        display: "flex",
        justifyContent: screenSize ? "start" : "space-between",
        alignItems: "center",
        width: "100%",
        maxHeight: "4.1rem",
        padding: "1rem",
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        borderBottom: "1px solid",
        borderColor: (theme) => theme.palette.divider,
        gap: screenSize ? "1rem" : 0,
      }}
    >
      {/* Hamburger menu (small screens only) */}
      {screenSize && (
        <IconButton onClick={onSidebarToggle} color="inherit">
          <MenuIcon />
        </IconButton>
      )}

      {/* Dynamic Page Title */}
      <Typography
        variant="h1"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "600",
          fontFamily: (theme) => theme.typography.h1.fontFamily,
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleMode: PropTypes.func.isRequired,
  screenSize: PropTypes.bool.isRequired,
  onSidebarToggle: PropTypes.func.isRequired,
};

export default Header;
