
import { Box, Typography } from "@mui/material";
import {XAxis,YAxis,Tooltip,ResponsiveContainer,Area,AreaChart,} from "recharts";

const data = [
  { date: "Apr 5", Profit: 1000 },
  { date: "Apr 10", Profit: 3000 },
  { date: "Apr 15", Profit: 7000 },
  { date: "Apr 20", Profit: 15000 },
  { date: "Apr 25", Profit: 20000 },
  { date: "Apr 30", Profit: 22000 },
];

const StatChart = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "410px",
        margin: "0 auto",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "8px",
        background: (theme) => theme.palette.background.paper,

        
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "400",
          fontSize: "1.2rem",
          textAlign: "left",
          marginBottom: "16px",
        }}
      >Profit Margins
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "green",
          textAlign: "center",
          marginBottom: "16px",
          borderRadius: "1rem"
        }}
      >
        +35%
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#8884d8" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid  /> */}
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Profit"
            stroke="#8884d8"
            fillOpacity={1}
            
            fill="url(#colorSessions)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default StatChart;
