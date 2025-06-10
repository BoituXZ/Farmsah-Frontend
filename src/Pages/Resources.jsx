// src/pages/user/Resources.jsx
import { useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab } from "@mui/material";
import { resourcesData, resourceCategories } from "../data/mockResourceData";
import ResourceCard from "../components/resources/ResourceCard";
import FeaturedResource from '../components/resources/FeaturedResource';

const Resources = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };
  
  // Find the single featured resource from our data
  const featuredResource = resourcesData.find(res => res.featured);
  
  // Filter the list to display based on the selected tab
  const filteredResources = resourcesData.filter(resource => {
    if (filter === 'All') return !resource.featured; // Show all but the featured one
    return resource.category === filter && !resource.featured;
  });

  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 }, backgroundColor: 'background.default', flexGrow: 1 }}>
      <Container maxWidth="lg">
        {/* Page Title using theme typography */}
        <Typography variant="h2" component="h1" sx={{ typography: 'h1', color: 'text.primary', mb: 2 }}>
          Knowledge Hub & Resources
        </Typography>
        <Typography variant="body1" sx={{ typography: 'subtitle1', color: 'text.secondary', mb: 4 }}>
          Stay informed with the latest market analysis, best practices, and technological advancements.
        </Typography>

        {/* Featured Resource Component */}
        <FeaturedResource resource={featuredResource} />

        {/* Filter Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
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
        </Box>
        
        {/* Grid of Resource Cards */}
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