import { Outlet, NavLink, Link } from "react-router-dom";
import styles from './Layout.module.css'
import Sidebar from "./Sidebar/Sidebar";
import { Box, CssBaseline, Divider, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Theme } from "../../theme/Theme";
import Header from "../../components/Header";
// TODO make everyting material UI
const Layout = () => {

    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'red' : 'black',
        textDecoration: 'none',
        background: isActive ? '#FFF' : "None",
        width: isActive ? "5.91856rem":"5.91856rem",
        height: isActive ? "2.7575rem":"2.7575rem",
        borderRadius: isActive ? "3.125rem": "",
      });


  return (
    <>
      <section className={styles.navBarContainer}>
        <nav className={styles.navBar}>
          <ul className={styles.navBarUl}>
            
              <NavLink to="/" style={linkStyle}>
                <li className={styles.navBarLi}>
                  Home
                </li>
              </NavLink>

              <NavLink to="/about" style={linkStyle}>
                <li className={styles.navBarLi}>
                  About Us
                </li>
              </NavLink>

              <NavLink to="/contact" style={linkStyle}>
                <li className={styles.navBarLi}>
                  Contact Us
                </li>
              </NavLink>
          </ul>
        </nav>
      </section>
      <div className={styles.signupButtonContainer}>
      <Link to="/authentication" className={styles.signupButton}>Sign Up</Link>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;




export const PagesLayout = () => {
  // Theme mode state
  const [mode, setMode] = useState("light"); // Theme mode state
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
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
            flex: "1",
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
            flex: "6",
            overflow: "auto",
            height: "100%",
          }}
        >
          {/* Header with toggle */}
          <Header title="Dashboard" mode={mode} toggleMode={toggleMode} />

          {/* Outlet for rendering page content */}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};