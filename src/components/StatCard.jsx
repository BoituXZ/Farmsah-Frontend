import PropTypes from "prop-types";
import { Card, Typography, Box } from "@mui/material";
import GrassIcon from '@mui/icons-material/Grass';
import { Money, Surfing, Water } from "@mui/icons-material";

// Screen size uses a media query to check how big the screen is
const StatCard = ({ title, value, trendType,}) => {
  

  const renderIcon = () => {
    switch (title) {
      case "Crops":
        return <GrassIcon  sx={{color:"green", borderRadius: "50%", backgroundColor:"rgba(44, 135, 8, 0.3)", padding:"2px"}}/>;
      case "Water":
        return <Water sx={{color:"rgb(11, 186, 192)", borderRadius: "50%", backgroundColor:"rgba(8, 55, 135, 0.3)", padding:"2px"}}/>;
      case "Weather":
        return <Surfing sx={{color:"goldenRod", borderRadius: "50%", backgroundColor:"rgba(135, 112, 8, 0.3)", padding:"2px"}}/>;
      case "Profits":
        return <Money sx={{color:"black", borderRadius: "50%", backgroundColor:"rgba(20, 84, 25, 0.3)", padding:"2px"}}/>;
      default:
        return null;
    }
  };

  const randomPercentage = Math.floor(Math.random() * 100) + 1;

  return (
    <>
      <Card
        sx={{
          height: "180px",
          width: "290px",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          backdropFilter: "blur(10px)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Box
          id="statCardHeader"
          sx={{
            height: "20px",
            flex: "2",
            display: "flex",
            backgroundColor: "rgba(202, 195, 195, 0)",
            flexDirection: "row",
            padding: "0px 5px",
            textAlign: "center",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "1.2rem", fontWeight: "600" }}
          >
            {title}
          </Typography>
          <Box id="statCardHeaderIcon"
          sx={{
            padding: "5px",
          }}
          >{renderIcon()}</Box>
        </Box>
        <Box
          id="statCardMiddle"
          sx={{
            backgroundColor: "rgba(202, 195, 195, 0)",
            height: "50px",
            flex: "3",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 5px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "1.8rem", fontWeight: "600" }}
          >
            {value}
          </Typography>
          <Box
            id="statCardMiddleInfo"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: trendType === 1 ? "rgba(60, 255, 60, 0.61)" : "rgba(255, 60, 60, 0.61)",
              textTransform: "uppercase",
              padding: "1px",
              borderRadius: "3px",
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "0.6rem", fontWeight: "600", padding: "1px" }}
            >
              {trendType === 1 ? "Increased" : "Decreased"}
            </Typography>
          </Box>
        </Box>
        <Box
          id="statCardFooter"
          sx={{
            backgroundColor: "rgba(202, 195, 195, 0)",
            height: "100%",
            flex: "2",
          }}
        >
          <Box
            id="statCardTrend"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100%",
              padding: "5px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "0.8rem", fontWeight: "600", width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center" }}
            >
              {trendType === 1 ? (
                <Box sx={{display: "flex", flexDirection: "row"}}>
                  
                  Going up by{" "}
                  <Box sx={{ color: "green" }}>
                    +{randomPercentage}%
                  </Box>
                </Box>
              ) : (
                <>
                  Going down by{" "}
                  <Box sx={{ color: "red" }}>
                    -{randomPercentage}%
                  </Box>
                </>
              )}
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

// Prop validation
StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  chartType: PropTypes.oneOf(["bar", "line", "pie"]),
  trendType: PropTypes.string.isRequired,
  screenSize: PropTypes.bool.isRequired,
};

export default StatCard;
