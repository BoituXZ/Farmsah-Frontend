// src/pages/Farms.jsx
import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import FarmCard from "../components/FarmCard";
import FarmItem from "../components/FarmItem";
import AddFarmComponent from "../components/AddFarmComponent";

const dummyFarms = [
  {
    id: 1,
    slug: "green-valley",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    name: "Green Valley Farm",
    location: "Nakuru, Kenya",
    size: 50,
    livestock: "Cows, Goats",
    crops: "Maize, Beans",
  },
  {
    id: 2,
    slug: "sunrise-acres",
    image_url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    name: "Sunrise Acres",
    location: "Eldoret, Kenya",
    size: 120,
    livestock: "Chickens",
    crops: "Wheat, Barley",
  },
  {
    id: 3,
    slug: "riverbend",
    image_url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    name: "Riverbend Farm",
    location: "Kisumu, Kenya",
    size: 80,
    livestock: "Sheep",
    crops: "Rice, Sugarcane",
  },
];

const Farms = () => {
  const [farms, setFarms] = useState(dummyFarms);
  const theme = useTheme();

  // useEffect(() => {
  //   const fetchFarms = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3010/user/farms", { credentials: "include" });
  //       if (!response.ok) { throw new Error("Failed to fetch farms"); }
  //       setFarms(await response.json());
  //     } catch (error) {
  //       console.error("Error fetching farms:", error);
  //     }
  //   };
  //   fetchFarms();
  // }, []);

  return (
    <Box
      id="page-container"
      sx={{
        width: '100%', minHeight: '100vh', boxSizing: 'border-box',
        p: { xs: 2, md: 3 },
        // Use the theme's background image for the glass effect
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
              p: 2.5, position: 'sticky', top: '24px', // Makes it stay in view on scroll
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
      
      {/* The Add button component is unchanged in its placement */}
      <AddFarmComponent />
    </Box>
  );
};

export default Farms;