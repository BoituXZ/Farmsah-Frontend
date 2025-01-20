import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", lowYield: 3000, highYield: 10000 },
  { month: "Feb", lowYield: 4000, highYield: 23000 },
  { month: "Mar", lowYield: 3500, highYield: 5500 },
  { month: "Apr", lowYield: 5000, highYield: 8000 },
  { month: "May", lowYield: 6000, highYield: 9000 },
  { month: "Jun", lowYield: 4000, highYield: 7000 },
  { month: "Jul", lowYield: 3000, highYield: 6000 },
  { month: "Aug", lowYield: 1000, highYield: 17000 },
  { month: "Sep", lowYield: 5000, highYield: 8000 },
  { month: "Oct", lowYield: 6000, highYield: 9000 },
  { month: "Nov", lowYield: 4000, highYield: 7000 },
  { month: "Dec", lowYield: 3000, highYield: 16000 },
];

const StatBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "410px",
        margin: "0 auto",
        padding: "2rem 1rem",
        backgroundColor: "white",
        borderRadius: "8px",

        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "400",
          textAlign: "left",
          fontSize: "1.2rem",
          marginBottom: "8px",
        }}
      >
        Yield Data
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          color: "gray",
          marginBottom: "16px",
        }}
      >
        Low and High Yield Per Month
      </Typography>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="lowYield" fill="#1E88E5" name="Low Yield" />
          <Bar dataKey="highYield" fill="#90CAF9" name="High Yield" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StatBar;
