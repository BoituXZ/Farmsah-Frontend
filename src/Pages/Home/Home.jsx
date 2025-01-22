import React from "react";
import { CssBaseline, Box, Typography, Card } from "@mui/material";
import { useThemeContext } from "../../Pages/Layout/Layout";
import StatCard from "../../components/StatCard";
import StatChart from "../../components/StatChart";
import StatBar from "../../components/StatBar";

const Home = () => {
  const { mode } = useThemeContext();

  const cropsData = { data: [1, 2, 4, 5, 9, 10, 12, 14, 26, 28, 45] };
  const weatherData = { data: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50] };
  const waterData = { data: [3, 1, 4, 3, 5, 1] };
  const profitsData = { data: [1000, 1242, 170, 1890, 1901, 2456, 300, 2789, 2890, 5601] };

  const trendType = ({ data }) => {
    if (data.length < 2) return "neutral";

    const lastValue = data[data.length - 1];
    const maxValue = Math.max(...data.slice(0, -1));
    const minValue = Math.min(...data.slice(0, -1));

    return lastValue > maxValue ? "up" : lastValue < minValue ? "down" : "neutral";
  };

  return (
    <Box
      id="page"
      sx={{
        color: "text.primary",
        minHeight: "100vh",
        padding: "1rem",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <CssBaseline />
      <Box id="bodyContent" sx={{ padding: "1rem" }}>
        <Box id="bodyOverview">
          <Box
            id="overviewContent"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              width: "100%",
            }}
          >
            <StatCard title="Crops" value="1203Kg" chartType="line" chartData={cropsData} trendType={trendType(cropsData)} />
            <StatCard title="Weather" value="48°F" chartType="line" chartData={weatherData} trendType={trendType(weatherData)} />
            <StatCard title="Water" value="129,000L" chartType="line" chartData={waterData} trendType={trendType(waterData)} />
            <StatCard title="Profits" value="$12,000" chartType="line" chartData={profitsData} trendType={trendType(profitsData)} />
          </Box>
        </Box>
        <Box id="bodyCharts" sx={{ display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap", height: "453px", padding: "1rem 0", gap: "1rem" }}>
          <Box id="yieldGraph" sx={{ flex: "1", borderRadius: "0.5rem" }}>
            <Card variant="outlined">
              <StatBar />
            </Card>
          </Box>
          <Box id="profitGraph" sx={{ flex: "1", borderRadius: "0.5rem" }}>
            <Card variant="outlined">
              <StatChart />
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
