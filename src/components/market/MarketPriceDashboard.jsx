// src/components/market/MarketPriceDashboard.jsx
import React, { useState } from 'react';
import { Box, Grid, Typography, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';
import CommodityCard from './CommodityCard';
import CommodityChart from './CommodityChart';
import { commoditiesData, historicalData, analystConsensus } from '../../data/mockMarketData';

const MarketPriceDashboard = () => {
    const [watchlist, setWatchlist] = useState(['WHEAT', 'MAIZE', 'SOY']); // Default watchlist
    const [selectedCommodityId, setSelectedCommodityId] = useState('WHEAT'); // Default chart view

    const handleWatchlistChange = (event, newWatchlist) => {
        if (newWatchlist.length) {
            setWatchlist(newWatchlist);
        }
    };

    const handleSelectCommodity = (id) => {
        setSelectedCommodityId(id);
    }
    
    const watchedCommodities = commoditiesData.filter(c => watchlist.includes(c.id));
    const selectedCommodity = commoditiesData.find(c => c.id === selectedCommodityId);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Market Prices & Analysis
            </Typography>

            {/* Watchlist Controls */}
            <Paper sx={{ p: 1, mb: 3 }}>
                <Typography variant="subtitle2" sx={{mb: 1}}>My Watchlist:</Typography>
                <ToggleButtonGroup
                    value={watchlist}
                    onChange={handleWatchlistChange}
                    aria-label="commodity watchlist"
                >
                    {commoditiesData.map(c => (
                        <ToggleButton key={c.id} value={c.id} aria-label={c.name}>
                            {c.name.split(' ')[0]}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Paper>

            {/* Commodity Cards Grid */}
            <Grid container spacing={3} sx={{mb: 3}}>
                {watchedCommodities.map(commodity => (
                    <Grid item key={commodity.id} xs={12} sm={6} md={4} lg={2.4}>
                        <CommodityCard 
                            commodity={commodity} 
                            historicalData={historicalData[commodity.id]}
                            onSelect={handleSelectCommodity}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Detailed Chart View */}
            <Grid container>
                <Grid item xs={12}>
                    <CommodityChart 
                        commodity={selectedCommodity}
                        data={historicalData[selectedCommodityId]}
                        consensus={analystConsensus[selectedCommodityId]}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MarketPriceDashboard;