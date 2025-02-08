import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { BarChart, SparkLineChart, PieChart } from "@mui/x-charts";
import GrassIcon from '@mui/icons-material/Grass';

// Screen size uses a media query to check how big the screen is
const StatCard = ({ title, value, chartType, chartData, trendType, screenSize }) => {
  

  return (
    <>
    <Card sx={{ height: "180px", width: "290px", border: "solid 1px red", padding: "5px", display: "flex", flexDirection: "column",
      backgroundColor: "rgb(255, 255, 255)",
      backdropFilter: "blur(10px)",
    }}>
        <Box id="statCardHeader"
        sx={{
          border: "solid 1px blue",
          height: "20px",
          flex: "1",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        >
          <Typography variant="h1"
          sx={{fontSize: "1.2rem",
            fontWeight: "500",
          }}
          >{title}</Typography>
          <Box id="statCardHeaderIcon">
            <GrassIcon />
          </Box>
        </Box>
        <Box id="statCardMiddle"
        sx={{
            border: "solid 1px green",
            height: "50px",
            flex: "2"
          }}
        >
        </Box>
        <Box id="statCardFooter"
        sx={{
          border: "solid 1px brown",
          height: "100%", 
          flex: "4"
        }}

        >

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
  chartData: PropTypes.object,
  trendType: PropTypes.number.isRequired,
  screenSize: PropTypes.bool.isRequired,
};

export default StatCard;
