import { Box, CssBaseline, Divider, ThemeProvider, useMediaQuery } from "@mui/material";
import { useState, createContext, useContext } from "react";
import { Theme } from "../../theme/Theme";
import Header from "../../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import AddComponent from "../../components/AddComponent";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const PagesLayout = () => {
  const [mode, setMode] = useState("light");
  const isSmallScreen = useMediaQuery('(max-width: 900px)'); // Media query for small screens

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const location = useLocation();
  console.log("Current mode:", mode); // Should be "light" or "dark"

  const getTitle = (pathname) => {
    // I don't want to make the top section of the page everytime, so this function uses the path to determine the title of the page
    const path = pathname.split("/")[2];
    const pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
    if (pageTitle === "Home") {
      return "Dashboard";
    }
    return pageTitle;
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={Theme(mode)}>
        <CssBaseline />
        <Box
          id="pageContainer"
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Sidebar */}
          <Box
            id="sidebarContainer"
            sx={{
              flex: isSmallScreen ? "0 0 6px" : "1",
              height: "100%",
            }}
          >
            <Sidebar />
          </Box>

          <Divider />

          {/* Main Content */}
          <Box
            id="restOfPage"
            sx={{
              flex: isSmallScreen ? "1" : "6",
              overflow: "auto",
              height: "100%",
            }}
          >
            {/* Header with toggle */}
            <Header title={getTitle(location.pathname)} mode={mode} toggleMode={toggleMode} screenSize={isSmallScreen} />

            <AddComponent />
            {/* Outlet for rendering page content */}
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default PagesLayout;
