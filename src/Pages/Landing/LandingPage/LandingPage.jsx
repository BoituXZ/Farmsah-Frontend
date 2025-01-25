import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSeedling, faTractor, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import { Box, Button, ThemeProvider, Typography, useTheme } from "@mui/material"; // Added useTheme
import { Theme } from "../../../theme/Theme";

const LandingPage = () => {
  const theme = useTheme(); // Access the theme here

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: 'cover', // Ensures the image covers the box
          backgroundPosition: 'center', // Centers the image
          // border: 'solid 1px red',
          display: "flex",
          flexDirection: "column",
          maxHeight: "4096px",
        }}
      >
        {/* Hero Section */}
        <Box
          id="heroSection"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            flexWrap: "wrap",
            height: "1024px",
            border: "solid 2px blue", // Using theme.breakpoints here
            
          }}
        >
          {/* Headline Text */}
          <Box
            className={styles.headlineText}
            sx={{
              minWidth: {xs:"100%", sm:"50%"}, // Using theme.breakpoints here
              marginLeft: "1rem",
              marginBottom: "2.4rem",
              border: "solid 1px red",
              [theme.breakpoints.down('sm')]: { // Using theme.breakpoints here
                minWidth: "80%",
                marginLeft: "0.5rem",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                margin: "0",
                marginLeft: "1rem",
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontWeight: "700",
              }}
            >
              Southern African farmers lost
            </Typography>
            <Box
              component="span"
              sx={{
                textAlign: "center",
                fontSize: { xs: "2.5rem", sm: "4rem" },
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                margin: '0 1rem',
              }}
            >
              50%
            </Box>
            <Typography
              variant="h2"
              sx={{
                textAlign: "right",
                fontSize: { xs: "1rem", sm: "1.5rem" },
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              of their crops in 2024 due to<br /> unpredictable weather and poor planning.
            </Typography>
          </Box>

          {/* Supportive Headline */}
          <Box
            className={styles.supportiveHeadline}
            sx={{
              alignSelf: "self-end",
              width: "50%",
              marginRight: "1rem",
              padding: "1rem",
              marginBottom: "2.9rem",
              border: "solid 2px green",
              [theme.breakpoints.down('sm')]: { // Using theme.breakpoints here
                width: "90%",
                marginRight: "0.5rem",
                padding: "0.5rem",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "right",
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontWeight: "600",
              }}
            >
              We’re here to change that with<br />
              <span>AI-Powered Farming</span> Tools.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "right",
                fontSize: { xs: "0.8rem", sm: "1rem" },
                fontWeight: "600",
              }}
            >
              Get accurate crop suggestions, real-time weather insights, and smart tools to<br />
              boost your yields—no matter the climate challenges.
            </Typography>
          </Box>

          {/* Call To Action */}
          <Box
            className={styles.callToAction}
            component="div"
            sx={{
              background: "rgba(217, 217, 217, 0.48)",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "2rem 1rem",
              height: "12rem",
              [theme.breakpoints.down('sm')]: { // Using theme.breakpoints here
                flexDirection: "column",
                alignItems: "center",
                height: "auto",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "left",
                fontSize: { xs: "1.2rem", sm: "1.8rem" },
                fontWeight: "800",
                margin: { xs: "0 0.5rem", sm: "0 1rem" },
              }}
            >
              Start Optimizing Your Farm Today<br />
              See How It <Box component="span">Works</Box>
            </Typography>
            <Button
              sx={{
                alignSelf: "center",
                width: "12.9375rem",
                height: "4.8rem",
                borderRadius: "5rem",
                background: "#000",
                color: "#FFF",
                fontSize: { xs: "1rem", sm: "1.2rem" },
                margin: { xs: "1rem 0", sm: "0 3rem" },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
