// src/pages/user/PagesLayout.jsx
import {
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import { useState, createContext, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Theme } from "../../theme/Theme";
import Header from "../../components/Header";
import Sidebar from "./Sidebar/Sidebar";

// --- Original context and setup preserved ---
const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);
const drawerWidth = 240;

const PagesLayout = () => {
  // --- All original state and logic is preserved ---
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const location = useLocation();

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  const getTitle = (pathname) => {
    const path = pathname.split("/")[2];
    const pageTitle = path?.charAt(0).toUpperCase() + path?.slice(1);
    return pageTitle || "Dashboard";
  };

  // --- Glassmorphism style definition for reuse ---
  const glassmorphismStyle = (theme) => ({
    background: theme.palette.mode === 'light' 
      ? 'rgba(255, 255, 255, 0.4)' 
      : 'rgba(31, 31, 31, 0.4)',
    backdropFilter: 'blur(15px)',
    borderRight: `1px solid rgba(255, 255, 255, 0.2)`,
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={Theme(mode)}>
        <CssBaseline />
        <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
          {/* === STYLING APPLIED TO SIDEBAR CONTAINERS === */}
          {isSmallScreen ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={toggleDrawer}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  ...glassmorphismStyle(Theme(mode)), // Apply glass style
                  background: 'none', // Drawer itself needs no background, the paper has it
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <Sidebar onClose={toggleDrawer} />
            </Drawer>
          ) : (
            <Box
              sx={{
                ...glassmorphismStyle(Theme(mode)), // Apply glass style
                width: drawerWidth,
                flexShrink: 0,
                display: { xs: "none", md: "block" },
              }}
            >
              <Sidebar />
            </Box>
          )}

          {/* Main content area preserved */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100%",
              overflowY: "auto",
              "&::-webkit-scrollbar": { width: "5px" },
              "&::-webkit-scrollbar-thumb": { backgroundColor: "#2c5f2dff" },
              "&::-webkit-scrollbar-track": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
              "&::-webkit-scrollbar-thumb:hover": { background: "#1e4020" },
            }}
          >
            {/* The Header and Outlet structure is preserved exactly */}
            <Header
              title={getTitle(location.pathname)}
              mode={mode}
              toggleMode={toggleMode}
              screenSize={isSmallScreen}
              onSidebarToggle={toggleDrawer}
            />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default PagesLayout;