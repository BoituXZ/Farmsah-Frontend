import { Outlet, NavLink, Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography, ThemeProvider} from "@mui/material";
import { Theme } from "../../theme/Theme";

const Layout = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#f1b42f" : "black",
    textDecoration: "none",
    backgroundColor: isActive ? "#FFF" : "transparent",
    width: "5.91856rem",
    height: "2.7575rem",
    borderRadius: isActive ? "3.125rem" : "",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "0.875rem",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "var(--xanthous-accent)",
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      {/* <CssBaseline /> */}
      <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        // backgroundColor: "var(--xanthous-accent)",
        // backgroundImage: 'url("/assets/background3.jpg")',
        backgroundImage: {xs: 'url("/assets/background3.jpg")', sm: 'url("/assets/background3.jpg")', md: 'url("/assets/background.jpg")'},
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(40px)",
      }}
      >
      <Box
        sx={{
          display: "block",
          border: "1px solid rgba(217, 217, 217, 0.31)",
          backgroundColor: "rgba(217, 217, 217, 0.62)",
          width: "23rem",
          margin: "0.9rem auto",
          borderRadius: "5rem",
        }}
      >
        <AppBar
          position="static"
          sx={{
            background: "transparent",
            boxShadow: "none",
            borderRadius: "5rem",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "1.6rem",
              padding: "1rem",
              width: "100%",
            }}
          >
            <NavLink to="/" style={linkStyle}>
              <Typography variant="h2" 
              sx={{
                fontSize: {xs:"0.8rem", sm:"1.1rem", md:"0.9rem"}
              }}
              >Home</Typography>
            </NavLink>
            <NavLink to="/about" style={linkStyle}>
              <Typography variant="h2"
              sx={{fontSize: {xs:"0.8rem", sm:"1.1rem", md:"0.9rem"}}}
              >About Us</Typography>
            </NavLink>
            <NavLink to="/contact" style={linkStyle}>
              <Typography variant="h2"
              sx={{fontSize: {xs:"0.8rem", sm:"1.1rem", md:"0.9rem"}}}
              >Contact Us</Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        <Link
          to="/authentication"
          style={{
            textDecoration: "none",
            display: "inline-block",
            backgroundColor: "var(--hunter-green-primary)",
            color: "white",
            fontFamily: "var(--heading)",
            fontWeight: 500,
            padding: "10px 20px",
            borderRadius: "5rem",
            fontSize: "16px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, background-color 0.3s ease",
          }}
        >
          Sign Up
        </Link>
      </Box>
      <Outlet />
      </Box>
      

    </ThemeProvider>
  );
};

export default Layout;