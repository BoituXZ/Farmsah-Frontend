import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSeedling, faTractor, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Box, Button, Grid, ThemeProvider, Typography, useTheme } from "@mui/material"; // Added useTheme
import { Theme } from "../../../theme/Theme";

const LandingPage = () => {
  const theme = useTheme(); // Access the theme here

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          // backgroundImage: "url('/assets/background.jpg')",
          backgroundSize: 'cover', // Ensures the image covers the box
          backgroundPosition: 'center', // Centers the image
          display: "flex",
          flexDirection: "column",
          maxHeight: {sm:"100vh", md:"100%"},
          overflow: "hidden",
          [theme.breakpoints.down('sm')]: { // Using theme.breakpoints here
            maxHeight: "auto",
            width: "100vw",
          },
        }}
      >
        {/* Hero Section */}
        <Box
          id="heroSection"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: {sm: "0.1rem", md:"1rem"},
            flexWrap: "wrap",
            height: "100%",
            [theme.breakpoints.down('md')]: {
                height:"100vh",
                justifyContent: "space-evenly",
                paddingBottom: "0rem",
            }, // Using theme.breakpoints here
            
          }}
        >
          {/* Headline Text */}
          <Box
            
            sx={{
              minWidth: {xs:"100%", sm:"50%"}, // Using theme.breakpoints here
              marginLeft: "1rem",
              marginBottom: "2.4rem",
              [theme.breakpoints.down('sm')]: { // Using theme.breakpoints here
                minWidth: "70%",
                marginLeft: "0rem",
                marginRight: "1.2rem",
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
                color: "#fff",
                
              }}
            >
              50%
            </Box>
            <Typography
              variant="h2"
              sx={{
                textAlign: "right",
                fontSize: { xs: "1rem", sm: "1.5rem" },
                fontWeight: "900",
                lineHeight: "normal",
                [theme.breakpoints.up('sm')]: { 
                  textAlign: "left",
                  fontSize: "1.5rem",
                  marginLeft: "10rem",
                }// Using theme.breakpoints here
              }}
            >
              of their crops in 2024 due to<br /> unpredictable weather and poor planning.
            </Typography>
          </Box>

          {/* Supportive Headline */}
          <Box

            sx={{
              alignSelf: "self-end",
              width: "50%",
              marginRight: "1rem",
              padding: "1rem",
              marginBottom: "4rem",
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
            component="div"
            sx={{
              // background: "rgba(217, 217, 217, 0.48)",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "2rem 1rem",
              height: "12rem",
              [theme.breakpoints.down('md')]: { // Using theme.breakpoints here
                flexDirection: "column",
                padding: "0.1rem 0.1rem",
                height: "auto",
                alignItems: "center",
                margin: "0 1rem",
                // alignItems: "center",
                // height: "100%",
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
                [theme.breakpoints.down('md')]: { // Using theme.breakpoints here
                  textAlign: "center",
                  fontSize: "1.5rem",
                  display: "none"
                }
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
                [theme.breakpoints.down('md')]: { 
                  width: "9rem",
                  height: "4rem",
                }// Using theme.breakpoints here
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>

        <Box
      id="introSection"
      sx={{
        margin: 0,
        height: "1024px",
        // maxHeight: "1024px",
        display: "flex",
        flexWrap: "wrap",
        // background: "transparent",
        flexDirection: "column",
        gap: {sm: "0.1rem", md:"1rem"},
        [theme.breakpoints.down('md')]: {
          height: "100%",
         },
            
            
      }}
    >
      {/* Intro Banner */}
      <Box
        sx={{
          margin: 0,
          display: "flex",
          backgroundColor: "#000",
          color: "#FFF",
          height: "124px",
          [theme.breakpoints.down('md')]: {
            padding: "1rem",
          }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            alignSelf: "center",
            fontFamily: "var(--heading)",
            fontSize: "var(--h1)",
            margin: 0,
            padding: "1rem",
            [theme.breakpoints.down('md')]: {
              fontSize: "1.5rem",}
          }}
        >
          Farming Smarter for a Resilient Future
        </Typography>
      </Box>

      {/* Intro Section Body */}
      <Box
        sx={{
          flex: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            flex: 1,
            fontFamily: "var(--heading1)",
            fontWeight: 700,
            fontStyle: "oblique",
            padding: "1rem",
            textAlign: "center",
            
          }}
        >
          In 2024, Southern African farmers faced unprecedented crop losses due to unpredictable weather and a lack of tailored planning tools.<br />
          Our AI-powered platform changes the game by helping you make informed decisions.<br />
          From crop suggestions based on real-time weather insights to advanced tracking tools, we empower you to grow smarter, maximize yields,<br />
          and secure your farm’s future—no matter the challenges.
        </Typography>

        {/* Features Section */}
        <Grid
          container
          spacing={2}
          sx={{
            flex: 4,
            margin: "1rem 0",
            boxSizing: "border-box",
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
            height: "max-content",
            padding: "4rem 2rem",
            [theme.breakpoints.down('md')]: {
              flexDirection: "column",
            } // Using theme.breakpoints here
          }}
        >
          {[
            {
              icon: faSeedling,
              title: "AI-Powered Crop Suggestions",
              description: "Get personalized crop suggestions based on your farm’s location, soil type, and weather conditions.",
            },
            {
              icon: faCloud,
              title: "Real-Time Weather Insights",
              description: "Get accurate weather forecasts and insights to plan your farming activities effectively.",
            },
            {
              icon: faTractor,
              title: "Smart Farming Tools",
              description: "Access advanced tools to track your farm’s performance, monitor crop health, and optimize your yields.",
            },
            {
              icon: faInfoCircle,
              title: "Expert Guidance",
              description: "Connect with our team of experts for personalized advice and support to help you succeed.",
            },
          ].map((feature, index) => (
            <Grid
              key={index}
              item
              sx={{
                flex: 1,
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.485)",
                borderRadius: "1rem",
                [theme.breakpoints.up('md')]:{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "80%",
                  padding: "2rem",
                },
              }}
            >
              <Box
                sx={{
                  padding: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <FontAwesomeIcon
                  icon={feature.icon}
                  fontSize="80px"
                  style={{ color: "#000" }}
                  onMouseOver={(e) => (e.target.style.color = "var(--hunter-green-primary)")}
                  onMouseOut={(e) => (e.target.style.color = "#000")}
                />
              </Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Explore Button */}
        <Box
          sx={{
            flex: 1,
            margin: "auto",
            width: "14rem",
            [theme.breakpoints.down('md')]: {
              display: "none"
            }
          }}
        >
          <Link to="/user/home" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textAlign: "center",
                height: "4.2rem",
                background: "rgba(255, 255, 255, 0.485)",
                color: "#000",
                fontSize: "1.2rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                borderRadius: "50px",
                borderColor: "#000",
                border: "none",
                "&:hover": {
                  background: "#000",
                  color: "#FFF",
                },
                [theme.breakpoints.down('md')]: {
                  backgroundColor: "#000",
                  color: "#FFF",
                }
              }}
            >
              Explore
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
