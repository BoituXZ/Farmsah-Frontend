// src/components/market/CommodityChart.jsx
import React, { useState } from 'react';
import { Box, Paper, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ForumIcon from '@mui/icons-material/Forum';


const CommodityChart = ({ commodity, data, consensus }) => {
    const [timeframe, setTimeframe] = useState(90); // default to 3 months

    if (!commodity) {
        return (
            <Paper sx={{p:3, textAlign: 'center', height: '100%'}}>
                <Typography variant="h6">Select a commodity from your watchlist to view detailed trends.</Typography>
            </Paper>
        );
    }
    
    const handleTimeframeChange = (event, newTimeframe) => {
        if (newTimeframe !== null) {
            setTimeframe(newTimeframe);
        }
    };
    
    const filteredData = data.slice(-timeframe);

  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography variant="h5">{commodity.name} Price Trend</Typography>
            <ToggleButtonGroup
              color="primary"
              value={timeframe}
              exclusive
              onChange={handleTimeframeChange}
              size="small"
            >
              <ToggleButton value={30}>1M</ToggleButton>
              <ToggleButton value={90}>3M</ToggleButton>
              <ToggleButton value={180}>6M</ToggleButton>
              <ToggleButton value={365}>1Y</ToggleButton>
            </ToggleButtonGroup>
        </Box>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip formatter={(value) => [`${value.toFixed(2)} ${commodity.unit}`, "Price"]}/>
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <Box sx={{ mt: 2, p: 2, backgroundColor: 'action.hover', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
          <ForumIcon color="action" sx={{mr: 1}}/>
          <Typography variant="body2">{consensus}</Typography>
      </Box>
    </Paper>
  );
};

export default CommodityChart;