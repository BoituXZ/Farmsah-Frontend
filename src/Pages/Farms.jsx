// src/pages/Farms.jsx
import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import FarmCard from "../components/FarmCard";
import FarmItem from "../components/FarmItem";
import AddFarmComponent from "../components/AddFarmComponent";

const Farms = () => {
  const [farms, setFarms] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/farms`, { credentials: "include" });
        if (!response.ok) { throw new Error("Failed to fetch farms"); }
        setFarms(await response.json());
      } catch (error) {
        console.error("Error fetching farms:", error);
      }
    };
    fetchFarms();
  }, []);

  return (
    <Box
      id="page-container"
      sx={{
        width: '100%', minHeight: '100vh', boxSizing: 'border-box',
        p: { xs: 2, md: 3 },
        background: theme.palette.background.backgroundImage,
        backgroundSize: "cover", backgroundAttachment: 'fixed',
      }}
    >
      <Grid container spacing={3}>
        {/* Main Content: Farm Cards */}
        <Grid item xs={12} md={8}>
          <Box
            id="mainContent"
            sx={{ display: "flex", flexDirection: "column", gap: 3, }}
          >
            {farms.map((farm) => (
              <FarmCard
                key={farm.id} slug={farm.slug} image={farm.image_url || "https://via.placeholder.com/150"}
                farmName={farm.name} location={farm.location} size={`${farm.size} acres`}
                livestock={farm.livestock || "No livestock"} crops={farm.crops}
              />
            ))}
          </Box>
        </Grid>

        {/* Side Content: Farm List */}
        <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
          <Paper
            elevation={6}
            sx={{
              p: 2.5, position: 'sticky', top: '24px',
              background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(31, 31, 31, 0.4)',
              backdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
            }}
          >
            <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 2, textAlign: 'center' }}>
              All Farms
            </Typography>
            <Box id="sideContentBody" sx={{ display: "flex", flexDirection: "column", gap: '10px' }}>
              {farms.map((farm) => (
                <FarmItem key={farm.id} farmName={farm.name} location={farm.location} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      <AddFarmComponent />
    </Box>
  );
};

export default Farms;
