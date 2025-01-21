import { Outlet, NavLink, Link } from "react-router-dom";
import styles from './Layout.module.css'
import Sidebar from "./Sidebar/Sidebar";
import { Box, Divider } from "@mui/material";
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
  return (
    <Box
      id="pageContainer"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh', // Set height to viewport height
        overflow: 'hidden', // Prevent whole page scrolling
      }}
    >
      <Box
        id="sidebarContainer"
        sx={{
          flex: '1',
          border: 'solid 1px red',
          height: '100%', // Ensure it spans the full height
        }}
      >
        <Sidebar />
      </Box>

      <Box
        id="restOfPage"
        sx={{
          flex: '6',
          overflow: 'auto', // Enable scrolling only for this section
          height: '100%', // Ensure it spans the full height
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};