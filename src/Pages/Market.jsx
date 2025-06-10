// src/pages/Market.jsx
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import MarketPriceDashboard from "../components/market/MarketPriceDashboard";
import TradingModule from "../components/market/TradingModule";

const Market = () => {
  const theme = useTheme(); // Hook to access the theme for the background image

  return (
    // --- STYLING CHANGE APPLIED HERE ---
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        p: { xs: 2, md: 3 }, // Standardized padding for consistency
        // Use the theme's background image for the glass effect
        background: theme.palette.background.backgroundImage,
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
        color: 'text.primary', // Ensures text color adapts to the theme
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Farmer's Digital Marketplace
      </Typography>

      {/* The Stack layout is preserved */}
      <Stack spacing={4}>
        <Box>
          <MarketPriceDashboard />
        </Box>

        {/* --- STYLING CHANGE: The Divider is made theme-aware --- */}
        <Divider sx={{
          my: 4,
          borderColor: 'rgba(255, 255, 255, 0.2)', // A subtle divider that works on any background
          borderBottomWidth: 'thin'
        }}/>

        <Box>
          <TradingModule />
        </Box>
      </Stack>
    </Box>
  );
};

export default Market;