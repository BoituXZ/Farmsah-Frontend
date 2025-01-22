import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { BarChart, SparkLineChart, PieChart } from "@mui/x-charts";


const StatCard = ({ title, value, chartType, chartData, trendType }) => {
  console.log("ChartType is:", chartType);
  console.log("ChartData is:", chartData);
  console.log("TrendType is:", trendType);

  const chartColors = {
    up: "rgb(171, 226, 171)",
    down: "rgba(255, 143, 143, 0.22)",
    neutral: "rgba(151, 150, 150, 0.22)",
  };

  const getChartColor = () => {
    if (trendType < 50) {
      return chartColors.down;
    } else if (trendType === 50) {
      return chartColors.neutral;
    } else {
      return chartColors.up;
    }
  };

  const renderChart = () => {
    const {data} = chartData;
    console.log("data is:", data)
    const chartColor = getChartColor();
    switch (chartType) {
      case "bar":
        return <BarChart data={chartData} colors={[chartColor]} />;
      case "line":
        return (
          <SparkLineChart
            plotType="line"
            data={data}
            height={60}
            area
            colors={[chartColor]} // Use the determined color for the line chart
          />
        );
      case "pie":
        return <PieChart data={chartData} colors={[chartColor]} />;
      default:
        return <Typography variant="p">No chart</Typography>;
    }
  };

  return (
    <Card
      variant="outlined"

      sx={{
        flex: "1",
        // flexBasis: "300px",
        maxHeight: "200px",
        maxWidth: "300px",
        padding: "0.4rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        margin: "auto",
        borderRadius: "0.5rem",
        background: (theme) => theme.palette.background.paper,
        "&:hover": {
          boxShadow: "none",
        },
            }}
          >
            <CardContent sx={{ padding: "0.5rem", margin: "0rem" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "1rem",
            fontWeight: "400",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}
        >
          {value}
        </Typography>
        <Typography variant="subtitle1"
          sx={{fontWeight:"200", fontSize:"0.8rem", marginBottom: "0.7rem"}}
        >
          Last 30 days
        </Typography>
        <Box
          sx={{
            // border: "1px solid rgb(0, 0, 0)",
            width: "100%",
            // height: "120px",
            padding: "0.3rem",
          }}
        >
          {renderChart()}
        </Box>
      </CardContent>
    </Card>
  );
};

// Prop validation
StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  chartType: PropTypes.oneOf(["bar", "line", "pie"]),
  chartData: PropTypes.object,
  trendType: PropTypes.number.isRequired,
};

export default StatCard;
