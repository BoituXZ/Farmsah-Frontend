// src/Pages/Insights.jsx
import { Box, Typography, Grid, Container, Tabs, Tab } from '@mui/material';
import InsightCard from '../components/insights/InsightCard';
import { useEffect, useState } from 'react';
import { mockInsights } from '../data/mockInsightsData';

const insightFilters = ['All', 'Critical', 'High', 'Medium'];

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // This effect simulates fetching and then sorting the data on load.
    try {
      // Simulate a network delay for a more realistic feel
      setTimeout(() => {
        // Sort insights by priority to show the most important ones first
        const sortedInsights = [...mockInsights].sort((a, b) => {
           const priorityOrder = { 'CRITICAL': 0, 'HIGH': 1, 'MEDIUM': 2 };
           return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        setInsights(sortedInsights);
      }, 500); // 500ms delay

    } catch (error) {
      console.error("Error fetching insights", error);
    }
  }, []); // Empty dependency array means this runs once on component mount

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  const filteredInsights = insights.filter(insight => {
    if (filter === 'All') return true;
    return insight.priority === filter.toUpperCase();
  });

  return (
    <Container maxWidth="xl" sx={{ p: { xs: 1, sm: 2, md: 3 }, backgroundColor: 'background.default', flexGrow: 1 }}>
        <Typography variant="h2" component="h1" sx={{ typography: 'h1', color: 'text.primary', mb: 2 }}>
            AI-Powered Insights
        </Typography>
        <Typography variant="body1" sx={{ typography: 'subtitle1', color: 'text.secondary', mb: 4 }}>
          Actionable intelligence to increase yield and mitigate risks on your farm.
        </Typography>

        {/* Filter Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
           <Tabs
            value={filter}
            onChange={handleFilterChange}
            aria-label="insight priority filters"
          >
             {insightFilters.map(f => <Tab key={f} label={f} value={f}/>)}
          </Tabs>
        </Box>

      <Box
        id="insightPageContainer"
        sx={{
          display: "grid",
          // This creates a responsive grid that shows as many 450px columns as can fit
          gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", 
          gap: "24px", // Increased gap for better spacing
        }}
      >
        {filteredInsights.map(insight => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </Box>
    </Container>
  );
};

export default Insights;