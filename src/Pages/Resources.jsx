// src/pages/user/Resources.jsx
import { useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab, useTheme, Paper } from "@mui/material";
import { resourcesData, resourceCategories } from "../data/mockResourceData";
import ResourceCard from "../components/resources/ResourceCard";
import FeaturedResource from '../components/resources/FeaturedResource';

const Resources = () => {
  // --- ALL LOGIC PRESERVED ---
  const [filter, setFilter] = useState('All');
  const theme = useTheme();

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };
  
  const featuredResource = resourcesData.find(res => res.featured);
  
  const filteredResources = resourcesData.filter(resource => {
    if (filter === 'All') return !resource.featured;
    return resource.category === filter && !resource.featured;
  });

  return (
    // --- STYLING APPLIED TO THE PAGE CONTAINER ---
    <Box sx={{
        width: '100%', minHeight: '100vh', boxSizing: 'border-box',
        p: { xs: 2, md: 3 },
        background: theme.palette.background.backgroundImage,
        backgroundSize: "cover", backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ typography: 'h1', color: 'text.primary', mb: 2 }}>
          Knowledge Hub & Resources
        </Typography>
        <Typography variant="body1" sx={{ typography: 'subtitle1', color: 'text.secondary', mb: 4 }}>
          Stay informed with the latest market analysis, best practices, and technological advancements.
        </Typography>

        <FeaturedResource resource={featuredResource} />

        {/* --- STYLING APPLIED TO TABS WRAPPER --- */}
        <Paper
          elevation={4}
          sx={{
              mb: 4,
              background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(31, 31, 31, 0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Tabs
            value={filter}
            onChange={handleFilterChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="resource categories"
          >
             {resourceCategories.map(category => (
               <Tab key={category} label={category} value={category} />
             ))}
          </Tabs>
        </Paper>
        
        <Grid container spacing={4}>
          {filteredResources.map((resource) => (
            <Grid item key={resource.id} xs={12} sm={6} md={4}>
              <ResourceCard resource={resource} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Resources;