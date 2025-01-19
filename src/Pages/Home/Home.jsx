import  { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Typography, IconButton, Card } from "@mui/material";
import { homeTheme } from "../../theme/Theme";
import StatCard from "../../components/StatCard";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StatChart from "../../components/StatChart";
import StatBar from "../../components/StatBar";

const Home = () => {
 // Chart data for each card
const cropsData = {
  data: [1, 2, 4, 5, 9, 10, 12, 14, 26, 28, 45],

}

const weatherData = {
  data: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
}

const waterData = {
  data: [3, 1, 4, 3, 5, 1],
}

const profitsData = {
  data: [1000, 1242,  170, 1890, 1901, 2456, 300, 2789, 2890, 5601],

}

const trendType = ({ data }) => {
  if (data.length < 2) return "neutral"; // Not enough data to determine trend

  const lastValue = data[data.length - 1];
  const maxValue = Math.max(...data.slice(0, -1));
  const minValue = Math.min(...data.slice(0, -1));

  if (lastValue > maxValue) {
    return "up";
  } else if (lastValue < minValue) {
    return "down";
  } else {
    return "neutral";
  }
};

  // Theme mode state
  const [mode, setMode] = useState("light"); // Light mode by default
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={homeTheme(mode)}>
      <CssBaseline />
      <Box
        id="page"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderBottom: "1px dashed red",
          minHeight: "100vh",
          
        }}
      >
        {/* Header */}
        <Box
          id="pageHeader"
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            padding: "0.2rem",
            display: "flex",
            justifyContent: "space-between",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "2rem",
              fontWeight: "400",
              // border: "solid 1px blue",
            }}
          >
            Dashboard
          </Typography>

          {/* Toggle Mode Button */}
          <IconButton onClick={toggleMode} color="inherit" sx={{border: "solid 1px black"}}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>

        {/* Body Content */}
        <Box id="bodyContent" sx={{ padding: "1rem" }}>
          <Box id="bodyOverview">
            <Typography
              variant="h1"
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                padding: "1rem",
              }}
            >
              Overview
            </Typography>
            <Box
              id="overviewContent"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                width: "100%",
                padding: "0.2rem",
              }}
            >
              <StatCard title="Crops" value="1203Kg" chartType="line" chartData={cropsData} trendType={trendType(cropsData)}  />
              <StatCard title="Weather" value="48°F"   chartType="line" chartData={weatherData} trendType={trendType(weatherData)}/>
              <StatCard title="Water" value="129,000L"  chartType="line" chartData={waterData} trendType={trendType(waterData)}/>
              <StatCard title="Profits" value="$12,000" chartType="line" chartData={profitsData} trendType={trendType(profitsData)}/>
            </Box>
          </Box>
          <Box id="bodyCharts"  sx={{display:"flex",flexDirection:"row", width:"100%", flexWrap:"wrap", height:"453px", padding:"1rem", gap:"1rem"}}> 
              <Box  id="yieldGraph" sx={{flex:"1", borderRadius:"0.5rem"}}>
                <Card variant="outlined">
                  <StatBar/>
                </Card>
                
              </Box>
              <Box id="profitGraph" sx={{flex:"1", borderRadius:"0.5rem"}}>
                <Card variant="outlined">
                  <StatChart/>
                </Card>
                
              </Box>
          </Box>
          <Box id="bodyDetails" sx={{border:"solid 1px green"}}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                padding: "1rem",
              }}
            >
              Details
            </Typography>
            <Box
              id="detailsContent"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                width: "100%",
                padding: "0.2rem",
              }}
            >
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
