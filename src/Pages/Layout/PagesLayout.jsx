import { Box, CssBaseline, Divider, ThemeProvider, useMediaQuery } from "@mui/material";
import { useState, createContext, useContext } from "react";
import { Theme } from "../../theme/Theme";
import Header from "../../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import AddFarmComponent from "../../components/AddFarmComponent";


const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const PagesLayout = () => {
  const [mode, setMode] = useState("light");
  const isSmallScreen = useMediaQuery('(max-width: 900px)'); // Media query for small screens

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const location = useLocation();

  const getTitle = (pathname) => {
    // I don't want to make the top section of the page everytime, so this function uses the path to determine the title of the page
    const path = pathname.split("/")[2];
    const pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
    if (pageTitle === "") {
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
            overflow: "none",
          }}
        >
          {/* Sidebar */}
          <Box
            id="sidebarContainer"
            sx={{
              flex: isSmallScreen ? "0 0 6px" : "1",
              height: "100%",
              overflow: "auto",
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
              "&::-webkit-scrollbar": { width: "5px", borderRadius: "10px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#2c5f2dff",
              borderRadius: "1px", // Rounded edges
            },
            "&::-webkit-scrollbar-track": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
            "&::-webkit-scrollbar-thumb:hover": { background: "#1e4020" },
              height: "100%",
            }}
          >
            {/* Header with toggle */}
            <Header title={getTitle(location.pathname)} mode={mode} toggleMode={toggleMode} screenSize={isSmallScreen} />

            {/* {location.pathname !== "/user/" && (
                    <>
                    <AddFarmComponent />
                    </>
                  )} */}
            {/* Outlet for rendering page content */}
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default PagesLayout;
