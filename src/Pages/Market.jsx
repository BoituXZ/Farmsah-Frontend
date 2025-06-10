// src/pages/Market.jsx
import { Box, Divider, Stack, Typography } from "@mui/material";
import MarketPriceDashboard from "../components/market/MarketPriceDashboard";
import TradingModule from "../components/market/TradingModule";

const Market = () => {
  return (
    <Box sx={{p: {xs: 1, sm: 2, md: 3}, backgroundColor: 'grey.100' }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Farmer's Digital Marketplace
        </Typography>

        <Stack spacing={4}>
            {/* Top Section: Price Dashboard */}
            <Box>
                <MarketPriceDashboard />
            </Box>

            <Divider sx={{ my: 4 }}/>

            {/* Bottom Section: Trading Module */}
            <Box>
                <TradingModule />
            </Box>
        </Stack>
    </Box>
  );
};

export default Market;