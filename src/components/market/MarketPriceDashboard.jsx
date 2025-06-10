// src/components/market/MarketPriceDashboard.jsx
import React, { useState } from 'react';
import { Box, Grid, Typography, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';
import CommodityCard from './CommodityCard';
import CommodityChart from './CommodityChart';
import { commoditiesData, historicalData, analystConsensus } from '../../data/mockMarketData';

const MarketPriceDashboard = () => {
    // --- Original Logic Preserved ---
    const [watchlist, setWatchlist] = useState(['WHEAT', 'MAIZE', 'SOY']);
    const [selectedCommodityId, setSelectedCommodityId] = useState('WHEAT');

    const handleWatchlistChange = (event, newWatchlist) => {
        if (newWatchlist.length) { setWatchlist(newWatchlist); }
    };
    const handleSelectCommodity = (id) => { setSelectedCommodityId(id); };
    
    const watchedCommodities = commoditiesData.filter(c => watchlist.includes(c.id));
    const selectedCommodity = commoditiesData.find(c => c.id === selectedCommodityId);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>Market Prices & Analysis</Typography>

            {/* --- STYLING CHANGE: Watchlist Controls with Glass Effect --- */}
            <Paper sx={{
                p: 2, mb: 3,
                background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(31, 31, 31, 0.4)',
                backdropFilter: 'blur(15px)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.2)',
                
            }}>
                <Typography variant="subtitle2" sx={{mb: 1, color: 'text.primary'}}>My Watchlist:</Typography>
                <ToggleButtonGroup value={watchlist} onChange={handleWatchlistChange} aria-label="commodity watchlist"
                sx={{
                display: 'flex',
                overflowX: "auto",
                WebkitOverflowScrolling: "touch", // Enables smooth scrolling on iOS

                }}
                >
                    {commoditiesData.map(c => (
                        <ToggleButton key={c.id} value={c.id} aria-label={c.name}>{c.name.split(' ')[0]}</ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Paper>

            {/* Grid for cards is preserved */}
            <Grid container spacing={3} sx={{mb: 3}}>
                {watchedCommodities.map(commodity => (
                    <Grid item key={commodity.id} xs={12} sm={6} md={4} lg={2.4}>
                        <CommodityCard commodity={commodity} historicalData={historicalData[commodity.id]} onSelect={handleSelectCommodity}/>
                    </Grid>
                ))}
            </Grid>

            {/* Chart view is preserved */}
            <Grid container>
                <Grid item xs={12}>
                    <CommodityChart commodity={selectedCommodity} data={historicalData[selectedCommodityId]} consensus={analystConsensus[selectedCommodityId]} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MarketPriceDashboard;